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
          <span
            className={`${css.status} ${
              friend.isOnline ? css.online : css.offline
            }`}
          >
            {friend.isOnline}
          </span>
          <p className="name">{friend.name}</p>
        </div>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
