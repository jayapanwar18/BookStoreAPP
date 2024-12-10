// import React from 'react'
// import { Link } from 'react-router-dom';
// // import { useForm } from "react-hook-form";
// import { useForm } from "react-hook-form";

// function Login() {
//     const { register, 
//         handleSubmit }
//           = useForm();
//         const onSubmit = data => console.log(data);


//     return (
//         <>
//             {/* You can open the modal using document.getElementById('ID').showModal() method */}
//             <dialog id="my_modal_3" className="modal">
//                 <div className="modal-box">
//                     <form   onSubmit={handleSubmit(onSubmit)}  method="dialog">
//                         {/* if there is a button in form, it will close the modal */}
//                         <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").closest()}      >✕</Link>
                    
//                     <h3 className="font-bold text-lg">Login</h3>

//                     {/* Email Funcationality */}
//                     <div className='mt-4 space-y-2'>
//                         <span>Email</span>
//                         <br />
//                         <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 rounded-md outline-none' />
//                         {/* {...register("email", { required: true })} */}
//                         {...register("email", { required: "Email is required" })}
//                     </div>

//                     {/* password functionality */}
//                     <div className='mt-4 space-y-2'>
//                         <span>Passworrd</span>
//                         <br />
//                         <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 rounded-md outline-none' />
//                         {/* {...register("password", { required: true })} */}
//                         {...register("password", { required: "Password is required" })}
//                     </div>

//                     {/* Button */}
//                     <div className='flex justify-around mt-4'>
//                         <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration:200 '>Login</button>
//                         <p>Not ragistered?{" "}
//                             <Link to="/signup" className='underline text-blue-500 curser-pointer'>Sign Up
//                             </Link></p>
//                     </div>
//                 </form>
//                 </div>
//             </dialog>
//         </>
//     )
// }
// export default Login;

// // // // import React from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import { useForm } from 'react-hook-form';

// // // // function Login() {
// // // //     // Define onSubmit function
// // // //     const onSubmit = (data) => {
// // // //         console.log(data); // Log the form data
// // // //         // You can also perform further actions here like making an API call
// // // //     };

// // // //     // Initialize react-hook-form methods
// // // //     const {
// // // //         register,
// // // //         handleSubmit,
// // // //         formState: { errors },
// // // //     } = useForm();

// // // //     return (
// // // //         <>
// // // //             {/* Modal */}
// // // //             <dialog id="my_modal_3" className="modal">
// // // //                 <div className="modal-box">
// // // //                     {/* Form with handleSubmit */}
// // // //                     <form onSubmit={handleSubmit(onSubmit)} method="dialog">
// // // //                         {/* Close button */}
// // // //                         <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById("my_modal_3").closest()}>✕</Link>
// // // //                     </form>

// // // //                     <h3 className="font-bold text-lg">Login</h3>

// // // //                     {/* Email field */}
// // // //                     <div className="mt-4 space-y-2">
// // // //                         <span>Email</span>
// // // //                         <br />
// // // //                         <input
// // // //                             type="email"
// // // //                             placeholder="Enter your email"
// // // //                             className="w-80 px-3 py-1 rounded-md outline-none"
// // // //                             {...register("email", { required:true })}
// // // //                         />
// // // //                         {/* Display error if email is not provided */}
// // // //                         {errors.email && <span className="text-red-500">{errors.email.message}</span>}
// // // //                     </div>

// // // //                     {/* Password field */}
// // // //                     <div className="mt-4 space-y-2">
// // // //                         <span>Password</span>
// // // //                         <br />
// // // //                         <input
// // // //                             type="password"
// // // //                             placeholder="Enter your password"
// // // //                             className="w-80 px-3 py-1 rounded-md outline-none"
// // // //                             {...register("password", { required: true })}
// // // //                         />
// // // //                         <br />
// // // //                         {
// // // //                             errors.password && (<span>this field is required </span>)
// // // //                         }
// // // //                         {/* Display error if password is not provided */}
// // // //                         {errors.password && <span className="text-red-500">{errors.password.message}</span>}
// // // //                     </div>

// // // //                     {/* Button and SignUp Link */}
// // // //                     <div className="flex justify-around mt-4">
// // // //                         <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Login</button>
// // // //                         <p>
// // // //                             Not registered?{" "}
// // // //                             <Link to="/signup" className="underline text-blue-500 cursor-pointer">Sign Up</Link>{" "}
// // // //                         </p>
// // // //                     </div>
// // // //                 </div>
// // // //             </dialog>
// // // //         </>
// // // //     );
// // // // }

// // // // export default Login;
// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { useForm } from 'react-hook-form';

// // function Login() {
// //     // Define onSubmit function first
// //     const onSubmit = (data) => {
// //         console.log(data); // Log the form data
// //         // You can also perform further actions here, like making an API call
// //     };

// //     // Initialize react-hook-form methods
// //     const {
// //         register,
// //         handleSubmit,
// //         formState: { errors },
// //     } = useForm();

// //     return (
// //         <>
// //             {/* Modal */}
// //             <dialog id="my_modal_3" className="modal">
// //                 <div className="modal-box">
// //                     {/* Form with handleSubmit */}
// //                     <form onSubmit={handleSubmit(onSubmit)} method="dialog">
// //                         {/* Close button */}
// //                         <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
// //                     </form>

// //                     <h3 className="font-bold text-lg">Login</h3>

// //                     {/* Email field */}
// //                     <div className="mt-4 space-y-2">
// //                         <span>Email</span>
// //                         <br />
// //                         <input
// //                             type="email"
// //                             placeholder="Enter your email"
// //                             className="w-80 px-3 py-1 rounded-md outline-none"
// //                             {...register("email", { required: "Email is required" })}
// //                         />
// //                         {/* Display error if email is not provided */}
// //                         {errors.email && <span className="text-red-500">{errors.email.message}</span>}
// //                     </div>

// //                     {/* Password field */}
// //                     <div className="mt-4 space-y-2">
// //                         <span>Password</span>
// //                         <br />
// //                         <input
// //                             type="password"
// //                             placeholder="Enter your password"
// //                             className="w-80 px-3 py-1 rounded-md outline-none"
// //                             {...register("password", { required: "Password is required" })}
// //                         />
// //                         {/* Display error if password is not provided */}
// //                         {errors.password && <span className="text-red-500">{errors.password.message}</span>}
// //                     </div>

// //                     {/* Button and SignUp Link */}
// //                     <div className="flex justify-around mt-4">
// //                         <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Login</button>
// //                         <p>Not registered?{" "}
// //                             <Link to="/signup" className="underline text-blue-500 cursor-pointer">Sign Up</Link>
// //                         </p>
// //                     </div>
// //                 </div>
// //             </dialog>
// //         </>
// //     );
// // }

// // export default Login;
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            {/* Modal */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Close Modal */}
                        <Link 
                            to={'/'} 
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </Link>

                        <h3 className="font-bold text-lg">Login</h3>

                        {/* Email Functionality */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input 
                                type="email" 
                                placeholder='Enter your email' 
                                className='w-80 px-3 py-1 rounded-md outline-none' 
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        {/* Password Functionality */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input 
                                type="password" 
                                placeholder='Enter your password' 
                                className='w-80 px-3 py-1 rounded-md outline-none' 
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>

                        {/* Button */}
                        <div className='flex justify-around mt-4'>
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration:200'>
                                Login
                            </button>
                            <p>Not registered?{" "}
                                <Link to="/signup" className='underline text-blue-500 cursor-pointer'>
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
}

export default Login;
