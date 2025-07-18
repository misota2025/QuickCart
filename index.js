const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to QuickCart!</h1><p>Your cloud journey starts here.</p>');
});

app.listen(port, () => {
  console.log(`QuickCart app listening at http://localhost:${port}`);
});