export default (data = {values: []}, styles) => {
  const options = data.values.map(v => `<li>${v}</li>`).join('');

  return `
    <div class="${styles.container}"></div>
    <input type="text" class="js-search-input" />
    <ul>${options}</ul>
  `;
};