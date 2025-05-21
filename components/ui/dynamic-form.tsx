import React from 'react';
import InputField from "@/components/ui/input-field";
import TextAreaField from "@/components/ui/text-area-field";

type Field = {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'email' | 'number' | 'password' | 'textarea' | 'checkbox' | 'radio' | 'select';
  placeholder?: string;
  options?: { label: string; value: string, id: string }[];
};

type DynamicFormProps = {
  fields: Field[];
  value: Record<string, any>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | object) => void;
};

const DynamicForm: React.FC<DynamicFormProps> = ({fields, value, onChange}) => {
  return (
    <form>
      {fields.map((field) => (
        <div key={field.name} style={{marginBottom: '1rem'}}>
          {(() => {
            switch (field.type) {
              case 'textarea':
                return (
                  <TextAreaField id={field.id}
                                 name={field.name}
                                 label={field.label}
                                 placeholder={field.placeholder}
                                 value={value[field.name] || ''}
                                 onChange={onChange}/>
                );
              case 'checkbox':
                return (
                  <InputField type="checkbox"
                              id={field.id}
                              name={field.name}
                              checked={!!value[field.name]}
                              label={field.label}
                              value={""}
                              onChange={(e) =>
                                onChange({
                                  ...e,
                                  target: {
                                    ...e.target,
                                    value: e.target.checked,
                                    name: field.name,
                                  },
                                })
                              }
                  />
                );
              case 'radio':
                return (
                  <div>
                    {field.options?.map((opt) => (
                      <InputField id={opt.id}
                                  name={field.name}
                                  label={opt.label}
                                  value={opt.value}
                                  checked={value[field.name] === opt.value}
                                  onChange={onChange}
                      />
                    ))}
                  </div>
                )
                  ;
              case 'select':
                return (
                  <select name={field.name} value={value[field.name] || ''} onChange={onChange}>
                    <option value="">Selecione</option>
                    {field.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                );
              default:
                return (
                  <InputField id={field.id}
                              type={field.type}
                              label={field.label}
                              name={field.name}
                              placeholder={field.placeholder}
                              value={value[field.name] || ''}
                              onChange={onChange}/>
                );
            }
          })()}
        </div>
      ))}
    </form>
  );
};

export default DynamicForm;
