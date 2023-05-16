import noAvatar from 'assets/noAvatar.png';
import { Card } from './UsersCard.styled';
import { useEffect, useState } from 'react';
import Button from 'components/Buttons/Button/Button';
import { getLocalFollow, changeLocalFollow } from 'services/Local/local';

export const UserCard = ({ userInfo, rerender }) => {
  const [follow, setFollow] = useState(false);

  const { id, avatar, followers, tweets } = userInfo;

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

  const sumFollowersAndFollow = (followers + follow).toLocaleString('en-US');

  return (
    <Card>
      <span className="logo" />
      <span className="tweet" />
      {/* <span className="line" /> */}
      <div className="avatar">
        <img src={avatar || noAvatar} alt="avatar" width={62} height={62} />
      </div>

      {/* <span className="circle" /> */}
      <p className="tweets"> {tweets} TWEETS</p>
      <p className="followers">{sumFollowersAndFollow} FOLLOWERS</p>
      <Button type="button" onClick={handleFollow} data-isfollow={follow}>
        {follow ? 'FOLLOWING' : 'FOLLOW'}
      </Button>
    </Card>
  );
};
