"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-default-200 bg-background/80 backdrop-blur-xl">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Left Side */}
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

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-3 sm:flex">

          {user ? (
            <>
              {/* User */}
              <Link
                href="/profile"
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-default-100"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                  {user.name?.charAt(0)?.toUpperCase() || "U"}
                </div>

                <span className="max-w-32 truncate">
                  {user.name || user.email}
                </span>
              </Link>

              {/* Sign Out */}
              <Button
                color="danger"
                variant="flat"
                radius="lg"
                className="font-semibold"
                onPress={handleSignOut}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              {/* Login */}
              <Link
                href="/login"
                className="text-sm font-medium text-default-600 hover:text-primary"
              >
                Login
              </Link>

              {/* Register */}
              <Button
                as={Link}
                href="/register"
                color="primary"
                radius="lg"
                className="font-semibold"
              >
                Register
              </Button>
            </>
          )}
        </div>

        {/* Mobile Profile */}
        {user && (
          <Link
            href="/profile"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white sm:hidden"
            aria-label="Profile"
          >
            {user.name?.charAt(0)?.toUpperCase() || "U"}
          </Link>
        )}

        {!user && (
          <Link
            href="/login"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-default-200 bg-default-100 sm:hidden"
            aria-label="Login"
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
                d="M15 12H3m0 0l4-4m-4 4l4 4"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 5v-1a2 2 0 012-2h3a2 2 0 012 2v16a2 2 0 01-2 2h-3a2 2 0 01-2-2v-1"
              />
            </svg>
          </Link>
        )}
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

              {user ? (
                <>
                  {/* Mobile Profile */}
                  <Link
                    href="/profile"
                    className="flex items-center gap-3 rounded-lg px-3 py-3 font-medium hover:bg-default-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                      {user.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>

                    <div className="flex flex-col">
                      <span>{user.name || "User"}</span>
                      <span className="text-xs text-default-500">
                        {user.email}
                      </span>
                    </div>
                  </Link>

                  {/* Mobile Sign Out */}
                  <Button
                    color="danger"
                    variant="flat"
                    radius="lg"
                    className="w-full font-semibold"
                    onPress={handleSignOut}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  {/* Mobile Login */}
                  <Link
                    href="/login"
                    className="rounded-lg px-3 py-3 font-medium hover:bg-default-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>

                  {/* Mobile Register */}
                  <Button
                    as={Link}
                    href="/register"
                    color="primary"
                    radius="lg"
                    className="font-semibold"
                    onPress={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Button>
                </>
              )}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;