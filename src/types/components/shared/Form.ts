import { ReactNode } from 'react';

export namespace Form {
  export interface Props {
    children: ReactNode;
    method: (event: React.FormEvent<HTMLFormElement>) => void;
  }
}
