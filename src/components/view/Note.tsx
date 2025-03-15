'use client';

import { useState } from 'react';
import { View } from '@components/layout';
import { Form, Input } from '@components/shared';
import { NoteStyles } from '@styles/view';
import { useAddNote } from '@lib/hooks';
import { useRouter } from 'next/navigation';

export default function Note() {
  const { addNote, message } = useAddNote();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

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

    if (message?.ok) {
      router.refresh();
    }
  };

  return (
    <View
      id='note'
      styles={NoteStyles.Note}
    >
      <p>{message?.message}</p>
      <Form method={handleSubmit}>
        <Input
          type='text'
          placeholder='Title'
          method={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Input
          textarea
          placeholder='Start taking notes ...'
          method={(e) => setContent(e.target.value)}
          value={content}
        />
        <Input
          type='submit'
          value='Save'
        />
      </Form>
    </View>
  );
}
