import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const loginNevigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const handleForm = (data) => {
    // console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-white">Welcome back</h1>
          <p className="text-sm text-slate-400 mt-1">
            Sign in to continue to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleForm)} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300 mb-1.5"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-lg bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
            {errors.email && (
              <p className="text-red-600 font-semibold text-base">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-300 mb-1.5"
            >
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 Values are Required",
                },
              })}
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
            {errors.password && (
              <p className="text-red-600 font-semibold text-base">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-slate-600 bg-slate-900 text-indigo-600 focus:ring-indigo-500"
              />
              Remember me
            </label>
            <a
              href="#"
              className="text-sm text-indigo-400 hover:text-indigo-300"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium transition shadow-lg shadow-indigo-600/20"
          >
            Sign in
          </button>
        </form>

        {/* Register link */}
        <p className="text-center text-sm text-slate-400 mt-6">
          Don&apos;t have an account?{" "}
          <a
            onClick={() => loginNevigate("/register")}
            href="/register"
            className="cursor-pointer text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
