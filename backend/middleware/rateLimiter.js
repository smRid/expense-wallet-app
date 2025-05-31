import ratelimit from "../config/upstash.js";

const ratelimiter = async (req, res, next) => {
    try {

        //here we just kept it simple
        //In a real-world app should use user ID or IP address
        const {success} = await ratelimit.limit("my-rate-limit");

        if (!success) {
            return res.status(429).json({ message: "Too many requests, please try again later." });
        }

        next(); 

    } catch (error) {
        console.log("Rate limit error:", error);
        next(error);
    }
};

export default ratelimiter;