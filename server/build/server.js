import express from "express";
const app = express();
app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Paulo' },
        { id: 2, name: 'Ricardo' },
        { id: 3, name: 'Cruz' },
    ]);
});
app.listen(3333);
