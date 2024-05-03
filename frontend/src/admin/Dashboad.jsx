import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Dashboad() {
  const { user } = useUser();
  return (
    <div className="bg-[#080c14] min-h-screen h-fit px-[22%] text-white">
      <div className="flex justify-end ">
        <Link to="/admin/postjob">
          <button
            forceRedirectUrl={"/"}
            className=" p-2 h-[40px] px-4 bg-[#e0fc04] flex justify-center items-center text-black rounded-lg hover:opacity-[.8] transition font-semibold "
          >
            Post A Job
          </button>
        </Link>
      </div>
    </div>
  );
}
