import { SignUp } from "@clerk/clerk-react";

export default function Register() {
  return (
    <div className="w-full">
      <div className="m-auto w-1/3 mt-5 mb-5">
        <SignUp />
      </div>
    </div>
  );
}
