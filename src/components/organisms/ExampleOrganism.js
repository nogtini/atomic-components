import React, { Component } from 'react';
import ExampleMolecule from '../molecules/ExampleMolecule';

import styles from './styles/ExampleOrganism.scss';

export default class ExampleOrganism extends Component {
  render() {
    return (
      <h1 className={`${styles.flexItem}`}>
        <ExampleMolecule />
        <ExampleMolecule />
      </h1>
    );
  }
}
