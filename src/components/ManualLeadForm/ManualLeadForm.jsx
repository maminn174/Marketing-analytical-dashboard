import './ManualLeadForm.scss'
import {Select, Textarea, TextInput, Button} from '@mantine/core'
import {ALL_CAMPAIGNS} from "@/constants/dashboardFilters";
import {useState} from "react";
import {DateInput} from "@mantine/dates";
import dayjs from 'dayjs'

const typeLeads = [
  { value: 'CALL', label: 'Звонок' },
  { value: 'PHONE_CLICK', label: 'Клик на телефон' },
  { value: 'QUIZ', label: 'Квиз' },
  { value: 'FORM', label: 'Форма' },
]

const ManualLeadForm = (props) => {
  const {
    campaigns = [],
    onLeadCreated = () => {},
  } = props

  const [campaignName, setCampaignName] = useState(null)
  const [appealType, setAppealType] = useState(null)
  const [leadDate, setLeadDate] = useState(null)
  const [amoDealUrl, setAmoDealUrl] = useState('')
  const [keywordText, setKeywordText] = useState('')
  const [metrikaUrl, setMetrikaUrl] = useState('')
  const [comment, setComment] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const campaignOptions = campaigns.filter((campaign) => campaign !== ALL_CAMPAIGNS)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formattedLeadDate = dayjs(leadDate).format('YYYY-MM-DD')
    const payload = {
      leadDate: formattedLeadDate,
      campaignName,
      appealType,
      keywordText,
      metrikaUrl,
      amoDealUrl,
      comment,
    }

    setIsSubmitting(true)
    setSubmitError('')
    setSuccessMessage('')

    try {
      const response = await fetch('http://localhost:3001/api/manual-leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      const json = await response.json()

      if (!response.ok) {
        setSubmitError(json.message || 'Не удалось сохранить лид')
        return
      }
      onLeadCreated(json.lead)
      setSuccessMessage('Лид сохранен')

      setLeadDate(null)
      setCampaignName(null)
      setAppealType(null)
      setKeywordText('')
      setAmoDealUrl('')
      setMetrikaUrl('')
      setComment('')
    } catch (error) {
      console.error(error)
      setSubmitError('Не удалось сохранить лид')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <DateInput
        label="Дата лида"
        placeholder="Выберите дату"
        valueFormat="DD.MM.YYYY"
        locale="ru"
        value={leadDate}
        onChange={setLeadDate}
        required
      />
      <Select
        label="Кампания"
        placeholder="Выберите кампанию"
        data={campaignOptions}
        value={campaignName}
        onChange={setCampaignName}
        required
      />
      <Select
        label="Тип лида"
        placeholder="Выбери тип лида"
        data={typeLeads}
        value={appealType}
        onChange={setAppealType}
        required
      />
      <TextInput
        label="Ключевая фраза"
        value={keywordText}
        onChange={(event) => {
          setKeywordText(event.currentTarget.value)
        }}
      />
      <TextInput
        label="Ссылка на сделку amoCRM"
        value={amoDealUrl}
        onChange={(event) => {
          setAmoDealUrl(event.currentTarget.value)
        }}
        required
      />
      <TextInput
        label="Ссылка на Я.Метрику"
        value={metrikaUrl}
        onChange={(event) => {
          setMetrikaUrl(event.currentTarget.value)
        }}
      />
      <Textarea
        label="Комментарий"
        value={comment}
        onChange={(event) => {
          setComment(event.currentTarget.value)
        }}
      />
      <Button
        type="submit"
        loading={isSubmitting}
      >
        Сохранить
      </Button>
      {submitError && <p>{submitError}</p>}
      {successMessage && <p>{successMessage}</p>}
    </form>

  )
}

export default ManualLeadForm