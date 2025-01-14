import React from "react";
import { useDrop } from "react-dnd";

const FormCanvas = ({ formElements, setFormElements }) => {
  const [, drop] = useDrop(() => ({
    accept: "FORM_ELEMENT",
    drop: (item) => setFormElements((prev) => [...prev, { ...item, id: Date.now() }]),
  }));

  return (
    <div
      ref={drop}
      style={{
        minHeight: "300px",
        border: "2px dashed #ccc",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <h3>Form Canvas</h3>
      {formElements.map((el) => (
        <div key={el.id} style={{ padding: "10px", border: "1px solid #ccc", marginBottom: "5px" }}>
          {el.label}
        </div>
      ))}
    </div>
  );
};

export default FormCanvas;
