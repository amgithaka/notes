import { InputTypes } from '@_types/components/shared';
import { workSans } from '@fonts/dynamic';
import { InputStyles } from '@styles/shared';

export default function Input({
  id,
  label,
  type,
  value,
  placeholder,
  name,
  rows,
  cols,
  textarea,
}: InputTypes.Props) {
  return (
    <div className={textarea ? InputStyles.InputTextarea : InputStyles.Input}>
      {label && <label htmlFor={id}>{label}</label>}
      {textarea ? (
        <textarea
          className={workSans.className}
          name={name}
          rows={rows}
          cols={cols}
          id={id}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          placeholder={placeholder}
          name={name}
          className={workSans.className}
        />
      )}
    </div>
  );
}
