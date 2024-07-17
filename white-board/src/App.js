import { FaMousePointer } from "react-icons/fa";
import { FaRegSquareFull } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { RxTransparencyGrid } from "react-icons/rx";
import { RxHand } from "react-icons/rx";
import { MdFormatColorFill } from "react-icons/md";

import { ACTIONS, FILLCOLORS } from "./constants";
import { useRef, useState } from "react";

import { Stage, Layer, Rect, Circle, Transformer } from "react-konva";
import { v4 as uuidv4 } from "uuid";

import DropDownBtns from "../src/components/DropDownBtns";
import ColorPickerButton from "./components/ColorPickerBtn";
import SlidingPanel from "react-sliding-side-panel";

function App() {
  const [openPanel, setOpenPanel] = useState(false);

  const stageRef = useRef();
  const transformerRef = useRef();
  const [action, setAction] = useState(ACTIONS.SELECT);

  const [fillColor, setfillColor] = useState(FILLCOLORS.TRANSPARENCY);

  const [rectangles, setRectangles] = useState([]);

  const [isDragAble, setisDragAble] = useState(false);

  const isPaining = useRef();
  const currentShapeId = useRef();

  const isDraggable = action === ACTIONS.SELECT;

  const handleDelete = (id) => {
    if (action === ACTIONS.DELETE) {
      console.log(id);
    }
  };
  const onPointerDown = () => {
    if (action === ACTIONS.SELECT) return;

    const stage = stageRef.current;
    const { x, y } = stage.getPointerPosition();
    const id = uuidv4();

    currentShapeId.current = id;
    isPaining.current = true;

    switch (action) {
      case ACTIONS.RECTANGLE:
        setRectangles((rectangle) => [
          ...rectangle,
          {
            id,
            x,
            y,
            height: 20,
            width: 20,
            fillColor,
          },
        ]);
        break;
    }
  };

  const onPointerMove = () => {
    if (action === ACTIONS.SELECT || !isPaining.current) return;

    const stage = stageRef.current;
    const { x, y } = stage.getPointerPosition();

    switch (action) {
      case ACTIONS.RECTANGLE:
        setRectangles((rectangles) =>
          rectangles.map((rectangle) => {
            if (rectangle.id === currentShapeId.current) {
              return {
                ...rectangle,
                width: x - rectangle.x,
                height: y - rectangle.y,
              };
            }
            return rectangle;
          })
        );
    }
  };
  const onPointerUp = () => {
    isPaining.current = false;
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setAction(ACTIONS.SELECT);
    }
  });

  function onClick(e) {
    if (action !== ACTIONS.SELECT) return;
    const target = e.currentTarget;
    transformerRef.current.nodes([target]);
    console.log(transformerRef);
  }

  // const onClickColorChange = () => {
  //   // const target = e.target;
  //   // const obj = Object.values(target)[2];
  //   // console.log(obj["fill"]);
  //   console.log("click");
  // };

  let btnShow = true;

  return (
    <>
      <div className="grid grid-rows-4 place-content-start p-3">
        <div className="">
          <button
            className={`p-3 border ${
              action === ACTIONS.SELECT ? "bg-red-500" : "bg-white"
            } border-black hover:bg-red-500 rounded-l-lg`}
            onClick={() => {
              setAction(ACTIONS.SELECT);
            }}
          >
            <FaMousePointer />
          </button>

          <button
            className={`p-3 ${
              action === ACTIONS.ZOOM ? "bg-red-500" : "bg-white"
            } border-y border-r border-black hover:bg-red-500`}
            onClick={() => {
              setAction(ACTIONS.ZOOM);
            }}
          >
            <RxHand />
          </button>

          <button
            className={`p-3 ${
              action === ACTIONS.RECTANGLE ? "bg-red-500" : "bg-white"
            } border-y border-black hover:bg-red-500`}
            onClick={() => {
              setAction(ACTIONS.RECTANGLE);
            }}
          >
            <FaRegSquareFull />
          </button>

          <button
            className={`p-3 ${
              action === ACTIONS.CIRCLE ? "bg-red-500" : "bg-white"
            } border-y border-l border-black hover:bg-red-500`}
            onClick={() => {
              setAction(ACTIONS.CIRCLE);
            }}
          >
            <FaRegCircle />
          </button>

          <button
            className={`p-3 ${
              action === ACTIONS.DELETE ? "bg-red-500" : "bg-white"
            } border border-black hover:bg-red-500 rounded-r-lg`}
            onClick={() => {
              setAction(ACTIONS.DELETE);
            }}
          >
            <MdDelete />
          </button>
        </div>

        <div className="place-content-start">
          <button
            className={`p-3 border ${
              fillColor === FILLCOLORS.TRANSPARENCY ? "bg-red-500" : "bg-white"
            } border-black hover:bg-red-500 rounded-l-lg`}
            onClick={() => {
              setfillColor(FILLCOLORS.TRANSPARENCY);
            }}
          >
            <RxTransparencyGrid />
          </button>

          <button
            className={`p-2 border-y border-r border-black rounded-r-lg`}
            // onClick={onClickColorChange}
          >
            <input
              id="colorinput"
              className="p-0 w-6 h-5"
              type="color"
              value={fillColor}
              onChange={(e) => setfillColor(e.target.value)}
            />

            {/* <ColorPickerButton /> */}
          </button>
        </div>
      </div>

      <div className="">
        <Stage
          ref={stageRef}
          width={window.innerWidth}
          height={window.innerHeight}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <Layer>
            {/* <Rect
              width={50}
              height={50}
              x={100}
              y={100}
              fill={fillColor}
              stroke="1"
              draggable
              onDragStart={() => {
                setisDragAble(true);
              }}
              onDragEnd={() => {
                setisDragAble(false);
              }}
              onMouseEnter={() => {
                setfillColor("#ff0000");
              }}
              onMouseLeave={() => {
                setfillColor("#ffffff");
              }}
            /> */}

            {/* <Circle
              x={200}
              y={200}
              radius={50}
              fill="#ff0000"
              draggable
              onDragStart={() => {
                setisDragAble(true);
              }}
              onDragEnd={() => {
                setisDragAble(false);
              }}
            /> */}

            {rectangles.map((rectangle) => (
              <Rect
                key={rectangle.id}
                x={rectangle.x}
                y={rectangle.y}
                stroke="1"
                fill={rectangle.fillColor}
                height={rectangle.height}
                width={rectangle.width}
                draggable={isDraggable}
                // onMouseEnter={}
                onClick={onClick}
                handleDelete={handleDelete(rectangle.id)}
              />
            ))}
            <Transformer ref={transformerRef} />
          </Layer>
        </Stage>
      </div>

      <div>
        <div>
          <button onClick={() => setOpenPanel(true)}>Open</button>
        </div>
        <SlidingPanel type={"left"} isOpen={openPanel} size={30}>
          <div>
            <div>My Panel Content</div>
            <button onClick={() => setOpenPanel(false)}>close</button>
          </div>
        </SlidingPanel>
      </div>
    </>
  );
}

export default App;
