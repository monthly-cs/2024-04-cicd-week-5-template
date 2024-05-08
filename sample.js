function getCurrDatetime() {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, '0') // 시간을 두 자리로 만들기
  const minutes = String(now.getMinutes()).padStart(2, '0') // 분을 두 자리로 만들기
  const seconds = String(now.getSeconds()).padStart(2, '0') // 초를 두 자리로 만들기
  const milliseconds = String(now.getMilliseconds()).padStart(3, '0')[0] // 밀리초를 세 자리로 만들기
  return `${hours}:${minutes}:${seconds}.${milliseconds}`
}

console.log(
  getCurrDatetime(),
  'SIGINT handler registered. Press Ctrl+C to trigger.',
)
process.on('SIGINT', () => {
  console.log(getCurrDatetime(), 'SIGINT received')
  setTimeout(() => {
    console.log(getCurrDatetime(), 'SIGINT executed')
    process.exit(0)
  }, 3_000)
})

setInterval(() => {
  console.log(getCurrDatetime(), 'Process is running...')
}, 1_000)
