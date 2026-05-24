import { apiUrl } from "@/utils/apiurl";

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
  const url = `${baseUrl}/api/v1/products/latest?limit=4`;
  const res = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
  }
  return res.json();
};

export const getTopSellingProduct = async () => {
  const baseUrl = process.env.API_BASE_URL;
  if (!baseUrl) {
    throw new Error("API_BASE_URL environment variable is not set");
  }
  const url = `${baseUrl}/api/v1/products/top-selling`;
  const res = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
  }
  return res.json();
};

export const getAllCatgoryList = async () => {
  const baseUrl = process.env.API_BASE_URL;
  if (!baseUrl) {
    throw new Error("API_BASE_URL environment variable is not set");
  }
  const url = `${baseUrl}/api/category/list`;
  const res = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
  }
  return res.json();
};

export const getOfferBanner = async () => {
  const baseUrl = process.env.API_BASE_URL;
  if (!baseUrl) {
    throw new Error("API_BASE_URL environment variable is not set");
  }
  const url = `${baseUrl}/api/v1/offer`;
  const res = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
  }
  return res.json();
};

export const getSIngleProductDetails = async (id: any) => {
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

export const getSIngleProductCategory = async (id: any) => {
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

export const getAllProducts = async ({
  page = 1,
  limit = 9,
  category = "",
  sortBy = "",
  order = "",
  minPrice = "",
  maxPrice = "",
}: any) => {
  const baseUrl = `${apiUrl}`;
  if (!baseUrl) {
    throw new Error("API_BASE_URL environment variable is not set");
  }
  const query = new URLSearchParams({
    page,
    limit,
    category,
    sortBy,
    order,
    minPrice,
    maxPrice,
  });

  const url = `${baseUrl}/api/v1/products?${query.toString()}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

export const searchProducts = async (query: string) => {
  const baseUrl = `${apiUrl}`;
  if (!baseUrl) {
    throw new Error("API_BASE_URL environment variable is not set");
  }
  const url = `${baseUrl}/api/v1/products/search?q=${query}`;
  const res = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) {
    throw new Error(`Search failed: ${res.status}`);
  }
  return res.json();
};

