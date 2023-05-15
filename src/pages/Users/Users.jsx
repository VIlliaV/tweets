import { fetchUsers } from 'services/API/APIUsers';
import { UserCard } from 'components/UserCard/UserCard';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Container } from './Users.styled';
import SideMenu from 'components/SideMenu/SideMenu';
import Button from 'components/Buttons/Button/Button';
import { getLocalFollow, setLocalFollow } from 'services/Local/local';

const PAGINATION = 3;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [cardOnPage, setCardOnPage] = useState(PAGINATION);
  const [filter, setFilter] = useState(users);
  const firstRender = useRef(true);

  if (!getLocalFollow()) setLocalFollow([]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      fetchUsers()
        .then(response => {
          const results = response;
          if (!results.length)
            throw new Error('немає ні одного юзера на сервері');
          setUsers(results);
          setFilter(results);
        })
        .catch(error => {
          toast.error(`${error.message}`);
        });
    }
  }, []);

  const isLoadMore = filter?.length > cardOnPage && cardOnPage < filter?.length;

  const filterIsFollow = option => {
    setCardOnPage(PAGINATION);
    switch (option.label) {
      case 'all':
        setFilter(users);
        break;

      case 'follow':
        const filterFollow = users.filter(
          user => !getLocalFollow()?.find(data => data.id === user.id)
        );
        setFilter(filterFollow);
        break;

      case 'following':
        const filterFollowing = users.filter(user =>
          getLocalFollow()?.find(data => data.id === user.id)
        );
        setFilter(filterFollowing);
        break;

      default:
        break;
    }
  };

  return (
    <Container>
      <SideMenu choice={filterIsFollow} />
      <div className="users_cards">
        <ul>
          {filter?.slice(0, cardOnPage).map(user => (
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
