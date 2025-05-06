import React from 'react';

type Field = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'number' | 'password' | 'textarea' | 'checkbox' | 'radio' | 'select';
  placeholder?: string;
  options?: { label: string; value: string }[];
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
          <label>{field.label}</label>
          {(() => {
            switch (field.type) {
              case 'textarea':
                return (
                  <textarea
                    name={field.name}
                    placeholder={field.placeholder}
                    value={value[field.name] || ''}
                    onChange={onChange}
                  />
                );
              case 'checkbox':
                return (
                  <input
                    type="checkbox"
                    name={field.name}
                    checked={!!value[field.name]}
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
                      <label key={opt.value}>
                        <input
                          type="radio"
                          name={field.name}
                          value={opt.value}
                          checked={value[field.name] === opt.value}
                          onChange={onChange}
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                );
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
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={value[field.name] || ''}
                    onChange={onChange}
                  />
                );
            }
          })()}
        </div>
      ))}
    </form>
  );
};

export default DynamicForm;
