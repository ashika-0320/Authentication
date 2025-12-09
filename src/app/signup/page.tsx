import SignupForm from "./SignupForm";
export default function Loginpage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        Signup Page
      </h1>

      <SignupForm />
    </div>
  );
}
