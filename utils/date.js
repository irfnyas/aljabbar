import {
  differenceInCalendarMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  formatISO,
  getDay,
  getWeekOfMonth,
  startOfMonth,
  startOfWeek
} from 'date-fns'

export function format (date, options) {
  return new Date(date).toLocaleDateString('id-ID', options)
}

export function formatISODate (date) {
  return formatISO(new Date(date), { representation: 'date' })
}

export function monthsDifference (current, previous = new Date()) {
  return differenceInCalendarMonths(new Date(current), new Date(previous))
}

export function getDayOfWeek (date) {
  return getDay(new Date(date))
}

export function getFirstDayOfWeek (date = new Date(), weekStartOn = 1) {
  return startOfWeek(new Date(date), { weekStartsOn: weekStartOn })
}

export function getLastDayOfWeek (date = new Date(), weekStartOn = 1) {
  return endOfWeek(new Date(date), { weekStartsOn: weekStartOn })
}

export function getFirstDayOfMonth (date = new Date()) {
  return startOfMonth(new Date(date))
}

export function getLastDayOfMonth (date = new Date()) {
  return endOfMonth(new Date(date))
}

export function getCurrentWeek (date = new Date(), weekStartOn = 1) {
  return getWeekOfMonth(new Date(date), { weekStartsOn: weekStartOn })
}

export function getEachDay ({ start, end }) {
  return eachDayOfInterval({ start: new Date(start), end: new Date(end) })
}

export function getHoursAndMinutes (date) {
  const time = new Date(date)
  const hour = time.getUTCHours()
  const minute = `${time.getUTCMinutes()<10 ? '0' : ''}${time.getUTCMinutes()}`
  return `${hour}.${minute}`
}

export function getMinutesDifferenceFromNow (date) {
  let comparedTime = new Date(date)
  const hour = comparedTime.getUTCHours()
  const minute = comparedTime.getUTCMinutes()
  comparedTime = hour * 60 + minute 

  let now = new Date()
  const currentHour = now.getHours()
  const currentMinutes = now.getMinutes()
  now = currentHour * 60 + currentMinutes

  return (comparedTime - now)
}
