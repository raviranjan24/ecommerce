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

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const res = await fetch(`${baseUrl}/api/cart`);
  return res.json();
});

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async ({ productId, size, quantity }: any) => {
    const res = await fetch(`${baseUrl}/api/v1/cart/update`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, size, quantity }),
    });

    return res.json();
  }
);

export const removeCart = createAsyncThunk(
  "cart/removeCart",
  async ({ productId, size }: any) => {
    const res = await fetch(`${baseUrl}/api/cart/remove`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, size }),
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
  extraReducers: (builder:any) => {
    builder.addCase(fetchCart.fulfilled, (state: any, action: any) => {
      state.items = action.payload?.data || [];
      state.count = action.payload?.data?.length || 0;
    });

    builder.addCase(addToCart.fulfilled, (state: any, action: any) => {
      state.count += 1;
    });

    builder.addCase(removeCart.fulfilled, (state: any) => {
      state.count -= 1;
    });
  },
});

export default cartSlice.reducer;