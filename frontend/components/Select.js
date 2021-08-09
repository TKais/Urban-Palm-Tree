function Select(props) {
  console.log(typeof props.options);
  return (
    <select name={props.name} onChange={props.handleChange}>
      {props.options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}

export default Select;
