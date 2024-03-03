import { useDroppable } from "@dnd-kit/core";
import { useState } from "react";
import { useRef } from "react";
import Draggable from "./Draggable.tsx";
import type { Task } from "./App";

type DroppableProps = {
  id: "todo" | "doing" | "done";
  title: string;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const Droppable = (props: DroppableProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const [task, setTask] = useState<string>("");
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task) return;

    props.setTasks([
      ...props.tasks,
      { id: String(Date.now()), task: task, tag: props.id },
    ]);
    setTask("");
    inputRef.current?.focus();
  };

  const myTasks = props.tasks.filter((t) => t.tag === props.id);

  return (
    <div
      ref={setNodeRef}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "calc((896px - 50px) / 3)",
        gap: "10px",
        border: "2px solid black",
        padding: "15px",
        borderRadius: "10px",
        opacity: isOver ? 0.5 : 1,
      }}
    >
      <h2 className="text-2xl mb-5">{props.title}</h2>

      {myTasks.map((t: Task) => (
        <Draggable key={t.id} id={t.id}>
          <div className="">{t.task}</div>
        </Draggable>
      ))}

      <form className="pt-5 flex w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          ref={inputRef}
          className="border border-black rounded-md flex-1 px-2"
        />
        <button className="text-xl font-bold px-2 py-0.5 ml-2">+</button>
      </form>
    </div>
  );
};

export default Droppable;
