import PropTypes from "prop-types"
import { forwardRef } from "react"

import InputErrorMessage from "./InputErrorMessage"
import InputLabel from "./InputLabel"

const TimeSelect = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlFor="time">Horário</InputLabel>

      <select
        id="time"
        className={`w-full rounded-lg border border-solid border-brand-border px-4 py-3 text-sm text-brand-dark-blue outline-none placeholder:text-brand-text-gray focus:border-brand-primary focus:ring-1 focus:ring-brand-primary`}
        ref={ref}
        {...props}
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>

      {props.errorMessage && (
        <InputErrorMessage>{props.errorMessage}</InputErrorMessage>
      )}
    </div>
  )
})

TimeSelect.displayName = "TimeSelect"

TimeSelect.propTypes = {
  errorMessage: PropTypes.string,
}

export default TimeSelect
