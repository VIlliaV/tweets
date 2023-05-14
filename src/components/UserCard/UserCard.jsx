import noAvatar from 'assets/noAvatar.png';
import { Card } from './UsersCard.styled';
import { useEffect, useRef, useState } from 'react';
import Button from 'components/Buttons/Button/Button';

export const UserCard = ({ userInfo }) => {
  const { id, avatar, followers, tweets } = userInfo;
  const [follow, setFollow] = useState(false);
  const [followData, setFollowData] = useState([]);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      const test = JSON.parse(localStorage.getItem(`isFollowing`));
      setFollowData(test || []);
    } else {
      localStorage.setItem(`isFollowing`, JSON.stringify(followData));
    }
  }, [followData]);

  useEffect(() => {
    const isFollowNow = followData.some(obj => obj.id === id);
    isFollowNow ? setFollow(true) : setFollow(false);
  }, [followData, id]);

  const handleFollow = () => {
    setFollow(!follow);
    const local = JSON.parse(localStorage.getItem(`isFollowing`)) || [];
    setFollowData(JSON.parse(localStorage.getItem(`isFollowing`)) || []);
    if (follow === false) {
      setFollowData(prevState => [
        ...prevState,
        { ...userInfo, isFollow: true },
      ]);
    } else {
      const deleteFollow = local.filter(obj => obj.id !== id);
      setFollowData(deleteFollow);
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
