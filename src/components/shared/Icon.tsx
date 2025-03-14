import { IconTypes } from '@_types/components/shared';
import { IconStyles } from '@styles/shared';
import Image from 'next/image';

export default function Icon({
  name,
  alt,
  width,
  height,
  styles,
}: IconTypes.Props) {
  return (
    <Image
      src={`/icons/dark/${name}`}
      alt={alt}
      width={width}
      height={height}
      className={[IconStyles.Icon, styles].join(' ')}
    />
  );
}
