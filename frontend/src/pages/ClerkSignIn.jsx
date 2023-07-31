import { SignIn } from "@clerk/clerk-react";

export default function LogIn() {
  return (
    <div className="w-full">
      <div className="m-auto w-1/3 mt-5 mb-5">
        <SignIn />
      </div>
    </div>
  );
}
