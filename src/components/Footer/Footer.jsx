import { FooterEl } from './Footer.styled';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

export const Footer = () => {
  return (
    <FooterEl>
      <p>@2023 Vasiliev Illia</p>
      <address>
        <ul>
          <li>
            <a
              target="_blank"
              rel="nofollow noreferrer"
              href="https://github.com/VIlliaV/"
            >
              <AiFillGithub /> GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noreferrer"
              href="mailto:illia.vasiliev@gmail.com"
            >
              <AiOutlineMail /> illia.vasiliev@gmail.com
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noreferrer"
              href="https://t.me/viv1102"
            >
              <BsTelegram /> @viv1102
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="nofollow noreferrer"
              href="https://api.whatsapp.com/qr/2SMQRV2Q4SRTL1?autoload=1&app_absent=0"
            >
              <BsWhatsapp /> Ілля
            </a>
          </li>
        </ul>
      </address>
    </FooterEl>
  );
};
