import { useEffect } from "react";
import Timeline from "../components/timeline";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
export default function DashBoard() {
  useEffect(() => {
    document.title = "Instagram";
  }, []);
  return (
    <div className="bg-gray-background">
      <Header />
      <div className="grid">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}
