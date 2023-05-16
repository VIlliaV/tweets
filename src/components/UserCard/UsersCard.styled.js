import styled from 'styled-components';
import tweet from 'assets/tweet.png';
import logo from 'assets/Logo.png';
import circle from 'assets/circleForAvatar2.png';
import line from 'assets/lineForUserCard.png';
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,600&display=swap');
</style>;

export const Card = styled.li`
  /* flex-basis: calc((100% - 70px) / 3); */
  display: flex;
  padding-top: 28px;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 380px;
  /* height: 460px; */
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: var(--second);
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  &::before {
    position: absolute;
    content: '';
    width: 380px;
    height: 8px;
    left: 0px;
    top: 214px;
    background: var(--second);
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }

  & .logo {
    position: absolute;
    width: 76px;
    height: 22px;
    background-image: url('${logo}');
    background-size: cover;
    top: 20px;
    left: 20px;
  }
  & .tweet {
    display: inline-block;
    width: 308px;
    height: 168px;
    background-image: url('${tweet}');
    background-size: cover;
  }
  /* & .line {
    margin-top: 18px;
    display: inline-block;
    width: 380px;
    height: 8px;
    background-image: url('${line}');
    background-size: cover;
    background: var(--second);
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  } */

  /* & .circle {
    position: absolute;
    top: 178px;
    left: 150px;
    display: inline-block;
    width: 80px;
    height: 80px;
    background-image: url('${circle}');
    background-size: cover;
    overflow: hidden;
  } */
  & .avatar {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 218px;
    left: 180px;
    transform: translate(-50%, -50%);
    /* display: inline-block; */
    width: 80px;
    height: 80px;
    background: #ebd8ff;
    overflow: hidden;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
    /* border-radius: 13.1749px; */
    border-radius: 50%;
  }

  & .avatar img {
    width: 62px;
    height: 62px;
    object-fit: cover;
    border-radius: 50%;
  }
  & .tweets {
    margin-top: 88px;
    margin-bottom: 16px;
  }

  & button {
    margin-top: 26px;
    margin-bottom: 36px;
  }
`;
