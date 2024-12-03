export const organizeInventory = (inventory) => {
    return inventory.reduce((acc, item) => {
      acc[item.category] = acc[item.category] || {};
      acc[item.category][item.name] = acc[item.category][item.name] || 0;
      acc[item.category][item.name]+= item.quantity;
      return acc;
    }, {});
  }