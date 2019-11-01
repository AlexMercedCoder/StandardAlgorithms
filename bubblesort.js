//////////////////////
//Bubble Sort
//by Alex Merced
//////////////////////


const bubblearray = (array) => {
    let swaps = 1;
    //Code will run until the loop runs with no swaps
    while (swaps > 0){
        //loop begins swaps is set to 0
        swaps = 0
        for (i=0;i<array.length-1;i++)
            //if subsequent value is greater then is swaps and adds to swap counter
            if (array[i]>array[i+1]){
                let holder = array[i];
                array[i] = array[i+1];
                array[i+1] = holder;
                swaps++;
            }
            //logging array to see how it mutates over each iteration
            console.log(array)
    }
    return array

}

testarray = [450, 300, 12, 9, 6];

console.log(bubblearray(testarray));
