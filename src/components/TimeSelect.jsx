import { forwardRef } from "react"

import InputErrorMessage from "./InputErrorMessage"
import InputLabel from "./InputLabel"

const TimeSelect = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlFor="time">Horário</InputLabel>

      <select
        id="time"
        className={`w-full rounded-lg border border-solid border-[#ECECEC] px-4 py-3 text-sm text-[#35383E] outline-none placeholder:text-[#9A9C9E] focus:border-[#00ADB5] focus:ring-1 focus:ring-[#00ADB5]`}
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

export default TimeSelect
