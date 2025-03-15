import { Header, Main } from '@components/layout';
import { Button, NavItem } from '@components/shared';
import { Note } from '@components/view';

export default function Landing() {
  return (
    <>
      <Header>
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
        <Button
          href=''
          name='Export'
        />
      </Header>
      <Main>
        <Note />
      </Main>
    </>
  );
}
