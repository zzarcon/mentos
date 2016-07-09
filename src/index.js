export {Component} from './component';
export {default as Dom} from './dom';
import * as components from './components';

const registerComponents = (components) => {
  Object.keys(components).forEach(name => {
    const normalizedName = `z-${name.toLowerCase()}`;

    document.registerElement(normalizedName, components[name]);
  });
};

registerComponents(components);