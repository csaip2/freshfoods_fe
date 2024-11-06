import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import SignUpForm from "./SignUpForm";
import { motion } from "framer-motion";

const LoginForm = ({ formOpen, onClose }) => {
  const [signUpFormOpen, setSignUpFormOpen] = useState(false);

  if (!formOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  const handleSignUpClick = () => {
    setSignUpFormOpen(true);
  };

  const handleCloseClick = () => {
    setSignUpFormOpen(false);
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg p-8 w-full max-w-md relative"
        animate={{ rotateY: signUpFormOpen ? 0 : 360 }}
        transition={{ duration: 0.5 }}
      >
        {/* Close button */}
        <button
          onClick={handleCloseClick}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <IoCloseCircleOutline size={24} />
        </button>

        {/* Login Form */}
        {!signUpFormOpen && (
          <>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Welcome back!
              </h2>
              <p className="text-gray-600 mt-2">Let's get you on track</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter your username"
                required
              />
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter your password"
                required
              />
              <a
                href="#"
                className="text-blue-800 hover:text-blue-800/80 text-md flex justify-end"
              >
                Forgot your password?
              </a>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition duration-200"
              >
                Sign in
              </button>
            </form>
          </>
        )}

        {/* SignUp Form */}
        {signUpFormOpen && (
          <SignUpForm
            signUpFormOpen={signUpFormOpen}
            onClose={handleCloseClick}
          />
        )}

        {/* Social Login & Sign Up Link */}

        <div>
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <span className="text-sm font-medium">Google</span>
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <span className="text-sm font-medium">Facebook</span>
            </button>
          </div>
          {!signUpFormOpen && (
            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={handleSignUpClick}
                className="text-primary hover:text-primary/80 font-medium"
              >
                Sign up now
              </button>
            </p>
          )}
          {signUpFormOpen && (
            <p className="mt-6 text-center text-sm text-gray-600">
              Already an user?{" "}
              <button
                onClick={() => setSignUpFormOpen(false)}
                className="text-primary hover:text-primary/80 font-medium"
              >
                Login now
              </button>
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginForm;
