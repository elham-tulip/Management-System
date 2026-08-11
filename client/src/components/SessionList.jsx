import { MoreVertical } from "lucide-react";

const firstDay = [
  ["09:30", "CPD", "Contest in CPD Division"],
  ["12:00", "Development", "Development Weekly Sessions"],
  ["01:30", "Cyber", "Cyber Weekly Sessions"],
];

const secondDay = [
  ["09:30", "Data Science", "Data Science Weekly Sessions"],
  ["11:00", "CPD", "Contest Analysis in CPD Division"],
];

function SessionItem({ item }) {
  return (
    <div className="flex gap-4">

      <span className="w-[40px] text-[10px] font-semibold text-[#171C3B]">
        {item[0]}
      </span>

      <div>

        <p className="text-[9px] text-gray-400">
          {item[1]}
        </p>

        <p className="mt-1 text-[10px] font-medium text-[#171C3B]">
          {item[2]}
        </p>

      </div>

    </div>
  );
}

 function SessionList() {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-5">

      
      <div className="flex items-center justify-between">

        <h3 className="text-xs font-semibold text-[#171C3B]">
          Wednesday, 06 July 2025
        </h3>

        <MoreVertical
          size={15}
          className="text-gray-500"
        />

      </div>

      <div className="mt-4 space-y-4">

        {firstDay.map((item, index) => (
          <SessionItem
            key={index}
            item={item}
          />
        ))}

      </div>

      
      <div className="mt-6 flex items-center justify-between">

        <h3 className="text-xs font-semibold text-[#171C3B]">
          Thursday, 07 July 2023
        </h3>

        <MoreVertical
          size={15}
          className="text-gray-500"
        />

      </div>

      <div className="mt-4 space-y-4">

        {secondDay.map((item, index) => (
          <SessionItem
            key={index}
            item={item}
          />
        ))}

      </div>

    </div>
  );
}
export  default SessionList;