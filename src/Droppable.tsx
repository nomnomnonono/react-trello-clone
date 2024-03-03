import { useDroppable } from "@dnd-kit/core";

type DroppableProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

const Droppable = (props: DroppableProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "calc((896px - 50px) / 3)",
    gap: "10px",
    border: "2px solid black",
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: isOver ? "lightgreen" : "white",
  };

  return (
    <div ref={setNodeRef} style={style}>
      <h2 className="text-2xl">{props.title}</h2>
      {props.children}
    </div>
  );
};

export default Droppable;
