

function arduinoOpen(){
  console.log('Arduino connected');
}

/*
MsgType -> 1 Byte

CASE 0 (CLP Register/Identification):
  reference -> 32 bytes (SHA-256)
  version -> 3 bytes (256.256.256 - semantic versioning)
*/

const msgCode=Object.freeze({
  IDENTIFICATION: 0
});

function arduinoMessage(data, isBinary){
  console.log(data);

  if(!isBinary){
    console.log(`NOT BINARY! Received from arduino: ${data}`);
    this.send('Not binary received');
    return;
  }

  console.log('Received binary from Arduino: ');
  console.log(data);
  
  this.send('Binary received!');
}

function arduinoClose(){
  console.log('Arduino graceful disconnect');
}

module.exports = {arduinoOpen, arduinoMessage, arduinoClose};