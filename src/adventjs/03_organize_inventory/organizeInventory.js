export const organizeInventory = (inventory) => {
    return inventory.reduce((acc, item) => {
      const category = acc[item.category] ||= {}; // Inicializa la categoría si no existe
      category[item.name] = (category[item.name] || 0) + item.quantity;
      return acc;
    }, {});
  }