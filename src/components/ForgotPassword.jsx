import InputCase from "./InputCase";

export default function ForgotPassword() {
    return (
        <>
            <h1 className="mt-10 mb-6 font-serif font-extrabold text-2xl">Forgot Password</h1>
            
            <form action="post">
                <InputCase type="text" label="Email" placeholder="Type your email" />

                <div className="mt-16 gap-5 flex flex-col">
                    <ButtonCTA type="submit">Confirm</ButtonCTA>
                    <a href="#">Login</a>
                </div>
            </form>

        </>
    )
}