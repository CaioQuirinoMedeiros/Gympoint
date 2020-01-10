import { format, parseISO } from 'date-fns'
import { pt } from 'date-fns/locale'

export const formatDate = date => {
  return format(date, "d 'de' MMMM 'de' yyyy", { locale: pt })
}

export const formatStringDate = date => {
  return formatDate(parseISO(date))
}
