import React from "react";

const page = () => {
  return (
    <div className="bg-white min-h-screen">
      <h1 className="text-lime-900 pt-20 px-20 text-2xl font-medium ">
        SignUp Here! :)
      </h1>
      <p className="text-stone-700 flex justify-center mt-10 font-mono">
        I think you can make an account here
      </p>
      <div class="py-16">
        <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div class="hidden lg:block lg:w-1/2 bg-cover"></div>
          <div class="w-full p-8 lg:w-1/2">
            <p class="text-xl text-gray-600 text-center">Welcome!</p>

            <div class="mt-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
              />
            </div>
            <div class="mt-4">
              <div class="flex justify-between">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <a href="#" class="text-xs text-gray-500 hover:text-cyan-400">
                  Forget Password?
                </a>
              </div>
              <input
                class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
              />
            </div>
            <div class="mt-8">
              <button class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                Sign up!
              </button>
            </div>
            <div class="mt-4 flex items-center justify-between">
              <span class="border-b w-1/5 md:w-1/4"></span>
              <a
                href="login"
                class="text-xs text-gray-500 uppercase hover:text-cyan-400"
              >
                or login
              </a>
              <span class="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
