import { format, parseISO, addMonths as fnsAddMonths } from 'date-fns'
import { pt } from 'date-fns/locale'

export const formatDate = date => {
  return format(date, "P", { locale: pt })
}

export const formatStringDate = date => {
  return formatDate(parseISO(date))
}

export const parse = stringDate => {
  return parseISO(stringDate)
}

export const addMonths = (date, months) => {
  return fnsAddMonths(date, months)
}
