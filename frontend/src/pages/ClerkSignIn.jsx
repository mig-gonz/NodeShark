import { SignIn } from "@clerk/clerk-react";

export default function LogIn() {
  return (
    <div className="flex justify-center">
      <SignIn />
    </div>
  );
}
