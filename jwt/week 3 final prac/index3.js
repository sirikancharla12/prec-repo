const express = require("express");
const zod = require("zod");
const app = express();

const querySchema = z.object({
    q: z.number().positive()
});

app.use(express.json());

function discount(req, res, next) {
    const { q: price } = req.query;

    const result = querySchema.safeParse({ q: price });
    if (!result.success) {
        return res.status(400).json({ error: "Invalid price value" });
    }

    if (result.data.q > 100) {
        res.json("Discount applied");
    } else {
        res.json("Sorry, discount is only on a min bill of 100");
    }
}

app.get("/q", discount);

app.listen(3005, () => {
    console.log("Server is running on port 3005");
});
