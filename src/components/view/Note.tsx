'use client';

import { useState } from 'react';
import { View } from '@components/layout';
import { Form, Input } from '@components/shared';
import { NoteStyles } from '@styles/view';
import { useAddNote } from '@lib/hooks';

export default function Note() {
  const { addNote } = useAddNote();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  interface NoteProps {
    title: string;
    content: string;
  }

  interface FormEvent {
    preventDefault: () => void;
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    addNote(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <View
      id='note'
      styles={NoteStyles.Note}
    >
      <Form method={handleSubmit}>
        <Input
          type='text'
          placeholder='Title'
          method={(e) => setTitle(e.target.value)}
        />
        <Input
          textarea
          placeholder='Start taking notes ...'
          method={(e) => setContent(e.target.value)}
        />
        <Input
          type='submit'
          value='Save'
        />
      </Form>
    </View>
  );
}
