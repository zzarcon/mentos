import {Component} from '../..';
import template from './template';

export class Typeahead extends Component {
  initialState() {
    return template();
  }

  update(data) {
    this.domElement.innerHTML = template(data);
  }

  //Will handle data additions
  addElements() {

  }

  onClick() {

  }

  onMouseover(el, evt) {
    this.trigger('hover');
  }

  get events() {
    return {
      //TODO: support this syntax
      // click: {
      //   target: '',
      //   action: this.onClick
      // },
      mouseover: this.onMouseover
    };
  }
}