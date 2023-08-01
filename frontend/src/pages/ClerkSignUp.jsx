import { SignUp } from "@clerk/clerk-react";

export default function Register() {
  return (
    <div className="md:w-full">
      <div className="m-auto md:w-1/3 mt-5 mb-5">
        <SignUp />
      </div>
    </div>
  );
}
