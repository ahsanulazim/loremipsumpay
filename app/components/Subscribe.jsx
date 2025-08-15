'use client';
import { useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import Modal from "./Modal";

export default function Subscribe() {

    const subscribed = useRef();
    const [email, setEmail] = useState("");


    const handleSubscriber = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        setEmail(email);
        subscribed.current.showModal();
        e.target.reset();
    };

    return (
        <>
            <Modal ref={subscribed} email={email} />
            <form className="join mb-8" onSubmit={handleSubscriber}>
                <div>
                    <label className="input sm:input-lg validator join-item">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>
                        <input type="email" placeholder="mail@site.com" required name="email" />
                    </label>
                    <div className="validator-hint hidden">Enter valid email address</div>
                </div>
                <button className="btn sm:btn-lg btn-neutral bg-second border-second shadow-none join-item" type="submit"><span className="hidden xs:block"> Get Started </span><MdArrowOutward /></button>
            </form>
        </>
    )
}
