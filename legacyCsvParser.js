export const parseCsv = (text) => {
  const lines = text.trim().split('\n')
  const headers = lines[0].split(',')
  const rows = lines.slice(1)

  const parsedRows = rows.map((row) => {
    const values = row.split(',')
    const object = {}
    headers.forEach((header, index) => {
      object[header] = values[index]
    })
    return object
  })
  return parsedRows
}
