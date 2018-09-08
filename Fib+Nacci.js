function fib() {
    // Some variables here
    let oldNum = 0;
    let newNum = 1;

    function nacci() {
      // do something to those variables here
      const temp = oldNum;

      console.log(newNum);
      oldNum = newNum;
      newNum = oldNum + temp;

    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"
  