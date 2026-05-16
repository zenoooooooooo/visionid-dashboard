"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { title: "About", href: "/about" },
  { title: "Feature", href: "/feature" },
  { title: "Contact", href: "/contact" },
  { title: "Login", href: "/authentication" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 font-michroma">
      <div className="backdrop-blur-xl bg-black/40 border-b border-white/10 lg:px-50">
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          <h1 className="text-white text-xl tracking-[0.3em]">
            <Link href="/">VISIONID</Link>
          </h1>

          <ul className="hidden md:flex gap-10 text-sm text-white/80">
            {navLinks.map((item) => (
              <li key={item.href} className="relative group">
                <Link href={item.href}>{item.title}</Link>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#7F57F9] transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl transition-transform duration-300"
          >
            <div
              className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            >
              {open ? <FiX /> : <FiMenu />}
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-black/70 backdrop-blur-xl border-b border-white/10
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-white/80">
          {navLinks.map((item, i) => (
            <li
              key={item.href}
              className={`transition-all duration-300 delay-[${i * 60}ms]`}
            >
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg relative group"
              >
                {item.title}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#7F57F9] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
