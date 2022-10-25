import { FriendListItem } from './FriendListItem';
import { List } from './FriendListItem.styled';
export const FriendList = ({friends}) => {
    return <List>
        {
        friends.map(fr =>  <FriendListItem key={fr.id} {...fr} />)
          }
    </List>
}
