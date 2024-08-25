import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [districts, setDistricts] = useState([]);
  useEffect(() => {
    fetch("https://bdapis.com/api/v1.2/districts")
      .then((res) => res.json())
      .then((data) => {
        setDistricts(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(districts);
  return (
    <div>
      <div className="drawer lg:drawer-open z-10">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="fixed top-5 left-5 text-xl rotate-90 lg:hidden "
          >
            |||
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <select className="select select-secondary w-full max-w-xs">
                <option disabled selected>
                  Search by location
                </option>
                {districts.map((district) => (
                  <option key={district.district}>{district?.district}</option>
                ))}
              </select>
            </li>
            <li>
              <select className="select select-secondary w-full max-w-xs">
                <option disabled selected>
                  Pick your favorite language
                </option>
                <option>Java</option>
                <option>Go</option>
                <option>C</option>
                <option>C#</option>
                <option>C++</option>
                <option>Rust</option>
                <option>JavaScript</option>
                <option>Python</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
