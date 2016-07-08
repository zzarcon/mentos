//Create/Inject 'container' somehow
import StyleSheet from 'stilr';

export class Component extends HTMLElement {
  createdCallback() {
    const root = this.createShadowRoot(); 
    const state = this.initialState();

    //TODO: ensure 'styles' and 'template' are valid
    this.styles = state.styles;
    this.template = state.template;
    this.data = state.data; //Is not mandatory to return 'initial data' from initialState method
    this.root = root;
    this.domElement = this.createDomElement();
    this.domElement.innerHTML = this.template(this.data, this.styles);
    this.root.appendChild(this.domElement);
  }

  createDomElement() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('z-dom-element');
    return wrapper;
  }

  //This method should render the initial state of the component
  //At this point we still don't have any data on the component,
  //so is supposed to render a loading/empty state
  initialState() {
    console.warn('No initialState defined');

    return {};
  }

  setData(data) {
    this.data = data;
    this.update(data);
  }

  attachedCallback() {
    this.addDomEvents();
    this.addStyles();
  }

  addStyles() {
    const styles = document.createElement('style');
    const componentStyles = StyleSheet.render();

    StyleSheet.clear();
    styles.appendChild(document.createTextNode(componentStyles));
    this.root.appendChild(styles);
  }

  addDomEvents() {
    if (!this.events) return;

    Object.keys(this.events).forEach(eventName => {
      let action = this.events[eventName];
      let target;

      if (typeof action === 'object') {
        target = action.target;
        action = action.action;
      }

      this.addEvent(eventName, target, action);
    });
  }

  addEvent(eventName, target, action) {
    const component = this;

    this.domElement.addEventListener(eventName, function(e) {
      const matchesTarget = target ? e.target.classList.contains(target) : true;
      
      matchesTarget && action.call(component, this, e);
    });
  }

  //Syntax sugar over addEventListener on the domElement
  on(eventName, handler) {
    this.domElement.addEventListener(eventName, handler);

    return this;
  }

  //Actually triggers a CustomEvent which is handled by the domElement internally
  trigger(eventName, eventOptions) {
    const event = new CustomEvent(eventName, {detail: eventOptions});

    this.domElement.dispatchEvent(event);
  }

  detachedCallback() {
    //TODO: clear events?
  }
}