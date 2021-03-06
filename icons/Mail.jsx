import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'

export default function Mail ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      focusable='false'
      strokeWidth='5'
      className={classNames('illustration', 'tiny', color, className)}
      viewBox='0 0 100 100'
      height='20px'
      width='20px'
      {...props}>
      <g className={classNames('illustration__stroke')}>
        <rect x='12' y='22' width='76' height='56' rx='12' ry='12' />
        <line x1='12' y1='37' x2='51' y2='53' />
        <line x1='88' y1='37' x2='49' y2='53' />
      </g>
    </svg>
  )
}

Mail.defaultProps = {
  color: 'blue',
  styles: {}
}

Mail.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
