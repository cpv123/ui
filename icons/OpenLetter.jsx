import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'

export default function OpenLetter ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      focusable='false'
      className={classNames('illustration', 'big', color, className)}
      viewBox='0 0 100 100'
      height='100px'
      width='100px'
      {...props}>
      <g
        className={classNames('illustration__fill')}
        transform='translate(19, 22)'>
        <path
          d='M5.469,54 C4.33,54 3.332,53.44 2.7,52.6 L28.3,37.065 C29.93,35.99 32.034,36 33.684,37.136 L58.9,53.046 C58.286,53.63 57.453,54 56.532,54 L5.47,54 Z M25.87,4.56 C28.885,2.349 33.068,2.385 36.078,4.678 L59.4,20.835 L49.586,29.472 L49.5857,22.213 C49.586,19.957 47.75,18.12 45.494,18.12 L16.504,18.12 C14.25,18.12 12.418,19.956 12.414,22.21 L12.414,29.572 L2.638,21.063 L25.87,4.56 Z M22.417,38.29 C22.403,38.28 22.397,38.26 22.381,38.246 L14.414,31.312 L14.414,22.21 C14.414,21.06 15.352,20.12 16.504,20.12 L45.494,20.12 C46.648,20.12 47.586,21.06 47.586,22.213 L47.586,31.233 L39.615,38.25 C39.558,38.3 39.523,38.367 39.479,38.427 L34.788,35.465 C32.493,33.896 29.514,33.865 27.2247,35.376 L22.417,38.293 Z M2,50.53 L2,23.158 L20.638,39.376 L2.018,50.675 C2.013,50.626 2,50.58 2,50.531 L2,50.531 Z M60,50.531 C60,50.8 59.97,51.059 59.903,51.311 L41.208,39.516 L60,22.972 L60,50.531 Z M62,20.835 C62,20.79 62,20.746 62,20.7 C62,20.62 62,20.544 61.95,20.467 C61.94,20.446 61.93,20.427 61.93,20.407 C61.86,20.213 61.75,20.031 61.57,19.905 L37.258,3.06 C33.577,0.261 28.41,0.214 24.7,2.94 L0.825,19.898 C0.359,19.983 0,20.372 0,20.862 L0,50.531 C0,53.547 2.453,56 5.47,56 L56.532,56 C59.547,56 62,53.547 62,50.531 L62,20.862 C62,20.853 62,20.845 62,20.835 L62,20.835 Z' />
        <path
          d='M42.345,26 C42.345,25.45 41.9,25 41.345,25 L20.656,25 C20.103,25 19.656,25.45 19.656,26 C19.656,26.55 20.103,27 20.656,27 L41.345,27 C41.898,27 42.345,26.55 42.345,26' />
      </g>
    </svg>
  )
}

OpenLetter.defaultProps = {
  color: 'blue',
  styles: {}
}

OpenLetter.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
