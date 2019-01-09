const fetch = require('node-fetch')
var prompt = require('prompt')

prompt.start()

fetch('https://api.bitso.com/v3/ticker/?book=btc_mxn')
    .then(res => res.json())
    .then(json =>{
        prompt.get(['mxn'], (err,result) =>{
            console.log(result.mxn / json.payload.last)
            
        })
        
    })

