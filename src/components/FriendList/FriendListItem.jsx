import PropTypes from "prop-types";
export const FriendListItem = ({isOnline, avatar, name}) => {
   
    return <li className="item">
    {isOnline ? <span className="status">Online</span> : <span className="status"></span>}
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
}
FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};