import noAvatar from 'assets/noAvatar.png';
import { Card } from './UsersCard.styled';
import { useState } from 'react';
const isFollow = [];
export const UserCard = ({ userInfo }) => {
  const { id, avatar, followers, tweets } = userInfo;
  const [follow, setFollow] = useState(false);

  const handleFollow = () => {
    setFollow(!follow);

    const test = isFollow.push({ [id]: follow });
    console.log('🚀 ~ isFollow:', isFollow);
    localStorage.setItem(`isFollowing`, JSON.stringify(test));

    // console.log('🚀 ~ test:', test);
  };

  const sumFollowersAndFollow = (followers + follow).toLocaleString('en-US');
  // const isFolowing
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
