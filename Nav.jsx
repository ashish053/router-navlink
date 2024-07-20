import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav className=" mt-10 flex justify-center gap-10">
        <NavLink to="/">
          {(e) => {
            return (
              <span
                className={[
                  e.isActive ? "text-red-400" : "",
                  e.isActive ? "font-bold" : "",
                ].join(" ")}
              >
                Home
              </span>
            );
          }}
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "tomato" : "",
            };
          }}
          to="/user"
        >
          User
        </NavLink>
        <NavLink
          className={(e) => {
            return [
              e.isActive ? "text-red-400" : "",
              e.isActive ? "font-bold" : "",
            ].join(" ");
          }}
          to="/about"
        >
          About
        </NavLink>
      </nav>
    </div>
  )
}

export default Nav
