const InputLabel = (props) => {
  return (
    <label className="text-sm font-medium text-brand-dark-blue" {...props}>
      {props.children}
    </label>
  )
}

export default InputLabel
