"use client";

import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router =useRouter()
  const [showAbout, setShowAbout] = useState(false);
  return (
    <div
      className="
        w-[full] min-h-screen
        flex items-center justify-between
      bg-[radial-gradient(circle_at_right,#a575bf_0%,#4d4b6d_25%,#2d3041_55%,#282a36_100%)]
        px-6 md:px-12 lg:px-25
        cursor-pointer
      "
    >
      <div className="max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          Hi,
        </h1>

        <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
        <p>I&apos;m a developer</p>
        </h1>

        <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#ff76ce]">
          Full Stack & Flutter Developer
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#a8b0d1] hover:scale-105">
           Full Stack Developer | Dart | Java | Next.js | Flutter | Hive | FireBase
        </p>
     <div className="flex flex-wrap justify-center gap-8 mt-8" >
  <button
    onClick={() => router.push("/portfolio")}
    className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500
    text-white font-bold text-lg shadow-xl hover:shadow-2xl
    hover:scale-105 hover:-translate-y-1 transition-all duration-300"
  >
    🚀 Next.js Project
  </button>

  <button
    onClick={() => router.push("/hive")}
    className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500
    text-white font-bold text-lg shadow-xl hover:shadow-2xl
    hover:scale-105 hover:-translate-y-1 transition-all duration-300"
  >
    📱 Flutter Hive Project
  </button>

  <button
    onClick={() => router.push("/firebase")}
    className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500
    text-white font-bold text-lg shadow-xl hover:shadow-2xl
    hover:scale-105 hover:-translate-y-1 transition-all duration-300"
  >
    🔥 Flutter Firebase Project
  </button>
</div>
      </div>
    {/* right side */}
    <div className="flex flex-col" 
    >
     <button
      onClick={() => setShowAbout(!showAbout)}
  className="flex items-center gap-4 text-xl md:text-xl font-bold"
>
  <span className="text-yellow-400 animate-bounce">
    👉
  </span>

  <span className="hover:scale-110 transition-transform duration-300">
    CLICK HERE
  </span>
</button>
  <button
  onClick={() => setShowAbout(!showAbout)}
    className="mt-6 inline-flex items-center gap-2 text-black font-bold text-5xl hover:scale-105 transition-transform"
  >
    <span>ABOUT</span>

    <span
      className="px-3 py-5 rounded-full border-2 border-[#ae70e7] text-white
      bg-[radial-gradient(circle_at_center_bottom,#c5c4ef_0%,transparent_45%),linear-gradient(90deg,#ac66e4_0%,#8e86f6_50%,#afceef_100%)]"
    >
      ME
    </span>
  </button>

  <p className="mt-2 text-sm font-medium tracking-[0.3em] text-white">
    SELF-INTRODUCTION
  </p>
  {showAbout && (
  <div className="mt-8 max-w-4xl rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-2xl">
    
    {/* Header */}
    <div className="mb-8">
      <h2 className="text-4xl font-bold text-white">
        Fathima Thooba
      </h2>
      <p className="mt-2 text-[#c5c4ef] text-lg">
        Full Stack Developer
      </p>
    </div>

    {/* About */}
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-white mb-3">
        About Me
      </h3>

      <p className="text-gray-200 leading-8">
      I am a passionate Full Stack and Flutter Developer specializing in Next.js,
React.js, Tailwind CSS, Node.js, Flutter, Dart, and modern development
technologies. I enjoy building responsive web applications, cross-platform
mobile apps, e-commerce platforms, dashboards, and AI-powered solutions.
My goal is to create fast, scalable, and user-friendly digital experiences
while continuously improving my skills and exploring emerging technologies.
      </p>
    </div>

    {/* Details Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      <div className="rounded-xl bg-white/5 p-4">
        <span className="text-[#c5c4ef]">Name</span>
        <p className="text-white font-medium">Fathima Thooba</p>
      </div>

      <div className="rounded-xl bg-white/5 p-4">
        <span className="text-[#c5c4ef]">Husband Name</span>
        <p className="text-white font-medium">Mohamed Azeem</p>
      </div>

      <div className="rounded-xl bg-white/5 p-4">
        <span className="text-[#c5c4ef]">Date of Birth</span>
        <p className="text-white font-medium">30 December 1993</p>
      </div>

      <div className="rounded-xl bg-white/5 p-4">
        <span className="text-[#c5c4ef]">Designation</span>
        <p className="text-white font-medium">Full Stack Developer</p>
      </div>

      <div className="rounded-xl bg-white/5 p-4">
        <span className="text-[#c5c4ef]">Company</span>
        <p className="text-white font-medium">MATT Engineering</p>
      </div>

      <div className="rounded-xl bg-white/5 p-4">
        <span className="text-[#c5c4ef]">Experience</span>
        <p className="text-white font-medium">2 Years  [2024 jun - present]</p>
      </div>

      <div className="rounded-xl bg-white/5 p-4">
        <span className="text-[#c5c4ef]">Education</span>
        <p className="text-white font-medium">B,sc Tourism and Hospitality Management</p>
      </div>

      <div className="rounded-xl bg-white/5 p-4">
        <span className="text-[#c5c4ef]">Native Place</span>
        <p className="text-white font-medium">
          Tamil Nadu, India
        </p>
      </div>

      <div className="rounded-xl bg-white/5 p-4">
        <span className="text-[#c5c4ef]">Current Location</span>
        <p className="text-white font-medium">
          Uganda, East Africa
        </p>
      </div>

      <div className="rounded-xl bg-white/5 p-4">
        <span className="text-[#c5c4ef]">Passport Number</span>
        <p className="text-white font-medium">U2250958</p>
      </div>

      <div className="rounded-xl bg-white/5 p-4">
        <span className="text-[#c5c4ef]">Passport Expiry</span>
        <p className="text-white font-medium">17 Nov 2029</p>
      </div>

      <div className="rounded-xl bg-white/5 p-4">
        <span className="text-[#c5c4ef]">WhatsApp</span>
        <p className="text-white font-medium">
          +91 7010546982
        </p>
      </div>

      <div className="rounded-xl bg-white/5 p-4">
        <span className="text-[#c5c4ef]">Phone</span>
        <p className="text-white font-medium">
          +256 751536989
        </p>
      </div>

      <div className="rounded-xl bg-white/5 p-4 md:col-span-2">
        <span className="text-[#c5c4ef]">Languages Known</span>
        <p className="text-white font-medium">
          English, Tamil, Malayalam
        </p>
      </div>

    </div>
  </div>
)}
</div>
    </div>
  );
};

export default LandingPage;
