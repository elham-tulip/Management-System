import { CalendarDays } from "lucide-react";

export default function EventCard() {
  return (
    <div className="relative h-[145px] overflow-hidden rounded-[10px] bg-gradient-to-r from-[#087CE8] to-[#1596E8] px-5 py-5 text-white">

      <div className="relative z-10">

        <p className="text-[11px] font-semibold">
          Upcoming Event
        </p>

        <h2 className="mt-3 max-w-[210px] text-[14px] font-semibold leading-5">
          Cross-division knowledge-sharing
        </h2>

        <button className="mt-4 rounded-md bg-[#171C3B] px-4 py-2 text-[10px] font-medium">
          Add to calendar
        </button>

      </div>

      {/* Members badge */}
      <span className="absolute right-4 top-4 rounded-md bg-[#F0445B] px-3 py-1 text-[9px]">
        Members
      </span>

      {/* Illustration area */}
      <div className="absolute bottom-0 right-5 flex h-[105px] w-[125px] items-center justify-center rounded-full bg-white/20">

        <CalendarDays
          size={58}
          strokeWidth={1.4}
        />

      </div>

    </div>
  );
}