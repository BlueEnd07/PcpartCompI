import { useState } from "react";

export default function Nevbar() {

  return (
    <div>
      <div className="flex text-center justify-center flex-col text-black pb-16 gap-10 font-sans">
        <div className="logo w-full px-7 my-3 py-3 rounded-lg">
          <ul className="flex justify-between gap-10 font-bold text-lg">
            <li className='text-xl'>Lokehrawat.dev</li>
            <ul className="flex gap-20 pr-5 ">
              <li>ABOUT</li>
              <li>CONTACT US</li>
            </ul>
          </ul>
        </div>

        <div className="mainlogo">

        </div>

        <div className="main-hedline text-7xl py-10 bg-opacity-40  max-w-fit mx-auto p-10 rounded-2xl">
          Last place in search of pc parts
        </div>

      </div>
    </div>
  );
}
