import { useState } from "react";
import { Grip, X, Search } from "lucide-react";
import logo from "./assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* left sidebar */}
      <div className="hidden absolute w-28 top-0 md:flex items-start justify-center z-20 border-r border-slate-50/50 h-screen">
        <div className="w-full p-10 border-b border-slate-50/50">
          <Grip className="text-white" />
        </div>
      </div>

      {/* centered navbar (desktop) */}
      <div className="hidden md:flex justify-between border-b ml-28 border-slate-50/50 bg-black z-10">
        <ul className="flex gap-20 p-10">
          <li className="cursor-pointer text-white underline decoration-2 underline-offset-8 decoration-blue-500">
            Home
          </li>
          <li className="cursor-pointer text-slate-300">F1 Special Edition</li>
          <li className="cursor-pointer text-slate-300">Super Car Series</li>
          <li className="cursor-pointer text-slate-300">Premium Frames</li>
          <li className="cursor-pointer text-slate-300">Custom Frames</li>
        </ul>

        <div className="flex gap-4 items-center border-l border-slate-50/50 p-10">
          <Search className="text-slate-300" />
          <p className="text-slate-300">Search any car</p>
        </div>
      </div>

      {/* mobile top bar */}
      <div className="md:hidden fixed flex justify-between items-center px-8 py-4 bg-black/50 backdrop-blur-3xl text-white border-b border-slate-50/50 z-10 w-full">
        <img src={logo} alt="logo" className="h-10" />
        <button onClick={() => setOpen(true)}>
          <Grip className="w-6 h-6" />
        </button>
      </div>

      {/* overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)} // close menu when overlay is clicked
          className="fixed inset-0 z-40 w-full h-full bg-black/50 backdrop-blur-[2px]"
        ></div>
      )}

      {/* mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black border-l border-slate-50/50 transform transition-transform duration-300 ease-in-out z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-5.5 border-b border-slate-50/50">
          <h2 className="text-lg font-bold text-white">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        <ul className="flex flex-col gap-6 p-6 text-white text-lg">
          <li className="cursor-pointer text-white underline decoration-2 underline-offset-8 decoration-blue-500">
            Home
          </li>
          <li className="cursor-pointer text-slate-300">F1 Special Edition</li>
          <li className="cursor-pointer text-slate-300">Super Car Series</li>
          <li className="cursor-pointer text-slate-300">Premium Frames</li>
          <li className="cursor-pointer text-slate-300">Custom Frames</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
