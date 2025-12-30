// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
export function twoSum1(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + nums[i + 1] === target) {
            return [i, i + 1]
        }

        for (let j = 0; j < nums.length; j++) {
            if (j === i) {
                continue
            }

            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }

    return []
};

export function twoSum2(nums: number[], target: number): number[] {
    const map = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]

        if (map.has(complement)) {
            return [map.get(complement)!, i]
        }

        map.set(nums[i], i)
    }

    return [];
};