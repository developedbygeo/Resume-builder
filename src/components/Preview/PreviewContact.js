import { Container } from '../shared/Container.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faEnvelope,
  faGlobeAmericas,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const PreviewContact = ({
  phone,
  email,
  linkedin,
  additionalDetails: { country, city, postal },
}) => {
  const additionalExists = country && city && postal;
  const renderAdditional = additionalExists && (
    <Container grid={true} gridColumns={'0.1fr 1fr'} className="wrapCont">
      <FontAwesomeIcon icon={faGlobeAmericas} />
      <p>{`${country}, ${city}, ${postal}`}</p>
    </Container>
  );

  return (
    <Container grid={true} contWidth="100%">
      <div className="headerWrapper">
        <h4>Contact</h4>
      </div>
      <Container grid={true} gridColumns={'0.1fr 1fr'} className="wrapCont">
        <FontAwesomeIcon icon={faPhoneAlt} />
        <p>{phone}</p>
      </Container>
      <Container grid={true} gridColumns={'0.1fr 1fr'} className="wrapCont">
        <FontAwesomeIcon icon={faEnvelope} />
        <p>{email}</p>
      </Container>
      <Container grid={true} gridColumns={'0.1fr 1fr'} className="wrapCont">
        <FontAwesomeIcon icon={faLinkedin} />
        <p>{linkedin}</p>
      </Container>
      {renderAdditional}
    </Container>
  );
};

export default PreviewContact;
