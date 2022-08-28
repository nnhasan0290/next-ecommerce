import { InboxIcon } from "@heroicons/react/outline";
import Link from "next/link";

const HeadTop = () => {
  return (
    <div className="px-10 border bg-[#081828] text-white py-4 flex items-center justify-between">
      <div className="hidden items-center space-x-2 md:flex basis-1/3">
        <InboxIcon className="h-6" />
        <p className="text-small">nazmulhasan0290@gmail.com</p>
      </div>
      <div className="hidden space-x-3 sm:flex basis-1/3">
        <Link href={"/"}>Home</Link>
        <Link href="mailto: nazmulhasan0290@gmail.com">Contact Me</Link>
      </div>
      <div className="flex justify-center items-center space-x-3 w-full sm:basis-1/3">
        <p>Hello</p>
        <div className="pr-3 border-r">
         <Link href={"/login"}>SignIn</Link>
        </div>

       
        <Link href={"/register"}>Register</Link>
      </div>
    </div>
  );
};
export default HeadTop;
