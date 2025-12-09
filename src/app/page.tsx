import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1> Welcome to Forms</h1>
      <span>Please Login or Signup to continue</span>
      <div className="flex gap-2">
        <Link href="/login">
          <button> Login</button>
        </Link>
      </div>
      <div>
        <Link href="/signup">
          <button> SignUp</button>
        </Link>
      </div>
    </div>
  );
}
