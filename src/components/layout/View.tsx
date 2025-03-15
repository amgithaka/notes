import { ViewTypes } from '@_types/components/layout';

export default function View({ id, children }: ViewTypes.Props) {
  return <section id={id}>{children}</section>;
}
