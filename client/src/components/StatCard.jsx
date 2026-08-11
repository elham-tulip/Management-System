import {
  UserRound,
  Layers,
  CalendarCheck,
  Clock3,
} from "lucide-react";

const icons = {
  members: UserRound,
  divisions: Layers,
  attendance: CalendarCheck,
  sessions: Clock3,
};

 function StatCard({
  title,
  value,
  update,
  percent,
  type,
}) {
  const Icon = icons[type];

  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <Icon
            size={15}
            className="text-[#7152F3]"
          />

          <span className="text-[10px] font-medium text-gray-500">
            {title}
          </span>

        </div>

        <span className="rounded bg-green-50 px-2 py-1 text-[8px] text-green-500">
          {percent}
        </span>

      </div>

      <p className="mt-4 text-[22px] font-bold text-[#171C3B]">
        {value}
      </p>

      <p className="mt-1 text-[8px] text-gray-400">
        {update}
      </p>

    </div>
  );
}
export default StatCard;