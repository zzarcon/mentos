import {Component} from '../..';

export class Typeahead extends Component {
  createdCallback() {
    console.log('createdCallback');
  }

  attachedCallback() {
    console.log('attachedCallback');
  }

  detachedCallback() {

  }
}