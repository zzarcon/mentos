export {Component} from './component';
import * as components from './components';

const registerComponents = (components) => {
  Object.keys(components).forEach(name => {
    const normalizedName = `z-${name.toLowerCase()}`;

    document.registerElement(normalizedName, components[name]);
  });
};

registerComponents(components);