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
    this.addEvents();
  }

  addEvents() {
    if (!this.events) return;

    Object.keys(this.events).forEach(eventName => {
      const action = this.events[eventName];

      this.domElement.addEventListener(eventName, action);
    });
  }

  detachedCallback() {
    //TODO: clear events?
  }
}