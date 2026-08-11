
import { useEffect, useState } from "react";
import axios from "axios";

import EventCard from "../components/EventCard";
import StatCard from "../components/StatCard";
import AttendanceChart from "../components/AttendanceChart";
import SessionCalendar from "../components/SessionCalendar";

function Dashboard() {
  const [stats, setStats] = useState({
    totalMembers: 0,
    totalDivisions: 0,
    attendanceRate: 0,
    upcomingSessions: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dashboard", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setStats(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const cards = [
    {
      title: "Total Members",
      value: stats.totalMembers,
      update: "Updated: Today",
      percent: "",
      type: "members",
    },
    {
      title: "Total Divisions",
      value: stats.totalDivisions,
      update: "Updated: Today",
      percent: "",
      type: "divisions",
    },
    {
      title: "Attendance Rate",
      value: `${stats.attendanceRate}%`,
      update: "Updated: Today",
      percent: "",
      type: "attendance",
    },
    {
      title: "Upcoming Sessions",
      value: stats.upcomingSessions,
      update: "Updated: Today",
      percent: "",
      type: "sessions",
    },
  ];

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_300px] gap-5">

      <section>
        <EventCard />

        <div className="mt-5 grid grid-cols-2 gap-4">
          {cards.map((card) => (
            <StatCard
              key={card.title}
              {...card}
            />
          ))}
        </div>

        <div className="mt-5">
          <AttendanceChart />
        </div>
      </section>

      <section>
        <SessionCalendar />
      </section>

    </div>
  );
}

export default Dashboard;

