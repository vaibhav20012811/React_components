// import React, { useState } from "react";
import DrawIo from "./components/drawIo";
import Sidebar from "./components/Sidebar";

import { PiSidebarSimpleThin } from "react-icons/pi";
import { IoCaretDownSharp } from "react-icons/io5";
import { CiZoomIn } from "react-icons/ci";
import { CiZoomOut } from "react-icons/ci";
import { BiUndo } from "react-icons/bi";
import { BiRedo } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { RiBringToFront } from "react-icons/ri";
import { RiSendToBack } from "react-icons/ri";
import { IoMdColorFill } from "react-icons/io";
import { MdOutlineBorderColor } from "react-icons/md";
import { RiShadowLine } from "react-icons/ri";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IoGitCompareOutline } from "react-icons/io5";
import { TiPlus } from "react-icons/ti";
import { CiViewTable } from "react-icons/ci";
// import { IoCaretForwardSharp } from "react-icons/io5";
// import { GrSearch } from "react-icons/gr";

export default function App() {
  return (
    <>
      <div className="">
        <div className="border-y h-auto w-auto m-auto flex place-content-start">
          <button className="m-4 col">
            <DrawIo />
          </button>

          <div>
            <h1 className="ml-2 mt-2 text-lg">Project Name</h1>

            <ul className="flex place-content-end mb ">
              <li className="mx-2 text-base">File</li>
              <li className="mx-2 text-base">Edit</li>
              <li className="mx-2 text-base">View</li>
              <li className="mx-2 text-base">Arrange</li>
              <li className="mx-2 text-base">Extras</li>
              <li className="mx-2 text-base">Help</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-b h-auto w-auto m-auto flex place-content-start">
        <ul className="flex justify-start m-2 divide-x divide-solid ">
          <li className="container flex my-auto mr-2">
            <PiSidebarSimpleThin size={30} />
            <IoCaretDownSharp fill="#7a7b7c" className="my-auto" />
          </li>

          <li className="container flex my-auto mr-2">
            <p className="ml-2">20%</p>
            <IoCaretDownSharp fill="#7a7b7c" className="my-auto" />
          </li>

          <li className="container flex my-auto mr-2">
            <CiZoomIn size={25} className="ml-2" />
            <CiZoomOut size={25} className="" />
          </li>

          <li className="container flex my-auto mr-2">
            <BiUndo size={20} className="ml-2" fill="#7a7b7c" />
            <BiRedo size={20} fill="#7a7b7c" className="" />
          </li>

          <li className="container flex my-auto mr-2">
            <RiDeleteBin6Fill size={20} fill="#7a7b7c" className="ml-2" />
          </li>

          <li className="container flex my-auto mr-2">
            <RiBringToFront size={20} className="ml-2" fill="#7a7b7c" />
            <RiSendToBack size={20} fill="#7a7b7c" />
          </li>

          <li className="container flex my-auto mr-2">
            <IoMdColorFill size={20} className="ml-2" fill="#7a7b7c" />
            <MdOutlineBorderColor size={20} className="" fill="#7a7b7c" />
            <RiShadowLine size={20} fill="#7a7b7c" />
          </li>

          <li className="container flex my-auto mr-2">
            <HiOutlineArrowLongRight
              size={25}
              fill="#7a7b7c"
              className="ml-2"
            />
            <IoCaretDownSharp className="my-auto" fill="#7a7b7c" />
            <IoGitCompareOutline size={20} fill="#7a7b7c" />
          </li>

          <li className="container flex my-auto mr-2">
            <TiPlus size={25} className="ml-2" />
            <IoCaretDownSharp className="my-auto" fill="#7a7b7c" />
          </li>

          <li className="container flex my-auto mr-2">
            <CiViewTable size={25} className="ml-2" />
            <IoCaretDownSharp className="my-auto" fill="#7a7b7c" />
          </li>
        </ul>
      </div>

      <Sidebar />
    </>
  );
}
