// Promise で setTimeOut を返すプラグイン
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export default (context, inject) => {  
  inject('delay', delay)
}