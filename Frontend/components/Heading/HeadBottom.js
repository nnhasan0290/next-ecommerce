import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";

const HeadBottom = () => {
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
          <Link className="" href="/">
            Home
          </Link>
        </li>
        <li className="py-3 list-none">
          <Link href="/product">Shop</Link>
        </li>
        <li
          className="flex z-20 flex-col py-3 cursor-pointer md:items-center"
        >
           <Link className="" href="/admin/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="py-3 list-none">
          <Link href="/cart">Cart</Link>
        </li>
        <li className="py-3 list-none">
          <Link href="/orders">Orders</Link>
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
