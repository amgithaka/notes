import { View } from '@components/layout';
import { Form, Input } from '@components/shared';
import { NoteStyles } from '@styles/view';

export default function Note() {
  return (
    <View
      id='note'
      styles={NoteStyles.Note}
    >
      <Form>
        <Input
          type='text'
          placeholder='Title'
        />
        <Input
          textarea
          placeholder='Start taking notes ...'
        />
        <Input
          type='submit'
          value='Save'
        />
      </Form>
    </View>
  );
}
