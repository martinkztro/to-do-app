import InputCase from "./InputCase";
import ButtonCTA from "./ButtonCTA";

export default function Login() {
  return (
    <div>
      <h1 className="mt-10 font-serif font-extrabold text-2xl">Login</h1>
      <form action="post">
        <InputCase type="text" label="Name" placeholder="Type your username" />
        <InputCase type="password" label="Password" placeholder="Type your password" />

        <div className="mt-14 flex flex-col gap-4">
            <ButtonCTA type="submit">Login</ButtonCTA>
            <a href="#">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
}