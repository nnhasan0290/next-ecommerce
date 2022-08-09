import Image from "next/image";
import Link from "next/link";
import {
  ClipboardListIcon,
  PlusCircleIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <>
    <div className="w-[20%] border hidden fixed sm:block h-full top-0 bottom-0 overflow-auto p-3 box-border ">
      <Link href="/">
        <Image
          className="cursor-pointer"
          src="/logo.svg"
          width={200}
          height={70}
        />
      </Link>
      <Link href="/admin/dashboard">
        <div className="mx-2 text-medium">
          <div className="each-sidebar-item">
            <ViewGridIcon className="h-6" />
            <p>Dashboard</p>
          </div>
          <div className="each-sidebar-item peer">
            <ChevronDownIcon className="h-6" />
            <p>Product(s)</p>
          </div>
          <div className="invisible ml-2 opacity-0 transition duration-500 ease-in-out peer-hover:visible hover:visible peer-hover:opacity-100 hover:opacity-100">
            <div className="each-sidebar-item">
              <ClipboardListIcon className="h-5" />
              <p>All</p>
            </div>
            <div className="each-sidebar-item">
              <PlusCircleIcon className="h-5" />
              <p>Create</p>
            </div>
          </div>
        </div>
      </Link>
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
