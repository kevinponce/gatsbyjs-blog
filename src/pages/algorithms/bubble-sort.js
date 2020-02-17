import React, { Component } from 'react';
import Loadable from '@loadable/component';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
const BubbleSort = Loadable(() => import('../../components/algorithms/bubbleSort'))

class BubbleSortApp extends Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Kevin Ponce Bubble Sort"
             description="Personal blog documenting fun facts, projects and things I have learned"
        />
        <div>
          <h1>Bubble Sort</h1>
          <BubbleSort />
        </div>
      </Layout>
    )
  }
}

export default BubbleSortApp;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
