export default (data = {values: []}) => {
  const options = data.values.map(v => `<option value="${v}">${v}</option>`).join('');

  return `
    <select>${options}</select>
  `;
};