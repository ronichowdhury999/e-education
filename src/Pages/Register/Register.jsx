import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import useAuth from "../../Components/Hooks/useAuth";

const Register = () => {
    const { createUser } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const { email, password } = data
        createUser(email, password)
            .then(result => {
                const currentUser = result.user;
                console.log(currentUser);
            })
            .then(error => console.error(error))
    }
    return (
        <div className="bgLogin-img grid lg:grid-cols-2">
            <div className="p-12 lg:grid hidden">
                <div className="flex flex-col items-center justify-center">
                    <img className="w-72" src="https://dreamslms-wp.dreamstechnologies.com/wp-content/uploads/2023/02/login-img.png" alt="" />
                    <h3 className="text-4xl font-semibold">Welcome to dreams LMS.</h3>
                    <p className="text-sm py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci facere incidunt illum blanditiis aut possimus dignissimos dolorem assumenda.</p>
                </div>
            </div>
            {/* login form */}
            <div className="md:px-20 md:py-6 p-10 bg-white">
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
                            {...register('fullName', { required: true })}
                            placeholder="name"
                            className="input input-bordered"
                            required />
                        {errors.fullName && <p className="text-red-500 text-sm pt-2">Provide your name</p>}
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
                                type='text'
                                {...register('password', { required: true })}
                                placeholder="password"
                                className="input input-bordered w-full"
                                required />
                        </div>
                        {errors.password && <p className="text-red-500 text-sm pt-2">provide your password</p>
                        }
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