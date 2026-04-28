import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSiteBar = () => {
  return (
    <div>
      <p className="text-gray-800 text-xl font-semibold mb-4">Login With</p>
      <div className="space-y-2">
        <div className="flex justify-center">
          <button className="flex items-center gap-2 btn w-full text-blue-400 border border-blue-300">
            <FaGoogle />
            Login With Google
          </button>
        </div>

        <div className="flex justify-center">
          <button className="flex items-center gap-2 btn w-full text-gray-700 border border-gray-700">
            <FaGithub />
            Login With GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSiteBar;