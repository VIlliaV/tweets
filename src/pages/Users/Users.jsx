import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

import { PAGINATION, OPTIONS_FOLLOWER } from 'constants';
import {
  changeLocalFollow,
  fetchUsers,
  getLocalFollow,
  smoothScroll,
} from 'services';

import { UserCard } from 'components/UserCard/UserCard';
import SideMenu from 'components/SideMenu/SideMenu';
import Button from 'components/Buttons/Button/Button';

import { Container } from './Users.styled';
import { Loader } from 'components/Loader/Loader';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [pending, setPending] = useState(true);
  const [cardOnPage, setCardOnPage] = useState(PAGINATION);
  const [filter, setFilter] = useState(users);

  const firstRender = useRef(true);
  const optionFilter = useRef(OPTIONS_FOLLOWER[0].label);

  useEffect(() => {
    if (firstRender.current) {
      changeLocalFollow([]);
      firstRender.current = false;
      fetchUsers()
        .then(response => {
          const results = response;
          if (!results.length)
            throw new Error('there is no user on the server');
          setUsers(results);
          setFilter(results);
        })
        .catch(error => {
          toast.error(`${error.message}`);
        })
        .finally(setPending(false));
    }
  }, []);

  useEffect(() => {
    smoothScroll(600);
  }, [cardOnPage]);

  const isLoadMore = filter?.length > cardOnPage && cardOnPage < filter?.length;

  const filterIsFollow = option => {
    if (optionFilter.current !== option) setCardOnPage(PAGINATION);
    optionFilter.current = option;

    switch (option.label) {
      case OPTIONS_FOLLOWER[0].label:
        setFilter(users);
        break;

      case OPTIONS_FOLLOWER[1].label:
        const filterFollow = users.filter(
          user => !getLocalFollow()?.find(data => data.id === user.id)
        );
        setFilter(filterFollow);
        break;

      case OPTIONS_FOLLOWER[2].label:
        const filterFollowing = users.filter(user =>
          getLocalFollow()?.find(data => data.id === user.id)
        );
        setFilter(filterFollowing);
        break;

      default:
        break;
    }
  };

  const rerenderPageForFilter = () => {
    if (optionFilter.current.label === OPTIONS_FOLLOWER[0].label) return;
    filterIsFollow(optionFilter.current);
  };

  return (
    <Container>
      <SideMenu choice={filterIsFollow} />

      <div className="users_cards">
        {pending ? (
          <Loader />
        ) : (
          <>
            <ul>
              {filter?.slice(0, cardOnPage).map(user => (
                <UserCard
                  key={user.id}
                  userInfo={user}
                  rerender={rerenderPageForFilter}
                />
              ))}
            </ul>
            {isLoadMore && (
              <Button onClick={() => setCardOnPage(cardOnPage + PAGINATION)}>
                LOAD MORE
              </Button>
            )}
          </>
        )}
      </div>
    </Container>
  );
};

export default Users;
