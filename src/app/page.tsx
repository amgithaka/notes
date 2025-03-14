import { Header, Main } from '@components/layout';
import { NavItem } from '@components/shared';

export default function Landing() {
  return (
    <>
      <Header
        navItems={
          <>
            <NavItem
              href=''
              name='Landing'
              active
            />
            <NavItem
              href=''
              name='Library'
            />
            <NavItem
              href=''
              name='Bin'
            />
          </>
        }
      />
      <Main />
    </>
  );
}
