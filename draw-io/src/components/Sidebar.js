import React from "react";

import { IoCaretForwardSharp } from "react-icons/io5";
import { GrSearch } from "react-icons/gr";

export default function Sidebar() {
  return (
    <div className="h-screen fixed">
      <ul className="h-full flex flex-col border-r divide-y divide-solid">
        <li className="flex container p-2">
          <input
            className="border p-2 rounded-lg"
            type="text"
            placeholder={`Search Shapes`}
          />
        </li>

        <li className="flex container p-2 hover:bg-gray-100">
          <IoCaretForwardSharp
            size={13}
            fill="#7a7b7c"
            className="my-auto mr-1"
          />
          <p className="text-sm font-bold">General</p>
        </li>

        <li className="flex container p-2 hover:bg-gray-100">
          <IoCaretForwardSharp
            size={13}
            fill="#7a7b7c"
            className="my-auto mr-1"
          />
          <p className="text-sm font-bold">Misc</p>
        </li>

        <li className="flex container p-2 hover:bg-gray-100">
          <IoCaretForwardSharp
            size={13}
            fill="#7a7b7c"
            className="my-auto mr-1"
          />
          <p className="text-sm font-bold">Advanced</p>
        </li>

        <li className="flex container p-2 hover:bg-gray-100">
          <IoCaretForwardSharp
            size={13}
            fill="#7a7b7c"
            className="my-auto mr-1"
          />
          <p className="text-sm font-bold">Basic</p>
        </li>

        <li className="flex container p-2 hover:bg-gray-100">
          <IoCaretForwardSharp
            size={13}
            fill="#7a7b7c"
            className="my-auto mr-1"
          />
          <p className="text-sm font-bold">Arrows</p>
        </li>

        <li className="flex container p-2 hover:bg-gray-100">
          <IoCaretForwardSharp
            size={13}
            fill="#7a7b7c"
            className="my-auto mr-1"
          />
          <p className="text-sm font-bold">Flowchart</p>
        </li>

        <li className="flex container p-2 hover:bg-gray-100">
          <IoCaretForwardSharp
            size={13}
            fill="#7a7b7c"
            className="my-auto mr-1"
          />
          <p className="text-sm font-bold">Entity Relation</p>
        </li>

        <li className="flex container p-2 hover:bg-gray-100">
          <IoCaretForwardSharp
            size={13}
            fill="#7a7b7c"
            className="my-auto mr-1"
          />
          <p className="text-sm font-bold">UML</p>
        </li>
      </ul>
    </div>
  );
}
