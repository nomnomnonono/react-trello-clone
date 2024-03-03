import "./App.css";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";

import Draggable from "./Draggable.tsx";
import Droppable from "./Droppable.tsx";

const App = () => {
  const [isDropped, setIsDropped] = useState(false);

  function handleDragEnd(event) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(!isDropped);
    }
  }

  return (
    <>
      <h1 className="text-left text-3xl pt-10 pl-5">Trello Clone App</h1>
      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragEnd}>
        <div className="mt-8 flex justify-between">
          <Droppable id="todo" title="TODO">
            <Draggable id="fuga1">タスク１</Draggable>
            <Draggable id="fuga11">タスク２</Draggable>
          </Droppable>
          <Droppable id="doing" title="DOING">
            <Draggable id="fuga2">
              タスク３タスク３タスク３タスク３タスク３タスク３タスク３
            </Draggable>
            <Draggable id="fuga22">タスク４</Draggable>
          </Droppable>
          <Droppable id="done" title="DONE">
            <Draggable id="fuga3">タスク４</Draggable>
            <Draggable id="fuga33">タスク５</Draggable>
          </Droppable>
        </div>
      </DndContext>
    </>
  );
};

export default App;
