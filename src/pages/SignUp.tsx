import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <Link to="/" className="inline-block">
            <h2 className="text-3xl font-bold text-blue-700">
              Radiology Department
            </h2>
          </Link>
        </div>

        <SignUpForm />

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Radiology Department. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
