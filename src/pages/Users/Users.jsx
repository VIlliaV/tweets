import { fetchUsers } from 'api/apiUsers';
import { UserCard } from 'components/UserCard/UserCard';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Container } from './Users.styled';
import SideMenu from 'components/SideMenu/SideMenu';
import Button from 'components/Buttons/Button/Button';

const PAGINATION = 3;

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
      <SideMenu />
      <div className="users_cards">
        <ul>
          {users.slice(0, cardOnPage).map(user => (
            <UserCard key={user.id} userInfo={user} />
          ))}
        </ul>
        {isLoadMore && (
          <Button onClick={() => setCardOnPage(cardOnPage + 3)}>
            LOAD MORE
          </Button>
        )}
      </div>
    </Container>
  );
};

export default Users;
