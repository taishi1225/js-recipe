const three = function(number)
{
  for(let i=0; i<=number; i++)
  {
    h = String(i)
    if( h.indexOf('3') != -1)
    {
      console.log(i + `!!!!!!`)
    }
    else
    {
      console.log(i)
    }
  }
}
//数字を文字列に変換して、その中に3という文字列があるかどうかを判別。だけど、これは習った範囲外なので、反則...