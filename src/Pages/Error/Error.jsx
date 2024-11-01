import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className="text-center items-center mt-10">
            <div className="flex items-center justify-center">
            <img src="https://dreamslms-wp.dreamstechnologies.com/wp-content/themes/dreamslms/assets/images/error-01.png" alt="" />
            </div>
            <h3 className="text-5xl font-bold">Page is not found</h3>
            <button className="pt-10"> <Link to="/" className="btn btn-error">Home</Link></button>
        </div>
    )
}

export default Error