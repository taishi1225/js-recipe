let count = 0

const countUp = function(){
 count += 1
 if(count %3 === 0){
   console.log(`${count}!!!!!!`)
 }else{
   console.log(count)
 }
}

const fuck = function(){
    id = setInterval(countUp, 1000)
}