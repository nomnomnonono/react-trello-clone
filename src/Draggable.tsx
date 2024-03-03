import { useDraggable } from "@dnd-kit/core";

type DraggableProps = {
  id: string;
  children: React.ReactNode;
};

const Draggable = (props: DraggableProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });

  return (
    <button
      ref={setNodeRef}
      style={{
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
        fontWeight: transform ? "bold" : undefined,
        width: "100%",
        textAlign: "left",
        border: "1px solid gray",
        boxShadow: "0 0 2px 0 black",
        borderRadius: "5px",
        padding: "10px",
        inlineSize: "100%",
        overflowWrap: "break-word",
      }}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </button>
  );
};

export default Draggable;
