"use client";

import React from "react";
import {
  Button,
  Card,
  Input,
  Label,
  Link,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
const router =useRouter()

  const handleSubmit =async (e) => {
    e.preventDefault();
    const name =e.target.name.value;
    const email =e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const image = e.target.image.value;

    const { data, error } = await authClient.signUp.email({

        name,
        email,
        password,
        confirmPassword,
        image});
        console.log({data,error});

if(!error){
    router.push('/')
}
else{
    alert('register gone a fuckkkk')
}
        


    // Handle registration logic here
    console.log("Register form submitted");
  };

  return (
    <main className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-144px)] max-w-6xl items-center justify-center">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-2xl lg:grid-cols-2">

          {/* ================= LEFT SIDE ================= */}
          <div className="relative hidden overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-indigo-900 p-10 text-white lg:flex lg:flex-col lg:justify-between">

            {/* Background Decorations */}
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-400/20 blur-2xl" />

            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-400/20 blur-2xl" />

            <div className="absolute right-10 top-1/2 h-32 w-32 rounded-full border border-white/10" />

            {/* Logo */}
            <div className="relative z-10">
              <Link
                href="/"
                className="inline-flex items-center gap-3 text-xl font-bold text-white"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md">
                  <svg
                    className="h-6 w-6"
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

                News<span className="text-blue-200">Nest</span>
              </Link>
            </div>

            {/* Main Content */}
            <div className="relative z-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-200">
                Join NewsNest
              </p>

              <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
                Create your account.
                <br />
                Start reading.
              </h1>

              <p className="mt-5 max-w-md text-sm leading-6 text-blue-100/80">
                Create your NewsNest account and discover newspapers,
                technology stories, science updates, and much more.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    ✓
                  </div>

                  <p className="text-sm text-blue-100">
                    Discover your favourite newspapers
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    ✓
                  </div>

                  <p className="text-sm text-blue-100">
                    Explore Story, Tech & Science
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    ✓
                  </div>

                  <p className="text-sm text-blue-100">
                    Keep everything in one place
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center justify-center bg-white p-6 sm:p-10 lg:p-12">
            <Card
              variant="transparent"
              className="w-full max-w-md border-none bg-transparent shadow-none"
            >
              <Card.Header className="px-0">
                <Card.Title className="text-3xl font-bold text-slate-900">
                  Create Account ✨
                </Card.Title>

                <Card.Description className="mt-2 text-slate-500">
                  Join NewsNest and start exploring your favourite news.
                </Card.Description>
              </Card.Header>

              <Card.Content className="px-0 pt-7">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >

                  {/* Full Name */}
                  <TextField name="name" type="text">
                    <Label className="mb-2 font-medium text-slate-700">
                      Full Name
                    </Label>

                    <Input
                      placeholder="Enter your full name"
                      className="w-full"
                      autoComplete="name"
                    />
                  </TextField>

                  {/* Email */}
                  <TextField name="email" type="email">
                    <Label className="mb-2 font-medium text-slate-700">
                      Email Address
                    </Label>

                    <Input
                      placeholder="you@example.com"
                      className="w-full"
                      autoComplete="email"
                    />
                  </TextField>

                  {/* Password */}
                  <TextField name="password" type="password">
                    <Label className="mb-2 font-medium text-slate-700">
                      Password
                    </Label>

                    <Input
                      placeholder="Create a strong password"
                      className="w-full"
                      autoComplete="new-password"
                    />
                  </TextField>

                  {/* Confirm Password */}
                  <TextField name="confirmPassword" type="password">
                    <Label className="mb-2 font-medium text-slate-700">
                      Confirm Password
                    </Label>

                    <Input
                      placeholder="Confirm your password"
                      className="w-full"
                      autoComplete="new-password"
                    />
                  </TextField>

                  {/* Profile URL */}
                  <TextField name="image" type="url">
                    <Label className="mb-2 font-medium text-slate-700">
                      Profile URL
                    </Label>

                    <Input
                      placeholder="https://example.com/profile"
                      className="w-full"
                      autoComplete="url"
                    />
                  </TextField>

                  {/* Register Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    className="mt-2 w-full bg-blue-600 font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
                  >
                    Create My Account
                  </Button>
                </form>
              </Card.Content>

              {/* Login Link */}
              <Card.Footer className="justify-center px-0 pt-6">
                <p className="text-sm text-slate-500">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Login
                  </Link>
                </p>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;