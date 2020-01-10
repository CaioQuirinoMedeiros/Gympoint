import { format, parseISO } from 'date-fns'
import { pt } from 'date-fns/locale'

export const formatDate = date => {
  return format(parseISO(date), "d 'de' MMMM 'de' yyyy", { locale: pt })
}
