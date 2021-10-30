module.exports = getRandomString = () => {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let min = Math.ceil(1)
    let max = Math.floor(10)
    let length = Math.floor(Math.random() * (max - min)) + min
    var result = ''
    
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
    }
    
    return result
}