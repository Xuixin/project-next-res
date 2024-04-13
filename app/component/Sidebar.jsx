'use client'
import Link from "next/link";
import { useState, useRouter } from "react";

export default function Sidebar() {
  const [a,setA] = useState(true)


  return (
      <nav className="menu bg-base-200 w-[13rem] min-h-screen">
        <h2 className="menu-title text-white text-center font-semibold text-xl mb-5">
          Restaurant
        </h2>
        <ul>
          <li className={a ? "menu-item active mb-3": "none"} >
            <Link
              href="/"
              className="menu-link block  py-2 "
            >
              Dashboard
            </Link>
          </li>
          <li className="menu-item mb-3">
            <Link
              href="./Menu"
              className="menu-link block  py-2 "
            >
              เมนู
            </Link>
          </li>
          <li className="menu-item mb-3">
            <a
              href="#"
              className="menu-link block  py-2 "
            >
              การขาย
            </a>
          </li>
          <li className="menu-item mb-3">
            <a
              href="#"
              className="menu-link block  py-2 "
            >
              พนักงาน
            </a>
          </li>
        </ul>
      </nav>
  );
}
