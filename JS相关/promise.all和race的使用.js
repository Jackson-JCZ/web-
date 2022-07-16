let wake = (time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${time / 1000}秒后醒来`)
      }, time)
    })
  }
  
  let p1 = wake(3000)
  let p2 = wake(2000)
  
  Promise.all([p1, p2]).then((result) => {
    console.log(result)       // [ '3秒后醒来', '2秒后醒来' ]
  }).catch((error) => {
    console.log(error)
  })