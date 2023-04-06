import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Image,
  Info,
  Name,
  Stats,
  StatItem,
  StatLabel,
  StatQuantity
} from './Profile.styled';
export const Profile = ({ user: { username, location, tag, avatar, stats: { followers, views, likes } } }) => {
  return (
    <Card>
      <Description>
        <Image src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>
      <Stats>
        <StatItem>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{followers}</StatQuantity>
        </StatItem>
        <li>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{views}</StatQuantity>
        </li>
        <li>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{likes}</StatQuantity>
        </li>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

