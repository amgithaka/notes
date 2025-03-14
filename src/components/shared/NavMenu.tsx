import { NavMenuTypes } from '@_types/components/shared';
import { NavMenuStyles } from '@styles/shared';

export default function NavMenu({ children }: NavMenuTypes.Props) {
  return (
    <div className={NavMenuStyles.NavMenu}>
      <div className={NavMenuStyles.Head}></div>
      <div className={NavMenuStyles.Body}>{children}</div>
    </div>
  );
}
