import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import { Provider } from 'rebass'
import theme from '../styles/theme'
import './index.css'

import styled from 'styled-components'

const Body = styled.div`
  margin: 0 auto;
  padding-top: 0;
`

const Layout = ({ children, data }) => (
  <Provider theme={theme}>
    <div>
      <Helmet title={data.site.siteMetadata.title} meta={[]} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Body>{children()}</Body>
    </div>
  </Provider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
