import React, { useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

const FormPreview = ({ formElements }) => {
  const { handleSubmit, control } = useForm();

  // Validation Schema using Zod
  const schema = useMemo(
    () =>
      z.object(
        formElements.reduce((acc, el) => {
          acc[el.id] = z.string().nonempty(`${el.label} is required`);
          return acc;
        }, {})
      ),
    [formElements]
  );

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <h3>Preview Mode</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formElements.map((el) => (
          <div key={el.id} style={{ marginBottom: "10px" }}>
            {el.type === "text" && (
              <Controller
                name={el.id.toString()}
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} placeholder={el.label} />}
              />
            )}
            {el.type === "select" && (
              <Controller
                name={el.id.toString()}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <select {...field}>
                    <option value="">Select an option</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                  </select>
                )}
              />
            )}
            {el.type === "radio" && (
              <Controller
                name={el.id.toString()}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <div>
                    <label>
                      <input {...field} type="radio" value="Yes" /> Yes
                    </label>
                    <label>
                      <input {...field} type="radio" value="No" /> No
                    </label>
                  </div>
                )}
              />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPreview;
