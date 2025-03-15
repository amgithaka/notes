import { NavMenuTypes } from '@_types/components/shared';
import { NavMenuStyles } from '@styles/shared';
import { Icon } from '@components/shared';

export default function NavMenu({ children }: NavMenuTypes.Props) {
  return (
    <div className={NavMenuStyles.NavMenu}>
      <div className={NavMenuStyles.Head}>
        <Icon
          name='close.svg'
          alt='Menu Icon'
          width={24}
          height={24}
        />
      </div>
      <div className={NavMenuStyles.Body}>{children}</div>
    </div>
  );
}
