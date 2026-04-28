import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col justify-stretch h-dvh">
      <div className="flex justify-center gap-2 p-2 text-white bg-green-500">
        <Link className="px-2 rounded hover:bg-green-600" to="/">Home</Link>
        <Link className="px-2 rounded hover:bg-green-600" to="/products">Products</Link>
        <Link className="px-2 rounded hover:bg-green-600" to="/about">About</Link>
      </div>
      <div className="grow p-10 bg-slate-50">
        <Outlet />
      </div>
    </div>
  );
}