const Utils = {
    API_URL:
        process.env.NODE_ENV == "development"
            ? "http://localhost:8080/api"
            : "https://takealeap.onrender.com/api",
};
export default Utils;
