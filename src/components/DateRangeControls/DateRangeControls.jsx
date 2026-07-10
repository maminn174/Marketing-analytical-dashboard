import { DatePickerInput } from "@mantine/dates";
import dayjs from 'dayjs';
import 'dayjs/locale/ru'

const DateRangeControls = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {

  const value = [startDate, endDate]

  const handleRangeChange = (range) => {
    onStartDateChange(range[0])
    onEndDateChange(range[1])
  }

  const today = dayjs();

  return (
<>

  <div className="upload">
    <DatePickerInput
      placeholder="Выберите даты"
      clearable
      valueFormat="DD.MM.YYYY"
      maxDate={new Date()}
      locale="ru"
      numberOfColumns={2}
      type="range"
      value={value}
      onChange={handleRangeChange}
      allowSingleDateInRange
      presets={[
        { value: [today.format('YYYY-MM-DD'), today.format('YYYY-MM-DD')], label: 'Сегодня' },
        {
          value: [
            today.subtract(1, 'day').format('YYYY-MM-DD'),
            today.subtract(1, 'day').format('YYYY-MM-DD')
          ],
          label: 'Вчера'
        },
        {
          value: [today.subtract(7, 'day').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'За последние 7 дней',
        },
        {
          value: [today.subtract(30, 'day').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'За последние 30 дней',
        },
      ]}
      w={280}
    />
  </div>
</>
  )
}

export default DateRangeControls
