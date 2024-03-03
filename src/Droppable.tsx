import { useDroppable } from "@dnd-kit/core";
import { useState } from "react";
import { useRef } from "react";
import Draggable from "./Draggable.tsx";

type DroppableProps = {
  id: string;
  title: string;
};

type Task = {
  id: string;
  task: string;
};

const Droppable = (props: DroppableProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>("");
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task) return;

    setTasks([...tasks, { id: String(Date.now()), task }]);
    setTask("");
    inputRef.current?.focus();
  };

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "calc((896px - 50px) / 3)",
    gap: "10px",
    border: "2px solid black",
    padding: "15px",
    borderRadius: "10px",
    opacity: isOver ? 0.7 : 1,
    textWrap: "balance",
  };

  return (
    <div ref={setNodeRef} style={style}>
      <h2 className="text-2xl mb-5">{props.title}</h2>

      {tasks.map((t: Task) => (
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
          className="border border-black rounded-md flex-1"
        />
        <button className="text-xl font-bold px-2 py-0.5 ml-2">+</button>
      </form>
    </div>
  );
};

export default Droppable;
