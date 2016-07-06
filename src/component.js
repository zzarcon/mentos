//Create/Inject 'container' somehow

export class Component extends HTMLElement {
  createdCallback() {
    const root = this.createShadowRoot(); 
    
    this.domElement = root;
    this.domElement.innerHTML = this.initialState();
  }

  //This method should render the initial state of the component
  //At this point we still don't have any data on the component,
  //so is supposed to render a loading/empty state
  initialState() {
    console.warn('No initialState defined');

    return '';
  }

  setData(data) {
    this.data = data;
    this.update(data);
  }

  attachedCallback() {
    this.addDomEvents();
  }

  addDomEvents() {
    if (!this.events) return;
    const component = this;

    Object.keys(this.events).forEach(eventName => {
      const action = this.events[eventName];

      this.domElement.addEventListener(eventName, function(e) {
        action.call(component, this, e);
      });
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