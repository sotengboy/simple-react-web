import React, { Component } from 'react';

import Page from '../components/Page';
import Content from '../components/about/Content';

export default class About extends Component {
  
  render() {
    return (
      <div>
        <Page title="About Us" description='This about us page'>
          <Content/>
        </Page>
      </div>
    )
  }
}