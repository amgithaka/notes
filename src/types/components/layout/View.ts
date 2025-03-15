import { ReactNode } from 'react';

export namespace View {
  export interface Props {
    id: string;
    children: ReactNode;
    styles?: string;
  }
}
