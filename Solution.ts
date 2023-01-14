function intToRoman(num: number): string {
    // array to store the numbers
    let values: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    // array to store the corresponding Roman numerals
    let romanVals: string[] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    //initializing the result string
    let res: string = '';
    /*
      Next, we iterate through all values, to update our base from arabic to roman.
      ie if num > 1000 -> we subtract 1000, and append "M" num/1000 amount of times.
    */
    for(let i = 0; i < values.length; i++)
    {
        while(num >= values[i]){
            num -= values[i];
            //append the corresponding roman numeral to the result string
            res += romanVals[i];
        }
    }
    //return the final result string
    return res;

};
