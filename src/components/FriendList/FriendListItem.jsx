import PropTypes from "prop-types";
import { Item, Status, Title } from "./FriendListItem.styled";
export const FriendListItem = ({isOnline, avatar, name}) => {
   
    return <Item>
    <Status isOnline={isOnline}></Status>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <Title>{name}</Title>
  </Item>
}
FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};