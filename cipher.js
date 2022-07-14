
let origMsg = 'I love cryptography!'
let newMsg = ''

for (let i = 0; i< origMsg.length; i++) {
    if (origMsg[i] === 'a'){
        newMsg+= '1'
    } else if (origMsg[i] === 'e'){
        newMsg+= '8'
    }else if (origMsg[i] === 'I'){
        newMsg+= '5'
    } else if (origMsg[i] === 'o'){
        newMsg+= '7'
    }else if (origMsg[i] === 'g'){
        newMsg+= '3'
    }else if (origMsg[i] === 't'){
        newMsg+= '4'
    }else if (origMsg[i] === ' '){
        newMsg+= '2'
    }else if (origMsg[i] === 'g'){
        newMsg+= '6'
    }else if (origMsg[i] === 'r'){
        newMsg+= '0'
    } else {newMsg+=origMsg[i]}
}

console.log (newMsg)
//52l7v82c0yp47301phy!
