import noAvatar from 'assets/noAvatar.png';
import { Card } from './UsersCard.styled';
import { useEffect, useRef, useState } from 'react';

export const UserCard = ({ userInfo }) => {
  const { id, avatar, followers, tweets } = userInfo;
  const [follow, setFollow] = useState(false);
  const followData = useRef([]);
  useEffect(() => {
    followData.current = JSON.parse(localStorage.getItem(`isFollowing`)) || [];
  }, []);

  useEffect(() => {
    const isFollowNow = followData.current.some(obj => obj.id === id);
    isFollowNow ? setFollow(true) : setFollow(false);
  }, [id]);

  const handleFollow = () => {
    setFollow(!follow);
    followData.current = JSON.parse(localStorage.getItem(`isFollowing`)) || [];
    if (follow === false) {
      followData.current.push({ id, isFollow: true });
      localStorage.setItem(`isFollowing`, JSON.stringify(followData.current));
    } else {
      const deleteFollow = followData.current.filter(obj => obj.id !== id);
      localStorage.setItem(`isFollowing`, JSON.stringify(deleteFollow));
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
      <button type="button" onClick={handleFollow} data-isfollow={follow}>
        {follow ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </Card>
  );
};
