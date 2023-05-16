import { useEffect, useState } from 'react';
import { getLocalFollow, changeLocalFollow } from 'services/Local/local';
import noAvatar from 'assets/noAvatar.png';
import Button from 'components/Buttons/Button/Button';

import { Card } from './UsersCard.styled';

export const UserCard = ({ userInfo, rerender }) => {
  const [follow, setFollow] = useState(false);

  const { id, avatar, followers, tweets, user } = userInfo;

  useEffect(() => {
    const isFollowNow = getLocalFollow()?.some(obj => obj.id === id);
    isFollowNow ? setFollow(true) : setFollow(false);
  }, [id]);

  const handleFollow = () => {
    setFollow(!follow);
    if (follow === false) {
      changeLocalFollow([...getLocalFollow(), { id, isFollow: true }]);
    } else {
      changeLocalFollow(getLocalFollow().filter(obj => obj.id !== id));
    }
    rerender();
  };

  const sumFollowersAndYou = (followers + follow).toLocaleString('en-US');

  return (
    <Card>
      <span className="logo" />
      <span className="tweet" />
      <div className="avatar">
        <img src={avatar || noAvatar} alt={user} width={62} height={62} />
      </div>
      <p className="tweets"> {tweets} TWEETS</p>
      <p className="followers">{sumFollowersAndYou} FOLLOWERS</p>
      <Button type="button" onClick={handleFollow} data-isfollow={follow}>
        {follow ? 'FOLLOWING' : 'FOLLOW'}
      </Button>
    </Card>
  );
};
