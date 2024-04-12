export default function Sidebar() {
  return (
    <>
      <nav className="menu bg-base-200 w-[16rem] min-h-screen">
        <h2 className="menu-title text-white text-center font-semibold text-xl mb-5">
          Restaurant
        </h2>
        <ul>
          <li className="menu-item active mb-3">
            <a
              href="#"
              className="menu-link block  py-2 "
            >
               Dashboard
            </a>
          </li>
          <li className="menu-item mb-3">
            <a
              href="#"
              className="menu-link block  py-2 "
            >
              การขาย
            </a>
          </li>
          <li className="menu-item mb-3">
            <a
              href="#"
              className="menu-link block  py-2 "
            >
              พนักงาน
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
