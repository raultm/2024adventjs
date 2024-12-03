export const organizeInventory = (inventory) => {
    const organized = {};

  for (const { category, name, quantity } of inventory) {
    const categoryObj = organized[category] ||= {};
    categoryObj[name] = (categoryObj[name] || 0) + quantity;
  }

  return organized;
  }