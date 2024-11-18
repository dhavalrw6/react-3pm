import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../data/productsData";

const initialState = {
    products: productData,
    cart: [],
    netTotal: 0,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            let index = state.cart.findIndex((item) => item.id === action.payload.id);

            if (index == -1) {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            else {
                state.cart[index].quantity++;
            }
        },
        removeToCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        incProduct: (state, action) => {
            state.cart[action.payload].quantity++;
        },
        decProduct: (state, action) => {
            if (state.cart[action.payload].quantity > 1) {
                state.cart[action.payload].quantity--;
            } else {
                state.cart.splice(action.payload, 1);
            }
        },
        getNetTotal:(state,action)=>{
            let total = 0;
            let netTotal=0;
            state.cart.map((item,index)=>{
                total =  item.price * item.quantity;
                netTotal+=total
            })
            state.netTotal = netTotal;
        }
    }
})

export const { addToCart, removeToCart, incProduct, decProduct, getNetTotal } = productSlice.actions;

export default productSlice.reducer;