import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ itemId, size, token }: any) => {
    const res = await fetch(`${baseUrl}/api/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ itemId, size }),
    });

    return res.json();
  }
);

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (token: string) => {
    const res = await fetch(`${baseUrl}/api/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  }
);

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async ({ productId, size, color, depth, quantity, token }: any) => {
    const res = await fetch(`${baseUrl}/api/cart/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        productId,
        size,
        color,
        depth,
        quantity,
      }),
    });

    return res.json();
  }
);

export const removeCart = createAsyncThunk(
  "cart/removeCart",
  async ({ productId, size, color, depth, token }: any) => {
    const res = await fetch(`${baseUrl}/api/cart/remove`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        productId,
        size,
        color,
        depth,
      }),
    });

    return res.json();
  }
);

export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (token: string) => {
    const res = await fetch(`${baseUrl}/api/cart/clear`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.json();
  }
);

export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async ({ orderData, token }: any) => {
    const res = await fetch(`${baseUrl}/api/v1/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(orderData),
    });

    return res.json();
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchCart.fulfilled, (state: any, action: any) => {
      state.items = action.payload?.data || [];
      state.count = action.payload?.data?.length || 0;
    });
    builder.addCase(updateCart.fulfilled, (state: any, action: any) => {
      const updatedItem = action.payload?.data;

      state.items = state.items.map((item: any) =>
        item.productId === updatedItem.productId ? updatedItem : item
      );
    });
    builder.addCase(removeCart.fulfilled, (state: any, action: any) => {
      const removed = action.meta.arg;
      state.items = state.items.filter(
        (item: any) =>
          !(
            item.productId === removed.productId &&
            item.size === removed.size
          )
      );
      state.count = state.items.length;
    });
    builder.addCase(clearCart.fulfilled, (state: any) => {
      state.items = [];
      state.count = 0;
    });
  },
});

export default cartSlice.reducer;