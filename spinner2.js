let arr = ['\r|   ','\r/   ','\r-   ', '\r/   \n'];


for (var i = 0; i < arr.length; i++) {
  loopChar(arr[i]) 
  
  function loopChar(arr) {
    setTimeout(function() {
  process.stdout.write(arr);
}, i * 600)
}
};

