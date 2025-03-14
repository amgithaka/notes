import { Icon } from '@components/shared';
import { LogoStyles } from '@styles/shared';

export default function Logo() {
  return (
    <Icon
      name='logo.svg'
      alt='Notes logo'
      width={32}
      height={32}
      styles={LogoStyles.Logo}
    />
  );
}
