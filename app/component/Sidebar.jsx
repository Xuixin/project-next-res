import { Fragment } from "react";
export default function Sidebar() {

  return (
    <>
       <Fragment>
      <div className="h-screen fixed top-0 left-0 w-64 z-40 overflow-y-auto flex flex-col justify-between">
        <div className="flex items-center justify-center py-4 text-[#746BE2] text-xl font-bold">
          Dashboard
        </div>
        <ul className="flex flex-col px-4">
          <li className="my-2">
            <a href="#" className="flex items-center p-2 text-white hover:bg-gray-700 rounded-md">
              <i className="fa fa-fw fa-home mr-2" aria-hidden="true"></i>
              <span>Home</span>
            </a>
          </li>
          <li className="my-2">
            <a href="#" className="flex items-center p-2 text-white hover:bg-gray-700 rounded-md">
              <i className="fa fa-fw fa-users mr-2" aria-hidden="true"></i>
              <span>Users</span>
            </a>
          </li>
          <li className="my-2">
            <a href="#" className="flex items-center p-2 text-white hover:bg-gray-700 rounded-md">
              <i className="fa fa-fw fa-folder mr-2" aria-hidden="true"></i>
              <span>Projects</span>
            </a>
          </li>
          <li className="my-2">
            <a href="#" className="flex items-center p-2 text-white hover:bg-gray-700 rounded-md">
              <i className="fa fa-fw fa-calendar mr-2" aria-hidden="true"></i>
              <span>Calendar</span>
            </a>
          </li>
          {/* Add more sidebar items here */}
        </ul>
        <div className="flex px-4 py-2 items-center space-x-2 text-white">
          {/* Add footer content here,  e.g., logout button */}
        </div>
      </div>
    </Fragment>
    </>
  );
}
