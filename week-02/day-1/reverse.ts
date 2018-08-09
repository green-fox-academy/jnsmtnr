// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let numList: number[] = [3,4,5,6,7];
numList.reverse();
console.log(numList);

let numList2: number[] = [3,4,5,6,7];
let tempList: number[] = [];
for (let i:number = 0; i < numList2.length; i++) {
    tempList[i] = numList2 [numList2.length-i-1];
}
numList2 = tempList;
console.log(numList2);