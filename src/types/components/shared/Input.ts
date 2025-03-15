export namespace Input {
  export interface Props {
    id?: string;
    label?: string;
    type: 'email' | 'password' | 'textarea';
    value?: string;
    placeholder?: string;
  }
}
