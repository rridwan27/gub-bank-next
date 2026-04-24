"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import ProfileDropdown from "./ProfileDropdown";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/GUB-LOGO.png"
            alt="GUB Bank logo"
            width={96}
            height={96}
            className="rounded-full object-cover"
          />

          <div>
            <h1 className="text-lg font-bold text-slate-900 md:text-xl">
              GUB Bank
            </h1>
            <p className="text-xs text-slate-500">
              Smart banking for modern users
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-slate-700 hover:text-green-600"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-slate-700 hover:text-green-600"
          >
            About
          </Link>

          <Link
            href="/faq"
            className="text-sm font-medium text-slate-700 hover:text-green-600"
          >
            FAQ
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-slate-700 hover:text-green-600"
          >
            Contact
          </Link>

          {user ? (
            <>
              <Link
                href="/accounts"
                className="text-sm font-medium text-slate-700 hover:text-green-600"
              >
                Accounts
              </Link>

              <Link
                href="/cards"
                className="text-sm font-medium text-slate-700 hover:text-green-600"
              >
                Cards
              </Link>

              <Link
                href="/loans"
                className="text-sm font-medium text-slate-700 hover:text-green-600"
              >
                Loans
              </Link>

              <Link
                href="/payment"
                className="text-sm font-medium text-slate-700 hover:text-green-600"
              >
                Payment
              </Link>

              <ProfileDropdown />
            </>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
            >
              Login
            </Link>
          )}
        </nav>

        <button
          className="rounded-lg p-2 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700"
            >
              About
            </Link>

            <Link
              href="/faq"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700"
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700"
            >
              Contact
            </Link>

            {user ? (
              <>
                <Link
                  href="/accounts"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-slate-700"
                >
                  Accounts
                </Link>

                <Link
                  href="/cards"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-slate-700"
                >
                  Cards
                </Link>

                <Link
                  href="/loans"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-slate-700"
                >
                  Loans
                </Link>

                <Link
                  href="/payment"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-slate-700"
                >
                  Payment
                </Link>

                <div className="pt-2">
                  <ProfileDropdown />
                </div>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-full bg-green-600 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
