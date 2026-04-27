import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col justify-stretch h-dvh">
      <div className="bg-green-500">Navbar</div>
      <div className="grow p-10 bg-slate-50">
        <Outlet />
      </div>
    </div>
  );
}