import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div className="bg-slate-700">Navbar</div>
      <div className="bg-slate-500">
        <Outlet />
      </div>
    </div>
  );
}