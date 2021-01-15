const display = document.getElementById("display")
const button = document.getElementById("button")
const reset = document.getElementById("reset")
const rap = document.getElementById("rap")

let count = 0

const countUp = function(){
  count += 1
  display.textContent = count/100
}

let id = null

button.onclick = function(){
  if(id === null){
    id =setInterval(countUp, 10)
    button.textContent = "stop"
  }
  else{
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}

rap.onclick = function(){
  display2.textContent = `ラップ：${count / 100}`
}

reset.onclick = function(){
  count = 0
  display.textContent = count
  display2.textContent = "ラップ："
}
//何回もラップを記録できるようにしたい！！配列使ってできるのかな？
