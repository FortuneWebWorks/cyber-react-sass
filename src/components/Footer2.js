import '../styles/footer2.scss';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as DiscordIcon } from '../assets/images/discord.svg';
import { ReactComponent as YoutubeIcon } from '../assets/images/youtube.svg';
import { ReactComponent as TwitterIcon } from '../assets/images/twitter.svg';
import { ReactComponent as OpenSeaIcon } from '../assets/images/opensea.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__info">
          <Logo />
          <p>NFToolkit</p>
          <p>
            NFToolkit is a comperehensive analytical tool that helips you make
            wiser trading decisions
          </p>
        </div>
      </div>
      <div className="footer__copyright">
        <span>&copy; CyberDash. All rights reserved</span>

        <YoutubeIcon />
        <TwitterIcon />
        <DiscordIcon />
        <OpenSeaIcon />
      </div>
    </footer>
  );
};

export default Footer;