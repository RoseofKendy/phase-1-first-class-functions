// (1) Function that receives a callback and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // (2) Function that returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function.");
    };
  }
  
  // (3) Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function.");
    };
  }
  
  // Test Cases
  receivesAFunction(() => console.log("Callback function executed!")); // Should log the message
  
  const namedFunc = returnsANamedFunction();
  namedFunc(); // Should log "I am a named function."
  
  const anonFunc = returnsAnAnonymousFunction();
  anonFunc(); // Should log "I am an anonymous function."
  