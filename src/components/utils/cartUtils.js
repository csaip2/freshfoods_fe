export const handleQuantityChange = (product, change, setCartList) => {
  setCartList((oldCartList) => {
    const existingItem = oldCartList.find((item) => item.id === product.id);

    // If item exists and new quantity would be 0 or less, remove item
    if (existingItem && existingItem.quantity + change <= 0) {
      return oldCartList.filter((item) => item.id !== product.id);
    }

    // If item exists, update quantity
    if (existingItem) {
      return oldCartList.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + change,
              price: product.price * (item.quantity + change),
            }
          : item
      );
    }

    // If item doesn't exist, return list as-is (this shouldn't happen in this context)
    return oldCartList;
  });
};

export const addToCartItem = (product, setCartList) => {
  setCartList((oldCartList) => {
    const existingItem = oldCartList.find((item) => item.id === product.id);
    if (existingItem) {
      return oldCartList.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: product.price * (item.quantity + 1),
            }
          : item
      );
    } else {
      return [
        ...oldCartList,
        {
          id: product.id,
          name: product.name,
          quantity: 1,
          price: product.price,
        },
      ];
    }
  });
};
