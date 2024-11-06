import React from "react";
import { motion } from "framer-motion";

const SignUpForm = ({ signUpFormOpen }) => {
  if (!signUpFormOpen) return null;

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-primary-500 mb-2 flex justify-center">
        Join Our Family!
      </h2>
      <p className="text-gray-500 mb-6 flex justify-center">Sign up now</p>
      <motion.form
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 gap-4"
      >
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div className="col-span-2">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="DOB"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Phone Number"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div className="col-span-2">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div className="col-span-2">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Sign Up
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default SignUpForm;
