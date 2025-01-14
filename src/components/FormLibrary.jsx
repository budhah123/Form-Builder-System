import React from "react";
import { useDrag } from "react-dnd";

const components = [
  { type: "text", label: "Text Input" },
  { type: "select", label: "Select Dropdown" },
  { type: "radio", label: "Radio Button Group" },
];

const FormLibrary = () => {
  return (
    <div>
      {components.map((component) => (
        <DraggableItem key={component.type} component={component} />
      ))}
    </div>
  );
};

const DraggableItem = React.memo(({ component }) => {
  const [, drag] = useDrag(() => ({
    type: "FORM_ELEMENT",
    item: component,
  }));

  return (
    <div ref={drag} style={{ padding: "10px", border: "1px solid #ccc", marginBottom: "5px" }}>
      {component.label}
    </div>
  );
});

export default FormLibrary;
