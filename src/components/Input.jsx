import { forwardRef } from "react"

import InputErrorMessage from "./InputErrorMessage"
import InputLabel from "./InputLabel"

const Input = forwardRef(({ label, errorMessage, ...rest }, ref) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>

      <input
        className={`w-full rounded-lg border border-solid border-brand-border px-4 py-3 text-sm text-brand-dark-blue outline-none placeholder:text-brand-text-gray focus:border-brand-primary focus:ring-1 focus:ring-brand-primary ${errorMessage ? "border-red-500" : ""}`}
        ref={ref}
        {...rest}
      />
      {errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
    </div>
  )
})

Input.displayName = "Input"

export default Input
