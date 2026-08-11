import {
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-[76px] items-center justify-between px-7">

      
      <div>
        <h1 className="text-[17px] font-bold text-[#171C3B]">
          Hello Elham 👋
        </h1>

        <p className="mt-1 text-xs text-gray-400">
          Good Morning
        </p>
      </div>

    
      <div className="flex items-center gap-3">

        
        <div className="flex h-10 w-[145px] items-center gap-2 rounded-lg border border-gray-200 bg-white px-3">

          <Search
            size={16}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-xs outline-none"
          />

        </div>

        
        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white">
          <Bell size={17} className="text-gray-600" />
        </button>

        
        <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-2 py-1.5">

          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#171C3B] text-xs font-bold text-white">
            EM
          </div>

          <div className="text-left">
            <p className="text-xs font-semibold text-[#171C3B]">
              Elham Mohammed
            </p>

            <p className="text-[9px] text-gray-400">
              Admin
            </p>
          </div>

          <ChevronDown
            size={14}
            className="text-gray-500"
          />

        </button>

      </div>

    </header>
  );
}