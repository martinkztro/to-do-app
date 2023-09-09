import InputCase from "./InputCase";
import ButtonCTA from "./ButtonCTA";

export default function ResetPassword() {

    return (
        <>

            <h1 className="mt-10 mb-6 font-serif font-extrabold text-2xl">Reset Password</h1>

            <form action="post">
                <InputCase type="password" label="New Password" placeholder="Type your password" />
                <InputCase type="password" label="Confirm Password" placeholder="Confirm your password" />
            </form>

            <div className="mt-16 gap-5 flex flex-col">
                <ButtonCTA />
            </div>
            

        </>
    )
}