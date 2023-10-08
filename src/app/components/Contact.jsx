import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <h1>Hit me Up!</h1>
        <br></br>
           {/* link button starts */}
           <div>
                {/* Hire me */}
                <Link
                href="/"
                className="px-5 inline-block py-2 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-white bg-[#5d5d5d] hover:bg-slate-800"
                >
                Location
                </Link>
                {/* Download CV */}
                <Link
                href="/"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                    Mail
                </span>
                </Link>
            </div>
            {/* link button ends */}
    </div>
  )
}

export default Contact