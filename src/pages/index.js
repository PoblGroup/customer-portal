import styles from '@/styles/Home.module.css'
import Login from '@/components/Login'
import { useState } from 'react'
import Register from '@/components/Register'
import Dashboard from '@/components/Dashboard'
import Layout from '@/components/Layout'
import { useSelector } from 'react-redux'
import { logout, selectUser } from '../slices/userSice'

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [registerForm, setRegisterForm] = useState(false)

  const handleFormSwitch = () => {
    setRegisterForm(!registerForm)
  }

  const user = useSelector(selectUser)

  return (
    <>
      {user ? (
        <Layout nav={true}>
          <Dashboard />
        </Layout>
      ) : registerForm ? (
        <Register handleFormSwitch={handleFormSwitch} />
      ) : (
        <Login handleFormSwitch={handleFormSwitch} />
      )}
      
    </>
  )
}
