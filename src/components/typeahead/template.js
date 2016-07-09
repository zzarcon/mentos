export default (data = {values: []}, styles) => {
  const options = data.values.map(v => `<li>${v}</li>`).join('');

  return `
    <input type="text" class="${styles.input} js-search-input" value="${data.currentValue}"/>
    <ul class="${styles.values} js-values">${options}</ul>
  `;
};