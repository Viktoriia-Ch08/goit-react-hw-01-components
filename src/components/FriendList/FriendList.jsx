import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={css.friendsList}>
    {friends.map(friend => (
      <li className={css.item} key={friend.id}>
        <img
          className={css.avatar}
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <div className={css.wrap}>
          {friend.isOnline ? (
            <span className={css.online}>{friend.isOnline}</span>
          ) : (
            <span className={css.offline}>{friend.isOnline}</span>
          )}
          <p className="name">{friend.name}</p>
        </div>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendList;
