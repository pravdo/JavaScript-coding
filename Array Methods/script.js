const matrix = [[1,1], [1,[[[[[[1]]]]]]]];
let total = matrix.flat(Infinity).reduce((a,v) => a+v,0); // deepness level
console.log(total);
//---------------------------------------------------------------------------
const nums = [1,2,3];
const strs = ['one', 'two', 'three'];

const mapped = nums.flatMap((val, index) => [val, strs[index]]);

console.log(mapped);
//-----------------------------------------------------------------------------
const strs1 = ['t', 's', 'e', 'b'];

let best = strs.reduceRight((c,v) => c + v);

console.log(best);
//-----------------------------------------------------------------------------
const nums1 = [0,1,2,3,4,5,6,7,8,9];
nums.copyWithin(0, 3,4);

console.log(nums);