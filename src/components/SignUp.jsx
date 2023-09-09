import InputCase from "./InputCase"
import ButtonCTA from "./ButtonCTA"

export default function SignUp() {
    return (
        <>
            <h1 className="mt-10 font-serif font-extrabold text-2xl">Sign Up</h1>
            <form action="post" className="mt-3">
                <InputCase type='text' label='Name' placeholder='Type your username'/>
                <InputCase type='text' label='Email' placeholder='Type your email'/>
                <InputCase type='password' label='Password' placeholder='Type your password'/>

                <div className="mt-14">
                    <ButtonCTA color='primary' action='Sign Up'/>
                    <p>or</p>
                    <a href="#">Sign In</a>
                </div>
                
            </form>

        </>
    )
}