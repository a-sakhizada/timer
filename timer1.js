//Implement an alarm clock / timer which will beep after a specified amount of time has passed. 
//The user can specify an unlimited number of alarms using command line arguments


//console.log('myArgs: ', process.argv.slice(2));

const timer = function(times) {

    for(let second of process.argv.slice(2))
    {

        if(second >= 0 && !isNaN(second))
        {
            second = second * 1000;
            setTimeout(() => {
                console.log(" * ");
            }, second);
        }
    }
}
timer(process.argv.slice(2));

// process.stdin.on('data', (key) => {
//     process.stdout.write('.');
//   });
  
//   console.log('after callback');