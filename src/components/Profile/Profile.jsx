import PropTypes from 'prop-types';
import css from './Profile.module.css';
import { FaUserAlt, FaTelegramPlane, FaMapMarkerAlt } from 'react-icons/fa';

const Profile = ({ username, tag, location, stats, avatar }) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.text}>
        <FaUserAlt className={css.icon} />
        {username}
      </p>
      <p className={css.text}>
        <FaTelegramPlane className={css.icon} />
        {tag}
      </p>
      <p className={css.text}>
        <FaMapMarkerAlt className={css.icon} />
        {location}
      </p>
    </div>

    <ul className={css.stats}>
      <li className={css.item}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
  avatar: PropTypes.string.isRequired,
};

export default Profile;
