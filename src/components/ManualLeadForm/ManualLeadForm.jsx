import './ManualLeadForm.scss'
import {Select} from '@mantine/core'


export default () => {

  return (
    <form>
      <Select
        label="Кампания"
        placeholder="Выберите кампанию"
        data={[
          'Москва',
          'Москва - топ',
          'Санкт-Петербург',
          'Новосибирск',
          'Нижний Новгород',
          'Пермь',
        ]}
      />
    </form>
  )
}