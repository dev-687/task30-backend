const express = require('express');
const cors = require('cors');

// const PORT =5000;
const app=express()
app.use(cors());
app.use(express.json());



app.post('/api/store_data', async (req, res) => {
    

    try {
        return res.status(200).json(req.body);
        
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Failed to upload video' });
    }
});


/** test URL */
app.get('/',(req,res)=>{
    res.end("<h1>Base Directory</h1>")
})
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });

module.exports = app;