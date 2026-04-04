export const getToken = () => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        return token ? JSON.parse(token) : null;
    }
    return null;
};

export const isLoggedIn = () => {
    return !!getToken();
};