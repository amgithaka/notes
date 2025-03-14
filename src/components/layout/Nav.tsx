import { NavTypes } from '@_types/components/layout';
import { NavMenu } from '@components/shared';
import { NavStyles } from '@styles/layout';

export default function Nav({ children }: NavTypes.Props) {
  return (
    <nav className={NavStyles.Nav}>
      <div className={NavStyles.Large}>{children}</div>
      <div className={NavStyles.Small}>
        <NavMenu>{children}</NavMenu>
      </div>
    </nav>
  );
}
