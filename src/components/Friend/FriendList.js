import { List } from "./Friend.styled";
import PropTypes from "prop-types";
import { Friend } from "../Friend/FriendListItem";
export const FriendList = ({ friends }) => {
    return (
       <List class="friend-list">
            {
                friends.map(friend => {
                    return <li key={friend.id}>
                        <Friend friend={friend} />
                    </li>
                })
 }
</List>
    );
};

FriendList.propTypes = {
   friends: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
    })).isRequired
}