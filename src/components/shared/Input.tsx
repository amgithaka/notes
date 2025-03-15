import { InputTypes } from '@_types/components/shared';

export default function Input({
  id,
  label,
  type,
  value,
  placeholder,
}: InputTypes.Props) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
