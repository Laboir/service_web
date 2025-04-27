"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { page: "Home", url: "/" },
  { page: "About", url: "/about" },
  { page: "Services", url: "/services" },
  { page: "Blog", url: "/blog" },
  { page: "Contact", url: "/contact" },
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <nav className="w-full bg-white shadow-md">
      <div className=" max-w-7xl  mx-auto flex items-center justify-evenly py-4">
        {/* Logo */}
        <Link href={"/"}>
          <div className="text-2xl font-bold text-blue-600">YourCompany</div>
        </Link>

        {/* Navigation Links */}
        {navLinks.map(({ page, url, hell }) => {
          return (
            <div key={url} className="space-x-2 text-gray-700 font-medium">
              <Link
                href={url}
                className={`${
                  pathName === url ? "bg-amber-400 rounded-lg p-3" : ""
                }  `}
              >
                {page}
              </Link>
              {hell.map((user, email) => {
                return (
                  <>
                    <p> {user}</p>
                    <p> {email}</p>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
