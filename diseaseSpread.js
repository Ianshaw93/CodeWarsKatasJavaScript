function epidemic(tm, n, s0, i0, b, a) {
    let sArray = []; // set up arrays for params
    let iArray = [];
    let rArray = [];
    let dt = tm/n;
    let r0 = 0;
    // push s0, i0 and r0 to appropriate arrays
    sArray.push(s0);
    iArray.push(i0);
    rArray.push(r0);
    console.log(sArray)
    // call functions for S, I and R & loop
    for (let k=0; k<tm; k++) {
        sArray.push(sArray[k] - dt * b * sArray[k] * iArray[k]);
        iArray.push(iArray[k] + dt * (b * sArray[k] * iArray[k] - a * iArray[k]));
        rArray.push(rArray[k] + dt * iArray[k] * a);
    }
    console.log("sArray: ", sArray);
    console.log("iArray", iArray);
    console.log("rArray", rArray);
    // return max I
    // console.log(Math.max(...iArray));
    console.log(iArray.reduce((a,b)=> a+b,0)); // sum


    return Math.max(...iArray);
    // return max number of infected
  };

  epidemic(14, 336, 996, 2, 0.00206, 0.41);