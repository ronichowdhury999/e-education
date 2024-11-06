import { Link } from "react-router-dom";
import "./Login.css";
import { useForm } from "react-hook-form";
import useAuth from "../../Components/Hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
    const { signInUser} = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                const currentUser = result.user;
                console.log('sign in user', currentUser);
            })
            .catch(error => console.error(error))
    }
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type='text'
                                {...register('password', { required: true })}
                                placeholder="password"
                                className="input input-bordered w-full"
                                required />
                        </div>
                        {errors.password && <p className="text-red-500 text-sm pt-2">provide your password</p>
                        }
                    </div>
                    <div className="py-4 flex items-center justify-between">
                        <div>
                            <input type="checkbox" name="" id="" />
                            <span className="ml-2">Remember me</span>
                        </div>
                        <div>
                            <button>Forgot password</button>
                        </div>
                    </div>
                    <button className="mt-4 w-full btn btn-error">Login</button>
                </form>
               <SocialLogin/>
                <p className="text-center mt-4">New user ? Please  <Link to="/register" className="text-red-500 ml-4">Create an account</Link></p>
            </div>
        </div>
    )
}

export default Login