import React, { Component } from 'react';
import ExampleAtom from '../atoms/ExampleAtom';

import styles from './styles/ExampleMolecule.scss';

export default class ExampleMolecule extends Component {
  render() {
    return (
      <div className={`${styles.flexItem}`}>
        <ExampleAtom />
      </div>
    );
  }
}