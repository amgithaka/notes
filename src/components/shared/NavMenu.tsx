'use client';

import { NavMenuTypes } from '@_types/components/shared';
import { NavMenuStyles } from '@styles/shared';
import { Icon } from '@components/shared';
import { useTrigger } from '@lib/hooks';

export default function NavMenu({ children }: NavMenuTypes.Props) {
  const { trigger, pullTrigger } = useTrigger();

  return (
    <div className={NavMenuStyles.NavMenu}>
      <div
        className={NavMenuStyles.Head}
        onClick={pullTrigger}
      >
        <Icon
          name={trigger ? 'close.svg' : 'menu.svg'}
          alt={`${trigger ? 'Close' : 'Menu'} Icon`}
          width={20}
          height={20}
        />
      </div>
      {trigger && <div className={NavMenuStyles.Body}>{children}</div>}
    </div>
  );
}
