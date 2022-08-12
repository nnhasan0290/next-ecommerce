import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
const HeadBottom = () => {
  return (
    <div className="border-b border-t flex px-10 items-center justify-center">
      <div className=" basis-2/3">
        <nav className="flex justify-center items-center px-5 flex-col sm:flex-row">
          <li className="nav-list-item">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-list-item group relative text-center sm:text-left">
            <span>Shop</span>
            <ChevronDownIcon className="h-4 inline-block ml-3" />
            <ul
              className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all 
            duration-300 ease-out sm:absolute top-[100%] bg-white 
             left-0  h-0 group-hover:h-auto capitalize delay-0 border block w-[170px] bg-white"
            >
              <li className="p-2">about us</li>
              <li className="p-2">option</li>
              <li className="p-2">option</li>
            </ul>
          </li>
          <li className="nav-list-item">
            <Link href="/contactus">Contact us</Link>
          </li>
          <li className="nav-list-item">
            <Link href="/aboutus">About us</Link>
          </li>
        </nav>
      </div>
      <div className="hidden md:flex basis-1/3 items-center justify-center">
        <p className="font-semibold">Follow :</p>
        <ul className="cursor-pointer flex space-x-3 ml-3 ">
          <li className="hover:text-[#081828]">
            <FacebookIcon />
          </li>
          <li className="hover:text-[#081828]">
            <InstagramIcon />
          </li>
          <li className="hover:text-[#081828]">
            <TwitterIcon />
          </li>
          <li className="hover:text-[#081828]">
            <GitHubIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HeadBottom;
