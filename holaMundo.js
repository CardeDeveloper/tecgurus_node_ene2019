var prompt = require('prompt')

prompt.start()

prompt.get(['user', 'pass'], function(err, result){
    console.log('username: ' + result.user)
    console.log('password: '+ result.pass)
})
