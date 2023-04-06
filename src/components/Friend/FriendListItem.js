import PropTypes from "prop-types";
import { FriendItem, Image, Name,Status } from "./Friend.styled";
export const Friend = ({ friend: { avatar, name, isOnline, id } }) => {
    return (
<FriendItem key={id}>
 <Status isOnline={isOnline} />
<Image className="avatar" src={avatar} alt="User avatar" />
<Name>{name}</Name>
</FriendItem>
  )
}

Friend.propTypes = {
friend: PropTypes.shape({
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired,
id:PropTypes.number.isRequired,
    })
}
