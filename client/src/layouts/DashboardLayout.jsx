import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#F8F9FC]">

      <Sidebar />

      <main className="flex-1">

        <Header />

        <div className="px-7 pb-7">
          {children}
        </div>

      </main>

    </div>
  );
}