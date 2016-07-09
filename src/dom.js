const show = element => element.style.display = 'block';
const hide = element => element.style.display = 'none';
const isVisible = element => element.style.display === 'block';
const isHidden = element => !isVisible(element);
const toggle = element => {
  const nextState = isVisible(element) ? 'none' : 'block';

  element.style.display = nextState;
};
const find = (element, selector) => element.querySelector(selector);

export default {
  show,
  hide,
  find,
  toggle,
  isVisible,
  isHidden
}