import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const calendar = [
  ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  ["", "", "", "", "", "", "1"],
  ["2", "3", "4", "5", "6", "7", "8"],
  ["9", "10", "11", "12", "13", "14", "15"],
  ["16", "17", "18", "19", "20", "21", "22"],
  ["23", "24", "25", "26", "27", "28", "29"],
  ["30", "31", "", "", "", "", ""],
];

export default function SessionCalendar() {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-[#171C3B]">
          Session
        </h2>

        <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50">
          <CalendarDays size={15} className="text-gray-500" />
        </button>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <button className="flex h-7 w-7 items-center justify-center rounded bg-[#171C3B] text-white">
          <ChevronLeft size={14} />
        </button>

        <span className="text-xs font-semibold">
          July, 2023
        </span>

        <button className="flex h-7 w-7 items-center justify-center rounded bg-[#171C3B] text-white">
          <ChevronRight size={14} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-y-2 text-center">
        {calendar.flat().map((day, index) => (
          <span
            key={index}
            className={`flex h-7 items-center justify-center text-[9px] ${
              index < 7
                ? "font-semibold text-gray-500"
                : "text-gray-600"
            } ${
              day === "6" || day === "8"
                ? "mx-auto w-7 rounded-full bg-[#171C3B] text-white"
                : ""
            }`}
          >
            {day}
          </span>
        ))}
      </div>
    </div>
  );
}