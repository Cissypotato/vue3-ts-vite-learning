//获取当前时间的一天的时间段

export const getTimePeriod = () => {
  let timePeriod = ''
  const hour = new Date().getHours()
  if (hour <= 9) {
    timePeriod = '早上'
  } else if (hour <= 11) {
    timePeriod = '上午'
  } else if (hour <= 14) {
    timePeriod = '中午'
  } else if (hour <= 18) {
    timePeriod = '下午'
  } else {
    timePeriod = '晚上'
  }
  return timePeriod
}
