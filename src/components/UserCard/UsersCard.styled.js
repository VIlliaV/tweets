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
  display: flex;
  padding-top: 28px;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 380px;
  height: 460px;
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
  & .line {
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
  }

  & .circle {
    position: absolute;
    top: 178px;
    left: 150px;
    display: inline-block;
    width: 80px;
    height: 80px;
    background-image: url('${circle}');
    background-size: cover;
    overflow: hidden;
  }
  & .avatar {
    position: absolute;
    top: 181px;
    left: 155px;
    display: inline-block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  & .tweets {
    margin-top: 62px;
    margin-bottom: 16px;
  }
  & button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 196px;
    height: 50px;
    padding: 14px 28px;
    gap: 6px;
    margin-top: 20px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: var(--primary);
    background: var(--second);
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    &[data-isfollow='true'] {
      background: #5cd3a8;
    }
    cursor: pointer;
    :hover {
      background: var(--shadow);
    }
  }
`;
