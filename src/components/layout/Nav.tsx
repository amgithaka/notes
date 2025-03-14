import { NavTypes } from '@_types/components/layout';
import { NavStyles } from '@styles/layout';

export default function Nav({}: NavTypes.Props) {
  return <nav className={NavStyles.Nav}></nav>;
}
