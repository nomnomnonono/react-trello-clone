import "./App.css";
import { useState } from "react";
import { DndContext, DragOverEvent, DragEndEvent } from "@dnd-kit/core";

import Droppable from "./Droppable.tsx";

const App = () => {
  const [isDropped, setIsDropped] = useState(false);

  const handleDragEnd = (event: DragEndEvent) => {
    console.log(event);
    setIsDropped(!isDropped);
  };

  const handleDragOver = (event: DragOverEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1 className="text-left text-3xl pt-10 pl-5">Trello Clone App</h1>
      <DndContext onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
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
