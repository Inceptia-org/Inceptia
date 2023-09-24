// const axios = require('axios');

// const apiKey = 'sk_test_2JnCcY27EDc5Fylf45iDIE10YukLWepDlo1e2hD21v'; // Replace with your Clerk API key

// const url = 'https://api.clerk.com/v1/users?limit=10&offset=0&order_by=-created_at';

// axios.get(url, {
//   headers: {
//     'Authorization': `Bearer ${apiKey}`
//   }
// })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('Error fetching users:', error);
//   });



const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 3001;

const apiKey = 'sk_test_2JnCcY27EDc5Fylf45iDIE10YukLWepDlo1e2hD21v';
const url = 'https://api.clerk.com/v1/users?limit=10&offset=0&order_by=-created_at';

app.use(cors()); 
app.get('/fetchUsers', async (req, res) => {
  console.log('Route accessed'); 
  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
