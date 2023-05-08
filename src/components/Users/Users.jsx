import { fetchUsers } from 'api/apiUsers';
import { useEffect, useRef } from 'react';

export const Users = () => {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      fetchUsers()
        .then(response => {
          const results = response;
          if (!results.length)
            throw new Error('немає ніодного юзера на сервері');
          console.log(results);
        })
        .catch(error => {
          console.log('🚀 ~ error:', error.message);
          //   toast.error(`${error.message}`);
        });
    }
  }, []);
  return <>HOOOOOO</>;
};
