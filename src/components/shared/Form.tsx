import { FormTypes } from '@_types/components/shared';
import { FormStyles } from '@styles/shared';

export default function Form({ children }: FormTypes.Props) {
  return <form className={FormStyles.Form}>{children}</form>;
}
