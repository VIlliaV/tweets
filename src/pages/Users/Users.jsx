import { fetchUsers } from 'api/apiUsers';
import { UserCard } from 'components/UserCard/UserCard';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Container } from './Users.styled';

const PAGINATION = 3;
// import { List } from './Users.styled';
const Users = () => {
  const [users, setUsers] = useState([]);
  const [cardOnPage, setCardOnPage] = useState(PAGINATION);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      fetchUsers()
        .then(response => {
          const results = response;
          if (!results.length)
            throw new Error('немає ні одного юзера на сервері');
          setUsers(results);
        })
        .catch(error => {
          toast.error(`${error.message}`);
        });
    }
  }, []);

  const isLoadMore = cardOnPage < users.length;

  return (
    <Container>
      <ul>
        {users.slice(0, cardOnPage).map(user => (
          <UserCard key={user.id} userInfo={user} />
        ))}
      </ul>
      {isLoadMore && (
        <button onClick={() => setCardOnPage(cardOnPage + 3)}>LOAD MORE</button>
      )}
    </Container>
  );
};

export default Users;
