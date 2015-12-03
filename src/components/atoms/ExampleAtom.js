import React, { Component } from 'react';

import styles from './styles/ExampleAtom.scss';

export default class ExampleAtom extends Component {
  render() {
    return (
      <h1 className={`${styles.flexItem}`}>
        ✌︎
      </h1>
    );
  }
}