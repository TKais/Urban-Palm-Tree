function TextInput(props) {
  return (
    <input type={props.type} onChange={props.handleChange} placeholder={props.placeholder} />
  );
}

export default TextInput;
