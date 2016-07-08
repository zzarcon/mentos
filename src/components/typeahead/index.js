import {Component} from '../..';
import template from './template';
import styles from './styles';

export class Typeahead extends Component {
  initialState() {
    return {
      styles,
      template
    };
  }

  update(data) {
    //TODO: Just update needed data
    this.domElement.innerHTML = template(data, this.styles);
  }

  //Will handle data additions
  addElements() {

  }

  onClick() {
    console.log('onClick')
  }

  onSearchChange() {
    console.log('onSearchChange')
  }

  get events() {
    return {
      keyup: {
        target: 'js-search-input',
        action: this.onSearchChange
      }
    };
  }
}