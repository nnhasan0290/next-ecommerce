import { InboxIcon } from "@heroicons/react/outline";
import Link from "next/link";

const HeadTop = () => {
  return (
    <div className="px-10 border bg-[#081828] text-white py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2 hidden md:flex basis-1/3">
        <InboxIcon className="h-6" />
        <p className="text-small">nazmulhasan0290@gmail.com</p>
      </div>
      <div className="space-x-3 hidden sm:flex basis-1/3">
        <Link href={"/"}>Home</Link>
        <Link href={"/aboutus"}>About Us</Link>
        <Link href={"contactus"}>Contact Us</Link>
      </div>
      <div className="flex items-center space-x-3 justify-center w-full sm:basis-1/3">
        <p>Hello</p>
        <div className="border-r pr-3">
         <Link href={"/api/auth/signin"}>SignIn</Link>
        </div>

       
        <Link href={"/api/auth/signout"}>SingOut</Link>
      </div>
    </div>
  );
};
export default HeadTop;
