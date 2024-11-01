import { Link } from "react-router-dom"

const Register = () => {
    return (
        <div>
           <div className="flex justify-center flex-col items-center">
            <h1 className="text-3xl font-sans mt-4">Register Now</h1>
            <div className="card mt-2 bg-base-100 lg:w-[30%] w-[90%] shrink-0 shadow-2xl p-8">
                <form>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center">Already have an account ? Please<Link to="/login"><button className="btn btn-link">Login</button></Link></p>
            </div>
        </div>
        </div>
    )
}

export default Register