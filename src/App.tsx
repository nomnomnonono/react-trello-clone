import "./App.css";
import { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import type { UniqueIdentifier } from "@dnd-kit/core";

import Droppable from "./Droppable.tsx";

export type Task = {
  id: string;
  task: string;
  tag: UniqueIdentifier; // "todo" | "doing" | "done"
};

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleDragEnd = (event: DragEndEvent) => {
    const source = event.active.id;
    const destination = event.over?.id;
    if (destination === undefined) return;

    const newTasks = tasks.map((task) => {
      if (task.id === source) {
        return { ...task, tag: destination };
      }
      return task;
    });
    setTasks(newTasks);
    console.log(tasks);
  };

  return (
    <>
      <h1 className="text-left text-3xl pt-10 pl-5">Trello Clone App</h1>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="mt-8 flex justify-between">
          <Droppable id="todo" title="TODO" tasks={tasks} setTasks={setTasks} />
          <Droppable
            id="doing"
            title="DOING"
            tasks={tasks}
            setTasks={setTasks}
          />
          <Droppable id="done" title="DONE" tasks={tasks} setTasks={setTasks} />
        </div>
      </DndContext>
    </>
  );
};

export default App;
