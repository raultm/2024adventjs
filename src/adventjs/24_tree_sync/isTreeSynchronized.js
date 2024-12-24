export const isTreesSynchronized = (tree1, tree2) => {
    const reverseTree = (tree) => {
        if(!tree) return null
        let reversedTree = {value: tree.value}
        if(tree.right){  
            reversedTree.left = reverseTree(tree.right)
        }
        if(tree.left){
            reversedTree.right = reverseTree(tree.left)
        }
        
        return reversedTree
    }
    const isEqual = (obj1, obj2) => {
        if (obj1 === obj2) return true; // Comparación directa para primitivos
        if (typeof obj1 !== 'object' || typeof obj2 !== 'object' 
                || obj1 === null || obj2 === null) return false;
      
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) return false;
      
        return keys1.every(key => isEqual(obj1[key], obj2[key]));
      };
    const tree2Reversed = reverseTree(tree2)
    if(!isEqual(tree1,tree2Reversed)) {
        return [false, tree1.value]
    }
    return [true, tree1.value]
}