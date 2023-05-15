import noAvatar from 'assets/noAvatar.png';
import { Card } from './UsersCard.styled';
import { useEffect, useState } from 'react';
import Button from 'components/Buttons/Button/Button';
import { getLocalFollow, setLocalFollow } from 'services/Local/local';

export const UserCard = ({ userInfo }) => {
  const [follow, setFollow] = useState(false);

  const { id, avatar, followers, tweets } = userInfo;

  useEffect(() => {
    const isFollowNow = getLocalFollow().some(obj => obj.id === id);
    isFollowNow ? setFollow(true) : setFollow(false);
  }, [id]);

  const handleFollow = () => {
    setFollow(!follow);
    if (follow === false) {
      setLocalFollow([...getLocalFollow(), { ...userInfo, isFollow: true }]);
    } else {
      setLocalFollow(getLocalFollow().filter(obj => obj.id !== id));
    }
  };

  const sumFollowersAndFollow = (followers + follow).toLocaleString('en-US');

  return (
    <Card>
      <span className="logo" />
      <span className="tweet" />
      <span className="line" />
      <img className="avatar" src={avatar || noAvatar} alt="avatar" />
      <span className="circle" />
      <p className="tweets"> {tweets} TWEETS</p>
      <p className="followers">{sumFollowersAndFollow} FOLLOWERS</p>
      <Button type="button" onClick={handleFollow} data-isfollow={follow}>
        {follow ? 'FOLLOWING' : 'FOLLOW'}
      </Button>
    </Card>
  );
};
