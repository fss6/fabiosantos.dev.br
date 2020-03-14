import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class MainLoading extends Component {
  render() {
    return (
      <CircularProgress color="primary" />
    );
  }
}