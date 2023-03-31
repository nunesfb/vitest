import React from 'react';
import PropTypes from 'prop-types';

function PostCard (props) {
  const { name, description, date  } = props;

  return (
    <div className='post-card-content'>
      <p>{name}</p>
      <p>{description}</p>
      <p>{date}</p>
    </div>
  );
}

PostCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default PostCard;
