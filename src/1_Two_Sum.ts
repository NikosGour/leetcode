// // My initial solution
// function twoSum(nums: number[], target: number): number[] {

// 	for (let i = 0; i < nums.length - 1; i++) {
// 		const num_a = nums[i]!;
// 		for (let j = i+1; j < nums.length; j++) {
// 			const num_b = nums[j]!;
// 			if(num_a + num_b === target) return [i,j];
// 		}
// 	}
// 	return [];
// };

// Solution with hint : "HashMap"
function twoSum(nums: number[], target: number): number[]{
	const diffs = new Map<number, number>();
	for (let i = 0; i < nums.length; i++){
		const num:number = nums[ i ]!;
		const diff:number = target - num;

		if (diffs.has(diff)){
			return [ diffs.get(diff)!, i ];
		}

		diffs.set(num, i);
	}
	return [];
}