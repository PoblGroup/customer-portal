import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '@/slices/userSice'

const Login = ({ handleFormSwitch }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const dispatch = useDispatch()

    const handleLogin = async (e) => {
        e.preventDefault()
        if(email == "" || password == "") {
            setErrorMessage("Please provide both email and password.")
        } else {
            setErrorMessage("")
        }
        
        const {data, error} = await Login(email, password)
        
        if(error) 
            setErrorMessage(error)

        if(data) {
            dispatch(login({
                id: data.id,
                username: data.username,
                email: data.email,
                fullname: data.fullname,
                token: data.token,
                contactid: data.contactId,
                accountid: data.accountId,
            }))
        }
    }

    const Login = async( email, password) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let params = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({ email, password }),
            redirect: 'follow'
        };

        const response = await fetch(`http://localhost:5000/api/users/login`, params)
        const result = await response.json()
        console.log(result)
        return result
    }

    return (
        <section className='flex'>
            <section className="bg-gray-50 dark:bg-gray-900 w-full">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-32 mr-2" src="https://www.poblgroup.co.uk/wp-content/themes/poblgroup/images/pobl-logo.png" alt="logo" />    
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6">
                                {errorMessage && <p className='text-red-400 mb-4'>{errorMessage}</p>}
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="name@company.com" 
                                        required="" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        placeholder="••••••••" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-600 focus:border-pink-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        required=""
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-pink-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-pink-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-pink-600 hover:underline dark:text-pink-500">Forgot password?</a>
                                </div>
                                <button 
                                    onClick={(e) => handleLogin(e)}
                                    type="submit" 
                                    className="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                                >
                                    Sign in
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" onClick={handleFormSwitch} className="font-medium text-pink-600 hover:underline dark:text-pink-500">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="hidden xl:flex">
                <div className='flex flex-col items-center justify-center md:h-screen lg:py-0 relative overflow-hidden'>
                    <img className="relative h-full object-cover" src='https://res.cloudinary.com/dfs5xyvsv/image/upload/v1675870090/main_unalsj.jpg' alt='Pobl Feature Image' />
                </div>
            </section> */}
        </section>
    )
}

export default Login
