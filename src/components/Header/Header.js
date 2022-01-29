import { DownloadButton, TrashButton } from './NavButtons';
import { Nav, StyledHeader } from './Header.styled';
import { Logo } from './Logo.styled';
import { LogoContainer } from '../shared/Container.styled';
import logoImg from '../../assets/logo.svg';

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <LogoContainer>
          <Logo src={logoImg} alt="cv-builder-logo" draggable="false" />
        </LogoContainer>
        <Nav>
          <div>
            <TrashButton />
            <DownloadButton />
          </div>
        </Nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
