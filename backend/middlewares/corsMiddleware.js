import cors from "cors";

const corsOptins = {
    origin:'http://localhost:5173',
    methods:["GET", "POST", "PUT", "DELETE"],
    allowedHeaders:['Content-Type', 'Authorization'],
};

export default cors(corsOptins);