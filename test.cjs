const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://unsplash.com/s/photos/freightliner-truck').then(res => {
  const matches = res.data.match(/"id":"([^"]{10,20})"[^}]*?"alt_description":"([^"]+)"/g);
  if (matches) {
     matches.slice(0, 10).forEach(m => console.log(m));
  } else {
     console.log("No matches");
     const ids = res.data.match(/photo-[a-zA-Z0-9\-]+/g);
     if (ids) console.log(ids.slice(0,10));
  }
}).catch(console.error);
