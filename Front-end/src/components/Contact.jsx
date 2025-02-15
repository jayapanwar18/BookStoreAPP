// import React from 'react';
// // import Contact from '../contact/Contact';
// import Contact  from "../contact/Contact";

// function Contact() {
//   return (
//     <>
//     {/* <Contact/> */}
//     </>
//   )
// }

// export default Contact
import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className='w-[600px] '>
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Contact Us</h3>

                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type="text" placeholder='Enter your Full Name' className='w-80 px-3 py-1 rounded-md outline-none'
                                    {...register("name", { required: "Name is required" })}
                                />
                                <br />
                                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                            </div>

                            {/* Email Funcationality */}
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 rounded-md outline-none'
                                    {...register("email", { required: "Email is required" })}
                                />
                                <br />
                                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                            </div>

                            {/* password functionality */}
                            <div className='mt-4 space-y-2'>
                                <span>Message</span>
                                <br />
                                <input type="text" placeholder='Type Your Message ' className='w-80 px-3 py-1 rounded-md outline-none'
                                    {...register("message", { required: "Message is required" })}
                                />
                                <br />
                                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                            </div>

                            {/* Button */}
                            <div className='flex justify-around mt-4'>
                                <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration:200 '>Submit</button>
                                <p className='text-xl'>{" "}
                                    <button className='underline text-blue-500 curser-pointer' onClick={() => document.getElementById("my_modal_3").showModal()}>
                                    </button>{" "}
                                    {/* <Contact /> */}
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;