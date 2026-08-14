"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const userData = authClient.useSession()
  const user = userData.data?.user;

  const handleSignOut =async()
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-default-200 bg-background/80 backdrop-blur-xl">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Side - Logo + Desktop Navigation */}
        <div className="flex items-center gap-8">
          
          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 transition hover:bg-default-100 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>

            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-foreground"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h6M7 16h4"
                />
              </svg>
            </div>

            <div className="text-xl font-bold tracking-tight">
              News<span className="text-primary">Nest</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-6 md:flex">
            <li>
              <Link
                href="/"
                className="text-sm font-medium text-foreground hover:text-primary"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/newspapers"
                className="text-sm font-medium text-default-600 hover:text-primary"
              >
                Newspapers
              </Link>
            </li>

            <li>
              <Link
                href="/categories"
                className="text-sm font-medium text-default-600 hover:text-primary"
              >
                Categories
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="text-sm font-medium text-default-600 hover:text-primary"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-default-600 hover:text-primary"
          >
            Login
          </Link>

          <Link
            href="/register"
            color="primary"
            radius="lg"
            className="font-semibold rounded-2xl text-blue-500"
          >
            Register
          </Link>

          <Link
            href="/profile"
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-default-200 bg-default-100 transition hover:bg-default-200"
            aria-label="Profile"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 21a8 8 0 00-16 0"
              />
              <circle
                cx="12"
                cy="7"
                r="4"
                strokeWidth={2}
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Profile */}
        <Link
          href="/profile"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-default-200 bg-default-100 sm:hidden"
          aria-label="Profile"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 21a8 8 0 00-16 0"
            />
            <circle
              cx="12"
              cy="7"
              r="4"
              strokeWidth={2}
            />
          </svg>
        </Link>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-default-200 bg-background md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            
            <li>
              <Link
                href="/"
                className="block rounded-lg px-3 py-3 font-medium hover:bg-default-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/newspapers"
                className="block rounded-lg px-3 py-3 font-medium hover:bg-default-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Newspapers
              </Link>
            </li>

            <li>
              <Link
                href="/categories"
                className="block rounded-lg px-3 py-3 font-medium hover:bg-default-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="block rounded-lg px-3 py-3 font-medium hover:bg-default-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>

            {/* Mobile Auth */}
            <div className="mt-3 flex flex-col gap-2 border-t border-default-200 pt-4">
              <Link
                href="/login"
                className="rounded-lg px-3 py-3 font-medium hover:bg-default-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>

              <Button
                as={Link}
                href="/register"
                color="primary"
                radius="lg"
                className="font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;