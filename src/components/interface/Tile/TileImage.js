import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

/**
 *
 * @visibleName Tuile horizontale ou verticale
 */
const TileImage = ({
  title,
  src,
  alt,
  className,
  ...remainingProps
}) => (
  <div
    className={classNames('fr-tile__img', className)}
    {...dataAttributes.getAll(remainingProps)}
  >
    <img
      src={src}
      title={title}
      alt={alt}
    />
  </div>
);

TileImage.defaultProps = {
  className: '',
  title: '',
};

TileImage.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  title: PropTypes.string,
  alt: PropTypes.string.isRequired,
  /**
   * Source of the image — size is fixed 80x80
   */
  src: PropTypes.string.isRequired,
};

export default TileImage;
