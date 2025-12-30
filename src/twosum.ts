export function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        const sum = nums[i] + nums[i + 1];
        if (sum === target) {
            return [i, i + 1]
        }

    }

    return []
};