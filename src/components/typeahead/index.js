import {Component, Dom} from '../..';
import template from './template';
import styles from './styles';

const {find, show, hide} = Dom;

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

  onFocus() {
    show(find(this.domElement, '.js-values'));
  }

  onFocusLost() {
    hide(find(this.domElement, '.js-values')); 
  }

  get events() {
    return {
      keyup: {
        target: 'js-search-input',
        action: this.onSearchChange
      },
      focusin: {
        target: 'js-search-input',
        action: this.onFocus
      },
      focusout: {
        target: 'js-search-input',
        action: this.onFocusLost
      }
    };
  }
}