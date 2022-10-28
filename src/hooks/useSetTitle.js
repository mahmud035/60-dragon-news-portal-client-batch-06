import { useEffect } from 'react';

const useSetTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Dragon News`;
  }, [title]);
};

export default useSetTitle;
