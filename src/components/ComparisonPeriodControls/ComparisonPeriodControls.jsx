import {
  Popover,
  Button,
  Stack,
  PopoverTarget,
  PopoverDropdown
} from "@mantine/core";
import {useState} from "react";
import {DatePicker} from "@mantine/dates";
const ComparisonPeriodControls = ({onPresetSelect, onReset, onCustomRangeSelect}) => {
  const [opened, setOpened] = useState(false)
  const [showCustomRange, setShowCustomRange] = useState(false)
  const [customRange, setCustomRange] = useState([null, null])
  const handlePresetClick = (preset) => {
    onPresetSelect(preset)
    setOpened(false)
    setShowCustomRange(false)
  }

  const handleCustomRangeChange = (range) => {
    setCustomRange(range)

    const [start, end] = range

    if (start && end) {
      onCustomRangeSelect(start, end)
      setOpened(false)
      setShowCustomRange(false)
    }
  }


  return (
      <Popover opened={opened} onChange={setOpened}>
        <PopoverTarget>
          <Button onClick={() => setOpened((current) => !current)}>
            Сравнение
          </Button>
        </PopoverTarget>
        <PopoverDropdown>
          <Stack>
            <Button onClick={() => handlePresetClick('previous-equal')}>
              Предыдущий равный период
            </Button>
            <Button onClick={() => handlePresetClick('previous-month')}>
              Предыдущий месяц
            </Button>
            <Button onClick={() => handlePresetClick('previous-year')}>
              Предыдущий год
            </Button>
            <Button onClick={() => setShowCustomRange(true)}>
              Произвольный период
            </Button>
            {showCustomRange && (
              <DatePicker
                locale="ru"
                numberOfColumns={2}
                type="range"
                allowSingleDateInRange
                value={customRange}
                onChange={setCustomRange}
              />
            )}

            <Button onClick={() => {
              onReset()
              setOpened(false)
              setShowCustomRange(false)
            }}>
              Сбросить сравнение
            </Button>
          </Stack>
        </PopoverDropdown>
      </Popover>
  )
}

export default ComparisonPeriodControls