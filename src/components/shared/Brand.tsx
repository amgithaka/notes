import { BrandTypes } from '@_types/components/shared';
import { Logo } from '@components/shared';
import { BrandStyles } from '@styles/shared';

export default function Brand({}: BrandTypes.Props) {
  return (
    <div className={BrandStyles.Brand}>
      <Logo />
      <p>Notes</p>
    </div>
  );
}
