export const findMissingNumbers = (nums) => {
    return Array.from({length: Math.max(...nums)}, (_, i) => i + 1).filter(n => !nums.includes(n))
}