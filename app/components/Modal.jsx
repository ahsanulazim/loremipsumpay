import { FaEnvelopeCircleCheck } from "react-icons/fa6";

export default function Modal({ ref, email }) {



    return (
        <dialog ref={ref} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box text-center">
                <div className="flex justify-center mb-4">
                    <FaEnvelopeCircleCheck className="size-32 text-second" />
                </div>
                <h3 className="font-bold text-lg">{email}</h3>
                <p className="py-4">Thank you for visiting my site</p>
                <div className="modal-action block">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn w-full btn-success rounded-lg">OK</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}
