import { Link } from "react-router-dom";
import  "./Login.css";

const Login = () => {
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
                    <form>
                        <div className="mt-4">
                            <p className="py-2">User name or email address</p>
                            <input className="w-full border p-4 border-gray-200 rounded-lg" type="email" name="email" placeholder="Enter your email address" />
                        </div>
                        <div className="my-4">
                            <p className="py-2">Password</p>
                            <input className="w-full border p-4 border-gray-200 rounded-lg" type="password" name="password" placeholder="Enter your valid password" />
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
                    <div className="my-4 flex gap-4 justify-center">
                    <button className="btn">Google</button>
                    <button className="btn">Github</button>
                    </div>
                    <p className="text-center mt-4">New user ? Please  <Link to="/register" className="text-red-500 ml-4">Create an account</Link></p>
                </div>
            </div>
    )
}

export default Login