import React, { Component } from 'react';
import ExampleEcosystem from '../ecosystems/ExampleEcosystem';
import styles from './styles/ExampleEnvironment.scss';

export default class ExampleEnvironment extends Component {
  render() {
    return (
      <div className={styles.flexContainer}>
        <ExampleEcosystem />
        <ExampleEcosystem />
      </div>
    );
  }
}