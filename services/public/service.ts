// export const getCategoryList = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/category/list`, {
//         cache: "no-store", // SSR (always fresh)
//     });

//     if (!res.ok) {
//         throw new Error("Failed to fetch sliders");
//     }

//     return res.json();
// };

// services/public/service.ts

export const getSliders = async () => {
  const baseUrl = process.env.API_BASE_URL;
  if (!baseUrl) {
    throw new Error("API_BASE_URL environment variable is not set");
  }
  const url = `${baseUrl}/api/banner/list`;
  const res = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch sliders: ${res.status} ${res.statusText}`);
  }
  return res.json();
};

export const getLatesetProduct = async () => {
  const baseUrl = process.env.API_BASE_URL;
  if (!baseUrl) {
    throw new Error("API_BASE_URL environment variable is not set");
  }
  const url = `${baseUrl}/api/product/latest`;
  const res = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
  }
  return res.json();
};

export const getSIngleProductDetails = async (id:any) => {
  const baseUrl = process.env.API_BASE_URL;
  if (!baseUrl) {
    throw new Error("API_BASE_URL environment variable is not set");
  }
  const url = `${baseUrl}/api/product/single/${id}`;
  const res = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch products details: ${res.status} ${res.statusText}`);
  }
  return res.json();
};

export const getSIngleProductCategory = async (id:any) => {
  const baseUrl = process.env.API_BASE_URL;
  if (!baseUrl) {
    throw new Error("API_BASE_URL environment variable is not set");
  }
  const url = `${baseUrl}/api/product/single/${id}`;
  const res = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch products data: ${res.status} ${res.statusText}`);
  }
  return res.json();
};

// export const getAddGridBannerList = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/category/list`, {
//         cache: "no-store", // SSR (always fresh)
//     });

//     if (!res.ok) {
//         throw new Error("Failed to fetch sliders");
//     }

//     return res.json();
// };

// export const getAddSingleBannerList = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/category/list`, {
//         cache: "no-store", // SSR (always fresh)
//     });

//     if (!res.ok) {
//         throw new Error("Failed to fetch sliders");
//     }

//     return res.json();
// };

