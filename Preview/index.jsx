import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import contains from '../lib/contains'
import defaultStyles from './styles.scss'
import childrenPropType from '../propTypes/children'

import compose from 'ramda/src/compose'
import { overridable, themeable } from '@klarna/higher-order-components'

const baseClass = 'preview'

const classes = {
  content: `${baseClass}__content`,
  link: `${baseClass}__link`,
  title: `${baseClass}__title`
}

function PreviewMain ({ className, children, customize, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames(
    baseClass,
    { 'has-link': contains(Link, children) },
    className
  )

  const dynamicStyles = customize
    ? {
      borderColor: customize.borderColor,
      borderRadius: customize.borderRadius
    } : {}

  return (
    <div
      className={cls}
      style={{...dynamicStyles}}
      {...props}
    >
      {children}
    </div>
  )
}

PreviewMain.displayName = 'Preview.Main'

PreviewMain.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object,
  customize: PropTypes.shape({
    borderColor: PropTypes.string.isRequired,
    borderRadius: PropTypes.string.isRequired
  })
}

export const Main = compose(
  themeable((customizations, {customize}) => ({
    customize: {
      borderColor: customizations.color_border,
      borderRadius: customizations.radius_border,
      ...customize
    }
  })),
  overridable(defaultStyles)
)(PreviewMain)

function PreviewContent ({children, className, customize, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  const dynamicStyles = customize
    ? {
      color: customize.textColor
    } : {}

  return (
    <div
      className={classNames(classes.content)}
      style={{...dynamicStyles}}
      {...props}
    >
      {children}
    </div>
  )
}

PreviewContent.displayName = 'Preview.Content'

PreviewContent.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object,
  customize: PropTypes.shape({
    textColor: PropTypes.string.isRequired
  })
}

export const Content = compose(
  themeable((customizations, {customize}) => ({
    customize: {
      textColor: customizations.color_text_secondary,
      ...customize
    }
  })),
  overridable(defaultStyles)
)(PreviewContent)

function PreviewTitle ({children, className, customize, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  const dynamicStyles = customize
    ? {
      color: customize.textColor
    } : {}

  return (
    <h2
      className={classNames(classes.title, className)}
      style={{...dynamicStyles}}
      {...props}
    >
      {children}
    </h2>
  )
}

PreviewTitle.displayName = 'Preview.Title'

PreviewTitle.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object,
  customize: PropTypes.shape({
    textColor: PropTypes.string.isRequired
  })
}

export const Title = compose(
  themeable((customizations, {customize}) => ({
    customize: {
      textColor: customizations.color_text,
      ...customize
    }
  })),
  overridable(defaultStyles)
)(PreviewTitle)

function PreviewLink ({children, className, customize, id, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  const ids = id
    ? {
      link: `${id}__link`
    } : {}

  const dynamicStyles = customize
    ? {
      color: customize.linkColor
    } : {}

  return (
    <div className={classNames(classes.footer)} id={id}>
      <a
        className={classNames(classes.link, className)}
        style={{...dynamicStyles}}
        id={ids.link}
        {...props}>
        {children}
      </a>
    </div>
  )
}

PreviewLink.displayName = 'Preview.Link'

PreviewLink.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object,
  customize: PropTypes.shape({
    linkColor: PropTypes.string.isRequired
  })
}

export const Link = compose(
  themeable((customizations, {customize}) => ({
    customize: {
      linkColor: customizations.color_link,
      ...customize
    }
  })),
  overridable(defaultStyles)
)(PreviewLink)
