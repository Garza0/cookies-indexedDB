const storeBtn = document.getElementById('store-btn')
const retrBtn = document.getElementById('retrieve-btn')

const dbRequest = indexedDB.open('StorageMy', 1)

dbRequest.onupgradeneeded = function (event) {
  const db = event.target.result

  const objStore = db.createObjectStore('products', { keyPath: 'id' })

  objStore.transaction.oncomlete = function (event) {
    const productStore = db
      .transaction('products', 'readwrite')
      .objectStore('products')
    productStore.add({ id: 'p1', title: 'how how' })
  }
}


dbRequest.onsuccess = function (event) {
  const db = event.target.result

  const objStore = db.createObjectStore('products', { keyPath: 'id' })

  objStore.transaction.oncomlete = function (event) {
    const productStore = db
      .transaction('products', 'readwrite')
      .objectStore('products')
    productStore.add({ id: 'p1', title: 'how how' })
  }
}
dbRequest.onerror = function (event) {
  console.log('ERROR')
}

storeBtn.addEventListener('click', () => {
  const db = event.target.result
  const productStore = db
    .transaction('products', 'readwrite')
    .objectStore('products')
  productStore.add({
    id: 'p2',
    title: 'Seconsd  how how',
    price: 29.99
  })
})

retrBtn.addEventListener('click', () => {
  console.log(document.cookie)
})

