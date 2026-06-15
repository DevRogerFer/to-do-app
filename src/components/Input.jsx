import InputLabel from "./InputLabel"

const Input = ({ label, errorMessage, ...rest }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>

      <input
        className={`w-full rounded-lg border border-solid border-[#ECECEC] px-4 py-3 text-sm text-[#35383E] outline-none placeholder:text-[#9A9C9E] focus:border-[#00ADB5] focus:ring-1 focus:ring-[#00ADB5] ${errorMessage ? "border-red-500" : ""}`}
        {...rest}
      />
      {errorMessage && (
        <p className="mt-1 text-left text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  )
}

export default Input
