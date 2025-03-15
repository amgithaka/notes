export namespace Input {
  export interface Props {
    id?: string;
    label?: string;
    type?: 'email' | 'password' | 'submit' | 'text';
    value?: string;
    placeholder?: string;
    name?: string;
    rows?: number;
    cols?: number;
    textarea?: boolean;
  }
}
