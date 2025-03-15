import { ViewTypes } from '@_types/components/layout';
import { ViewStyles } from '@styles/layout';

export default function View({ id, children, styles }: ViewTypes.Props) {
  return (
    <section
      id={id}
      className={[ViewStyles.View, styles].join(' ')}
    >
      {children}
    </section>
  );
}
