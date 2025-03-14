import { ButtonTypes } from '@_types/components/shared';
import { ButtonStyles } from '@styles/shared';
import Link from 'next/link';

export default function Button({ href, name }: ButtonTypes.Props) {
  return (
    <Link
      className={ButtonStyles.Button}
      href={href}
    >
      {name}
    </Link>
  );
}
