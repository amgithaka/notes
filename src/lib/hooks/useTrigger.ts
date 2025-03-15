import { useState } from 'react';

export default function useTrigger() {
  const [trigger, setTrigger] = useState(false);

  const pullTrigger = () => {
    setTrigger(!trigger);
  };

  return { trigger, pullTrigger };
}
