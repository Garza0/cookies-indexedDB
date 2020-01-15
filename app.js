const storeBtn = document.getElementById('store-btn')
const retrBtn = document.getElementById('retrieve-btn')

storeBtn.addEventListener('click', () => {
  const userId = 'u123'
  const user = { name: 'max', age: 47, hobby: ['start', 'end'] }
  document.cookie = 'uid=' + userId
  document.cookie = `user = ${JSON.stringify(user)}`
})

retrBtn.addEventListener('click', () => {
  console.log(document.cookie)
})


