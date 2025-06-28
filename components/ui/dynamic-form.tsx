import React from "react";
import UniversalField, {FieldProps} from "@/components/ui/universal-field";

// @ts-ignore
type DynamicFormProps = {
  fields: FieldProps[];
  value: Record<string, any>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | object) => void;
};

const DynamicForm: React.FC<DynamicFormProps> = ({fields, value, onChange}) => {
  return (
    <div>
      {fields.map((field) => (
        <div key={field.name} style={{marginBottom: "1rem"}}>
          <UniversalField
            {...field}
            value={value[field.name] || ""}
            checked={!!value[field.name]}
            onChange={onChange}
          />
        </div>
      ))}
    </div>
  );
};

export default DynamicForm;
