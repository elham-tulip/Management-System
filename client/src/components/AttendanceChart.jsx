 function AttendanceChart() {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4">

    
      <div className="flex items-center justify-between">

        <div className="flex gap-5">

          <button className="border-b-2 border-[#7152F3] pb-2 text-[10px] font-semibold text-[#7152F3]">
            Attendance Overview
          </button>

          <button className="text-[10px] text-gray-400">
            Total Members
          </button>

          <button className="text-[10px] text-gray-400">
            Total Divisions
          </button>

        </div>

        <div className="flex gap-4 text-[9px] text-gray-400">
          <span>● This year</span>
          <span>● Last year</span>
        </div>

      </div>

      
      <div className="relative mt-5 h-[145px]">

    
        <div className="absolute inset-0 flex flex-col justify-between">

          <div className="border-t border-gray-100" />
          <div className="border-t border-gray-100" />
          <div className="border-t border-gray-100" />
          <div className="border-t border-gray-100" />
          <div className="border-t border-gray-100" />

        </div>

    
        <svg
          viewBox="0 0 700 145"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0 125
              C25 118 35 95 55 105
              C75 115 80 80 105 90
              C130 100 135 76 160 80
              C190 85 195 105 220 95
              C250 82 265 100 290 70
              C315 40 330 65 355 50
              C380 35 395 60 415 42
              C440 18 455 70 480 52
              C505 35 520 65 545 55
              C570 45 585 75 610 65
              C640 55 655 78 700 55
            "
            fill="none"
            stroke="#7152F3"
            strokeWidth="2"
          />
        </svg>

      </div>

    </div>
  );
}

export default AttendanceChart;
