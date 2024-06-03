export const formatCartItems = (cartItems) => {
    const formattedCart = [];
    cartItems.forEach((item) => {
      const existingItem = formattedCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        formattedCart.push({ ...item, quantity: 1 });
      }
    });
    return formattedCart;
  };
  
  export const calculateTotalPrice = (cartContent) => {
    let total = 0;
    cartContent.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  