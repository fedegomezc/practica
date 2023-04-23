import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"

await import("dayjs/locale/es-us.js")

dayjs.locale("es-us")
dayjs.extend(relativeTime)

function humanizeDate(date) {
    const wrapperDate = dayjs(date)           //wrapper for the Date object
    const actualDateInMiliseconds = dayjs().valueOf()
    const actualYear = dayjs().year()
    const daysDiff = Math.abs(wrapperDate.diff(actualDateInMiliseconds, "days"))
    const isCurrentYear = wrapperDate.year() === actualYear

    if (!isCurrentYear) {
        return wrapperDate.format("MMMM DD, YYYY")
    } else if (daysDiff <= 30) {
        return wrapperDate.fromNow()
    } else {
        return wrapperDate.format("MMMM DD")
    }
}

console.log(humanizeDate(Date.now()))
console.log(humanizeDate(dayjs().subtract(5, "d")))
console.log(humanizeDate(dayjs().subtract(5, "days")))
console.log(humanizeDate(dayjs().subtract(60, "days")))
console.log(humanizeDate(dayjs().subtract(500, "days")))
console.log(humanizeDate(dayjs().add(300, "days")))


