import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  Settings,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => { localStorage.removeItem("token"); 
    navigate("/"); };

  return (
    <aside className="flex h-screen w-[220px] flex-col border-r border-gray-100 bg-white px-5 py-7">

    
      <div className="mb-10 flex items-center gap-2 px-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#171C3B]">
          <div className="h-3 w-4 rounded-sm border-2 border-white" />
        </div>

        <span className="text-[17px] font-bold text-[#171C3B]">
          Logoppsum
        </span>
      </div>

      
      <nav className="flex flex-col gap-2">

        {/* Dashboard */}
        <button
          onClick={() => navigate("/dashboard")}
          className="flex h-11 items-center gap-3 rounded-lg px-4 text-sm text-gray-500 hover:bg-gray-50"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </button>

        
        <button
          onClick={() => navigate("/members")}
          className="flex h-11 items-center gap-3 rounded-lg px-4 text-sm text-gray-500 hover:bg-gray-50"
        >
          <Users size={18} />
          All Members
        </button>

        
        <button
          onClick={() => navigate("/attendance")}
          className="flex h-11 items-center gap-3 rounded-lg px-4 text-sm text-gray-500 hover:bg-gray-50"
        >
          <CalendarCheck size={18} />
          Attendance
        </button>

        
        <button
          onClick={() => navigate("/settings")}
          className="flex h-11 items-center gap-3 rounded-lg px-4 text-sm text-gray-500 hover:bg-gray-50"
        >
          <Settings size={18} />
          Settings
        </button>

      </nav>

      
      <div className="mt-auto">

        <div className="flex rounded-lg bg-gray-50 p-1">

          <button className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#7152F3] py-2 text-xs font-medium text-white">
            <Sun size={15} />
            Light
          </button>

          <button className="flex flex-1 items-center justify-center gap-2 py-2 text-xs text-gray-500">
            <Moon size={15} />
            Dark
          </button>

        </div>


<button onClick={handleLogout} className="mt-4 flex h-11 w-full items-center gap-3 rounded-lg px-4 text-sm text-gray-500 hover:bg-red-50 hover:text-red-500" > 
    <LogOut size={18} />
     Logout 
     </button>

      </div>

    </aside>
  );
}

export default Sidebar;

