import React from 'react'

const Register = ({ handleFormSwitch }) => {
  return (

    <section className='flex'>
        <div className="bg-gray-50 dark:bg-gray-900 w-full">
            <div className="flex flex-col items-center justify-start px-6 py-8 mx-auto md:h-screen lg:py-8">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-32 mr-2" src="https://www.poblgroup.co.uk/wp-content/themes/poblgroup/images/pobl-logo.png" alt="logo" />    
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:w-1/2 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign up for an account today!
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            <div className="flex items-center justify-between gap-4">
                                <div className='w-full'>
                                    <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
                                    <input type="text" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your firstname" required="" />
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
                                    <input type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your surname" required="" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <div className='w-full'>
                                    <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                                    <input type="date" name="dob" id="dob" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="nationalInsurance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">National Insurance</label>
                                    <input type="text" name="nationalInsurance" id="nationalInsurance" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="AB12241R" required="" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="joeblogs@pobl.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
                            </div>
                           <button type="submit" className="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Sign in</button>
                           <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                               Already have an account? <a href="#" onClick={handleFormSwitch} className="font-medium text-pink-600 hover:underline dark:text-pink-500">Login</a>
                           </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>


    // <section className="bg-gray-50 dark:bg-gray-900 w-full">
    //       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0 mt-6">
    //           <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
    //               <img className="w-32 mr-2" src="https://www.poblgroup.co.uk/wp-content/themes/poblgroup/images/pobl-logo.png" alt="logo" />    
    //           </a>
    //           <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:w-1/2 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    //               <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    //                   <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
    //                       Sign up for an account today!
    //                   </h1>
    //                   <form className="space-y-4 md:space-y-6" action="#">
    //                       <div className="flex items-center justify-between gap-4">
    //                         <div className='w-full'>
    //                             <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
    //                             <input type="text" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
    //                         </div>
    //                         <div className='w-full'>
    //                             <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
    //                             <input type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
    //                         </div>
    //                       </div>
    //                       <div className="flex items-center justify-between gap-4">
    //                         <div className='w-full'>
    //                             <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
    //                             <input type="date" name="dob" id="dob" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
    //                         </div>
    //                         <div className='w-full'>
    //                             <label htmlFor="nationalInsurance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">National Insurance</label>
    //                             <input type="text" name="nationalInsurance" id="nationalInsurance" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
    //                         </div>
    //                       </div>
    //                       <div>
    //                           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    //                           <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
    //                       </div>
    //                       <div>
    //                           <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
    //                           <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
    //                       </div>
    //                       <div>
    //                           <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    //                           <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
    //                       </div>
    //                       <div className="flex items-center justify-between">
    //                           <div className="flex items-start">
    //                               <div className="flex items-center h-5">
    //                                 <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-pink-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-pink-600 dark:ring-offset-gray-800" required="" />
    //                               </div>
    //                               <div className="ml-3 text-sm">
    //                                 <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
    //                               </div>
    //                           </div>
    //                           <a href="#" className="text-sm font-medium text-pink-600 hover:underline dark:text-pink-500">Forgot password?</a>
    //                       </div>
    //                       <button type="submit" className="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Sign in</button>
    //                       <p className="text-sm font-light text-gray-500 dark:text-gray-400">
    //                           Don’t have an account yet? <a href="#" className="font-medium text-pink-600 hover:underline dark:text-pink-500">Sign up</a>
    //                       </p>
    //                   </form>
    //               </div>
    //           </div>
    //       </div>
    // </section>
  )
}

export default Register
