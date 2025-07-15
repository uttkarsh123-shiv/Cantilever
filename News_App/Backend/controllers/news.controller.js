const axios = require('axios');

const getNews = async (req, res) => {
  try {
    const { category, q } = req.query;

    // NewsAPI
    let newsApiUrl = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.NEWS_API_KEY}&country=in`;
    if (category) newsApiUrl += `&category=${category}`;
    if (q) newsApiUrl += `&q=${q}`;

    // NY Times API
    let nyTimesUrl = `https://api.nytimes.com/svc/topstories/v2/${category || 'home'}.json?api-key=${process.env.NYT_API_KEY}`;

    // Call both in parallel
    const [newsApiRes, nyTimesRes] = await Promise.all([
      axios.get(newsApiUrl),
      axios.get(nyTimesUrl)
    ]);

    res.json({
      newsapi: newsApiRes.data.articles,
      nytimes: nyTimesRes.data.results
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Failed to fetch news' });
  }
};

module.exports = { getNews };



    // if(q) newsApiUrl += `&q=${encodeURIComponent(q)}`;
