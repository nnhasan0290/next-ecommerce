import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ChevronDownIcon, MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";

const HeadBottom = () => {
  const [submenu, setSubmenu] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex relative justify-center px-10 border-t border-b">
      <div
        onClick={() => {
          setMenu(!menu);
        }}
        className="block p-3 md:hidden basis-1/3"
      >
        <MenuIcon className="h-6" />
      </div>
      <nav
        className={`flex flex-col justify-evenly md:items-center md:flex md:flex-row basis-2/3 ${
          menu ? "visible h-[auto]" : "invisible md:visible md:h-auto h-[0]"
        }`}
      >
        <li className="py-3 list-none">
          <Link className="p-" href="/">
            Home
          </Link>
        </li>
        <li className="py-3 list-none">
          <Link href="/product">Shop</Link>
        </li>
        <li
          onClick={() => setSubmenu(!submenu)}
          className="flex relative z-20 flex-col py-3 cursor-pointer md:items-center"
        >
          {" "}
          <div className="flex">
            <p>About us</p>{" "}
            <span className="ml-3">
              <ChevronDownIcon className="h-5" />
            </span>
          </div>
          <ul
            className={`static md:absolute top-[100%] md:shadow-3xl  px-5 flex md:items-center flex-col md:bg-white sm:w-[230px]  h-[0px] overflow-y-hidden justify-evenly ${
              submenu && "h-[220px]"
            } transition-[height] duration-500 `}
          >
            <li className="list-none">
              <Link href="/one">Option One</Link>
            </li>
            <li className="list-none">
              <Link href="/two">Option One</Link>
            </li>
            <li className="list-none">
              <Link href="/three">Option One</Link>
            </li>
            <li className="list-none">
              <Link href="/four">Option One</Link>
            </li>
            <li className="list-none">
              <Link href="/five">Option One</Link>
            </li>
          </ul>
        </li>
        <li className="py-3 list-none">
          <Link href="/cart">Cart</Link>
        </li>
        <li className="py-3 list-none">
          <Link href="/blog">Blog</Link>
        </li>
      </nav>
      <div className="hidden justify-center items-center md:flex basis-1/3">
        <p className="hidden font-semibold md:block">Follow :</p>
        <ul className="flex ml-3 space-x-3 cursor-pointer">
          <Link
            href={"https://www.facebook.com/profile.php?id=100006626565477"}
          >
            <FacebookIcon />
          </Link>
          <Link href={"https://www.instagram.com/nazmul6390/"}>
            <InstagramIcon />
          </Link>
          <Link href={"https://twitter.com/NLNazmuL1"}>
            <TwitterIcon />
          </Link>
          <Link href={"https://github.com/nnhasan0290"}>
            <GitHubIcon />
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default HeadBottom;
