export const getUniqueOptions = (data, fieldName, allLabel) => {
  return [allLabel, ...new Set(data.map((item) => item[fieldName]))]
}