import { createContext } from "react";

/**
 * Context is an interface / Blueprint
 * No implementation here
 */

const DataContext = createContext({
    cart: [],
    user: {},

    addProdToCart: () => {},
    removeProdFromCart: () => {},
    clearCart: () => {}
})

export default DataContext;