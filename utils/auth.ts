export const getToken = () => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        return token;
    }
    return null;
};

export const isLoggedIn = () => {
    return !!getToken();
};