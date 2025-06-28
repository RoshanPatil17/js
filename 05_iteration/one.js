//for 

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
        console.log("5 is the best number");
    }
    console.log(element);
    
}

for (let j = 0; j <=20; j++) {
    console.log(`outer loop value: ${j}`);
    for (let k = 0; k <=20; k++) {
        // console.log(`Inner loop value:${k}`);
        console.log(j + '*'+ k + '=' + j*k );
        
    }
}

//break & continue
// for (let i = 1; i <=20; i++) {
//     if (i==15) {
//         console.log("15 is detected");
//         break;
//     }
//     console.log(`value of i:${i}`);  
// }
//continue 
for (let i = 1; i <=20; i++) {
    if (i==15) {
        console.log("15 is detected");
        continue;
    }
    console.log(`value of i:${i}`);  
}

