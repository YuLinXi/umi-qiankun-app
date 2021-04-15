import { useState } from 'react';

export function useQiankunStateForSlave() {
  const [masterState, setMasterState] = useState({
    text: 'hello'
  });

  return {
    masterState,
    setMasterState,
  };
}
