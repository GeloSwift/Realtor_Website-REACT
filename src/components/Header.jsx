import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const base = "inline-block py-3 text-sm font-semibold border-b-[3px] -mb-[1px]";
  const inactive = "text-gray-400 border-b-transparent";
  const active = "text-black border-b-red-500";
  const navigate = useNavigate();

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <nav>
          <ul className="flex space-x-10">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/offers"
                className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
              >
                Offers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sign-in"
                className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
              >
                Sign in
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
