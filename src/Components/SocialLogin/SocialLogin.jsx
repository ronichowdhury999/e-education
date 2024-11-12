import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";
const SocialLogin = () => {
    const { googleSignInUser, githubLoginUser } = useAuth()
    const handelSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                const currentUser = result.user;
                console.log(currentUser);
                toast.success('User login successful');
            })
            .catch(error => console.error(error));
    }
    return (
        <div className="my-4 flex gap-4 justify-center">
            <button onClick={() => handelSocialLogin(googleSignInUser)} className="btn btn-outline btn-error">
                <FcGoogle />Google
            </button>
            <button onClick={() => handelSocialLogin(githubLoginUser)} className="btn btn-outline btn-error">
                <FaGithub className="text-black" />Github
            </button>
        </div>
    )
}

export default SocialLogin