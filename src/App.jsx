import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'

function App() {

  return (
    <>
      <header>
        <img src="public/vite.svg" alt="logo" className="mx-auto w-20" />      
        <h1 className='text-2xl font-black'>TODO APP</h1>
      </header>

      <ForgotPassword />


    </>
  )
}

export default App
