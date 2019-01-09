const fetch = require('node-fetch')

fetch('https://api.bitso.com/v3/ticker/?book=btc_mxn')
.then(res => res.json())
.then(json => {
	console.log(json.payload.last)
})
