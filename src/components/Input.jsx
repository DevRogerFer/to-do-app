const Input = ({ label, className = "", id, ...rest }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      {label && (
        <label className="text-sm font-medium text-[#35383E]" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        className={`w-full rounded-lg border border-solid border-[#ECECEC] px-4 py-3 text-sm text-[#35383E] outline-none placeholder:text-[#9A9C9E] focus:border-[#00ADB5] focus:ring-1 focus:ring-[#00ADB5] ${className}`}
        id={id}
        {...rest}
      />
    </div>
  )
}

export default Input
