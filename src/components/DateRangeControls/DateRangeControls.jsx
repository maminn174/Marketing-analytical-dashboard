const DateRangeControls = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onDateClick,
}) => {
  return (
    <div className="upload">
      <input
        type="date"
        value={startDate ?? ""}
        onChange={(event) => onStartDateChange(event.target.value || null)}
      />

      <input
        type="date"
        value={endDate ?? ""}
        onChange={(event) => onEndDateChange(event.target.value || null)}
      />

      <button type="button" onClick={() => onDateClick("2026-06-20")}>
        20.06.2026
      </button>

      <button type="button" onClick={() => onDateClick("2026-06-21")}>
        21.06.2026
      </button>

      <button type="button" onClick={() => onDateClick("2026-06-22")}>
        22.06.2026
      </button>
    </div>
  )
}

export default DateRangeControls
