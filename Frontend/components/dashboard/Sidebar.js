import Image from "next/image";
import Link from "next/link";
import {
  ClipboardListIcon,
  PlusCircleIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/outline";
import {useRouter} from "next/router";
import {useState,useEffect} from "react"

const Sidebar = () => {
  const router = useRouter();
  const [visibility, setVisibility] = useState(false);
  console.log(visibility);
  useEffect(() => {
    if((router.pathname === "/admin/allproduct") || (router.pathname === "/admin/createproduct") ){
      setVisibility(true);
    } else{
      setVisibility(false);
    }
  },[router])
  return (
    <>
    <div className="w-[20%] border hidden fixed sm:block h-full top-0 bottom-0 overflow-auto p-3 box-border ">
      <a href="/">
        <Image
          className="cursor-pointer"
          src="/logo.svg"
          width={200}
          height={70}
        />
      </a>
        <div className="mx-2 text-medium">
          <div className={`each-sidebar-item ${router.pathname === "/admin/dashboard" && "text-[#0167f3]  scale-105"}`}>
            <ViewGridIcon className="h-6" />
            <Link href="/admin/dashboard">Dashboard</Link>
          </div>
          <div className="each-sidebar-item peer hover:text-[#888]">
            <ChevronDownIcon className="h-6" />
            <p>Product(s)</p>
          </div>
          <div className={`ml-2  transition duration-500 ease-in-out ${!visibility && "invisible opacity-0"} peer-hover:visible hover:visible peer-hover:opacity-100 hover:opacity-100`}>
            <div className={`each-sidebar-item  ${router.pathname === "/admin/allproduct" && "text-[#0167f3]  scale-105"}`}>
              <ClipboardListIcon className="h-5" />
              <Link href={"/admin/allproduct"}>All</Link>
            </div>
            <div className={`each-sidebar-item  ${router.pathname === "/admin/createproduct" && "text-[#0167f3]  scale-105"}`}>
              <PlusCircleIcon className="h-5" />
              <Link href="/admin/createproduct">Create</Link>
            </div>
          </div>
        </div>
    </div>
    <div className="sm:hidden text-[#0167f3] flex fixed bottom-0 w-full bg-white space-x-10 justify-center">
      <ViewGridIcon className="h-7"/>
      <ClipboardListIcon className="h-7"/>
      <PlusCircleIcon className="h-7"/>
    </div>
    </>
    
  );
};
export default Sidebar;
