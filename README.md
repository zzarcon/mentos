# z00
> Set of curated UI elements built with web components
> Build web components today in a better way


##Components

**Component definition**

```javascript
import {Component} from 'z00';
import template from './template';
import styles from './styles';

export class awesomeInput extends Component {
  initialState() {
    const placeholderData = {
      value: 'Loading data...'
    };

    return {
      template,
      styles,
      data: placeholderData
    };
  }

  update(data) {
    this.domElement.innerHTML = template(data, this.styles);
  }
  
  get events() {
    return {
      keyup: {
        target: 'js-awesome-input',
        action: this.onTextChange
      }
    };
  }

  onTextChange(domTarget, event) {
    const name = this.data.value;
    const isValidName = name.length < 30;

    if (!isValidName) {
      this.trigger('invalidName', name);
      return;
    }

    this.trigger('textChange', name.toUpperCase());
  }
}
```

**Initial state**

Perfect for showing placeholders etc

**Properties**

* data
* root
* domElement
* styles


**Events**

Declaration...
No need to worry about if the element is in the DOM already

Custom events

  - **on**
  - **trigger**


**Custom elements**

Each time you declare a new component, z00 will automatically register them as a [Custom Element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements) and prepend the **z** letter at the begining.

This:

```javascript
import {Component} from 'z00'

class TextField extends Component {

}
```

It's converted to this:

```html
<z-text-field></z-text-field>
```

**Template**

```javascript
export default (data, styles) => {
  const value = data.value;

  return `
    <label for="awesome-input" class="${styles.label}"></label>
    <input id="awesome-input" type="text" class="${styles.input} js-awesome-input" value="${value}">
  `;
};
```

**Shadow dom**

![](http://new.tinygrab.com/e14c28c9205f9576b661f3a6fe9f8b2a6e4fe58933.png)

**Styles**

Talk about why javascript styles are better

```javascript
import StyleSheet from 'stilr';

export default StyleSheet.create({
  label: {
    borderBottom: '1px solid #ccc',
    padding: 5,
    marginRight: 10
  },
  input: {
    border: 'none',
    minWidth: 150,
    height: 50
  }
});
```

**Component usage & public api**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <z-awesome-input></z-awesome-input>
  <script>
    const awesomeInput = document.querySelector('z-awesome-input');

    fetch('/user.json').then(r => r.json()).then(response => {
      awesomeInput.setData({value: response.user.name});    
    });

    awesomeInput
      .on('invalidName', (e, userName) => {
        console.warn('Not valid userName', userName);
      })
      .on('textChange', (e, userName) => {
        saveUser(userName);
      });
  </script>
</body>
</html>
```

**z00 components**

z00 came with some well crafted elements:

* Typeahead

