import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useForm } from "react-hook-form";
import useAuth from "../../Components/Hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Login = () => {
    const { signInUser, user, } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation()
    const navigate = useNavigate();
    console.log(location);
    const emailRef = useRef(null)
    console.log('emailref', emailRef.current);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                const currentUser = result.user;
                if (currentUser.emailVerified) {
                    console.log('email varified successfully');
                } else {
                    console.log('check your email varified');
                }
                reset()
                toast.success('user login successful')
                // navigate('/aboutUs')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    // forgate password reset 
    // const handelEmailResetPassword = () => {
    //     const email = emailRef.current.value
    //     if (!email) {
    //         console.error("provide the email.");
    //         return;
    //     }
    //     forgatePasswordEmailReset(email)
    //         .then(() => {
    //             console.log('email reset successful');
    //         })
    //         .catch(error => console.log(error))
    // }
    useEffect(() => {
        if (user) {
            navigate(location?.state || '/')
        }
    }, [user])
    return (
        <div className="bgLogin-img h-screen border grid lg:grid-cols-2 md:grid-cols-1">
            <div className="p-12 lg:grid hidden">
                <div className="flex flex-col items-center justify-center">
                    <img className="w-72" src="https://dreamslms-wp.dreamstechnologies.com/wp-content/uploads/2023/02/login-img.png" alt="" />
                    <h3 className="text-4xl font-semibold">Welcome to dreams LMS.</h3>
                    <p className="text-sm py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci facere incidunt illum blanditiis aut possimus dignissimos dolorem assumenda.</p>
                </div>
            </div>
            {/* login form */}
            <div className="border md:px-20 md:py-6 p-10 bg-white">
                <div className="flex justify-between">
                    <img className="w-40" src="https://dreamslms-wp.dreamstechnologies.com/wp-content/themes/dreamslms/assets/images/logo.svg" alt="logo" />
                    <Link to="/" className="underline cursor-pointer hover:text-red-600">Back to home</Link>
                </div>
                <h1 className="text-3xl font-bold mt-6">Login to your account</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            ref={emailRef}
                            type="email"
                            {...register('email', { required: true })}
                            placeholder="email"
                            className="input input-bordered"
                            required />
                        {errors.email && <p className="text-red-500 text-sm pt-2">provide your email</p>}
                    </div>
                    {/* Password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                {...register('password', { required: true })}
                                placeholder="password"
                                className="input input-bordered w-full"
                                required />
                            <p className="absolute top-3 right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                            </p>
                        </div>
                        {errors.password && <p className="text-red-500 text-sm pt-2">provide your password</p>
                        }
                    </div>
                    {/* Terms and condition checkbox */}
                    <div className="py-4 flex items-center justify-between">
                        <div className="py-4">
                            <input
                                type="checkbox"
                                {...register('termsAccepted', { required: true })}
                            />
                            <span className="ml-2">I accept the Terms and Conditions</span>
                            {errors.termsAccepted && (
                                <p className="text-red-500 text-sm pt-2">Please accept the terms and conditions</p>
                            )}
                        </div>

                        {/* <ForgatePasswordEmail /> */}
                        <button>Forgate password</button>
                    </div>
                    <button className="mt-4 w-full btn btn-error">Login</button>
                </form>
                <SocialLogin />
                <p className="text-center mt-4">New user ? Please  <Link to="/register" className="text-red-500 ml-4">Create an account</Link></p>
            </div>
        </div>
    )
}

export default Login