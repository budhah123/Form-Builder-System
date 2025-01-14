import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FormLibrary from "./components/FormLibrary";
import FormCanvas from "./components/FormCanvas";
import FormPreview from "./components/FormPreview";

const App = () => {
  const [formElements, setFormElements] = useState([]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        {/* Library */}
        <div>
          <h3>Form Components</h3>
          <FormLibrary />
        </div>

        {/* Form Builder */}
        <div style={{ flex: 1 }}>
          <FormCanvas formElements={formElements} setFormElements={setFormElements} />
        </div>

        {/* Preview */}
        <div style={{ flex: 1 }}>
          <FormPreview formElements={formElements} />
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
