import "./App.css";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";

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
          <Droppable id="todo" title="TODO" />
          <Droppable id="doing" title="DOING" />
          <Droppable id="done" title="DONE" />
        </div>
      </DndContext>
    </>
  );
};

export default App;
