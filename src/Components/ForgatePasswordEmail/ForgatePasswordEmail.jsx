import { useState } from "react"
import useAuth from "../Hooks/useAuth"
import { toast } from "react-toastify"

const ForgatePasswordEmail = () => {
    const { forgatePasswordEmailReset } = useAuth()
    const [email, setEmail] = useState('')
    console.log(email);

    const handelPasswordReset = async (email) => {
        forgatePasswordEmailReset(email)
            .then(() => {
                toast.success('your password reset has been sent,check your email inbox')
            })
            .catch(err => console.error(err))
    }
    return (
        // <div>
        //     {/* Open the modal using document.getElementById('ID').showModal() method */}
        //     <button className="hover:underline text-sm" onClick={() => document.getElementById('my_modal_5').showModal()}><label className="label">
        //         Forgot password?
        //     </label></button>
        //     <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        //         <div className="modal-box">
        //             <div className="form-control">
        //                 <label className="label">
        //                     <span className="label-text">Reset password send email :</span>
        //                 </label>
        //                 <input
        //                     onChange={(e) => setEmail(e.target.value)}
        //                     type="text"
        //                     placeholder="email"
        //                     className="input input-bordered"
        //                 />
        //                 <button onClick={handelPasswordReset} className="btn btn-info mt-2">Send</button>
        //             </div>
        //             <form method="dialog" className="modal-backdrop">
        //                 {/* if there is a button in form, it will close the modal */}
        //                 <button className="btn">Close</button>
        //             </form>
        //         </div>
        //     </dialog>
        // </div>
        <div>
            < button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}> open modal </ button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Sent to email reset password!</h3>
                    <input onChange={(e) => setEmail(e.target.value)}
                        className="border w-full mt-4 p-2 rounded-full"
                        type="email"
                        placeholder="email" />
                    <button onClick={handelPasswordReset} className="btn w-full btn-info mt-4">Send</button>
                </div>
            </dialog>
        </div>

    )
}

export default ForgatePasswordEmail