'use client'

import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-full w-[1059px]">
      <div>
        <div className="flex justify-end w-full mt-4">
          <button
            className="btn btn-primary text-white  rounded mr-5"
            onClick={() => document.getElementById("formLogin").showModal()}
          >
            เข้าสู่ระบบ
          </button>
        </div>
        <div className="a">
          <Link href="./Menu">go menu</Link>
        </div>
      </div>

      {/*dialog00 */}
      <dialog id="formLogin" className="modal max-w-max rounded">
        <div className="modal-box bg-base-200">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              type="button"
              onClick={() => document.getElementById('formLogin').close()}
            >
              ✕
            </button>
          </form>
          <form className=" flex flex-col justify-between bg-base-200">
            <label htmlFor="username" className="block mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="input input-bordered mb-4"
              placeholder="Enter your username"
              required
            />
            <label htmlFor="password" className="block mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input input-bordered mb-4"
              placeholder="Enter your password"
              required
            />

            <div className="flex items-center justify-center">
              <button type="submit" className="btn  btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </main>
  );
}
