import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import useAuth from "../../Components/Hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";

const Register = () => {
    const { createUser, userUpdateProfile } = useAuth()
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password, ConfirmPassword, name, photoUrl } = data
        console.log(name);
        if (password.length < 8) {
            setError('Password must be at least 8 characters');
            return;
        }
        if (!/^(?=.*[A-Z]).+$/.test(password)) {
            setError('Password must contain at least one uppercase letter')
            return;
        }
        if (!/^(?=.*[!@#$%^&*]).+$/.test(password)) {
            setError('Password must contain at least one special character')
            return;
        }
        if (password !== ConfirmPassword) {
            setError('please enter your same confirmation password')
            return;
        }
        setError('')
        createUser(email, password)
            .then(() => {
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        toast.success('check your email address and verification now !')
                    })
                userUpdateProfile(name, photoUrl)
                    .then(() => {
                    })
                    .catch()
                reset()
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div className="relative lg:flex ">
            <div className="p-12 lg:flex hidden lg:w-1/2 h-screen bgLogin-img overflow-hidden fixed border">
                <div className="flex flex-col items-center justify-center ">
                    <img className="w-72" src="https://dreamslms-wp.dreamstechnologies.com/wp-content/uploads/2023/02/login-img.png" alt="" />
                    <h3 className="text-4xl font-semibold">Welcome to dreams LMS.</h3>
                    <p className="text-sm py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae expedita mollitia incidunt recusandae nemo unde cupiditate? </p>
                </div>
            </div>
            {/* login form */}
            <div className="md:px-20 md:py-6 p-10 bg-white w-full lg:w-1/2 absolute lg:left-1/2">
                <div className="flex justify-between">
                    <img className="w-40" src="https://dreamslms-wp.dreamstechnologies.com/wp-content/themes/dreamslms/assets/images/logo.svg" alt="logo" />
                    <Link to="/" className="underline cursor-pointer hover:text-red-600">Back to home</Link>
                </div>
                <h1 className="text-3xl font-bold mt-6">Registration account</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="name"
                            {...register('name', { required: true })}
                            placeholder="name"
                            className="input input-bordered"
                            required />
                        {errors.name && <p className="text-red-500 text-sm pt-2">Provide your name</p>}
                    </div>
                    {/* EMAIL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            {...register('email', { required: true })}
                            placeholder="email"
                            className="input input-bordered"
                            required />
                        {errors.email && <p className="text-red-500 text-sm pt-2">provide your email</p>}
                    </div>
                    {/* photo url */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            {...register('photoUrl', { required: true })}
                            placeholder="Photo url"
                            className="input input-bordered"
                            required />
                        {errors.photoUrl && <p className="text-red-500 text-sm pt-2">provide your photo url</p>}
                    </div>
                    {/* PASSWORD */}
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
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                    {/* Confirm password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                {...register('ConfirmPassword', { required: true })}
                                placeholder="Confirm Password"
                                className="input input-bordered w-full"
                                required />
                        </div>
                        {errors.ConfirmPassword && <p className="text-red-500 text-sm pt-2">provide your confirm password</p>
                        }
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-error">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account ? Please  <Link to="/login" className="text-red-500 ml-2">Login</Link></p>
            </div>
        </div >
    )
}

export default Register