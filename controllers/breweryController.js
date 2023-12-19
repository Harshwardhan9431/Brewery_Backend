const reviewModel = require("./../models/reviewModel");
module.exports.brewery = async (req, res, next) => {
  const api_url = "https://api.openbrewerydb.org/v1/breweries";
  try {
    const getBrewery = async (api_url) => {
      const response = await fetch(api_url);
      const data = await response.json();
      // console.log(data);
      return res.status(200).json(data);
    };
    getBrewery(api_url);
  } catch (err) {
    next(err);
  }
};

module.exports.singleBrewery = async (req, res, next) => {
  try {
    const { brewery_id, username, rating, comment } = req.body;
    // console.log("body", req.body);
    const singleApi = `https://api.openbrewerydb.org/v1/breweries/${brewery_id}`;
    const getBrewery = async (url) => {
      if (username && rating && comment) {
        const newReview = await reviewModel.create({
          brewery_id,
          username,
          rating,
          comment,
        });
      }
      const reviews = await reviewModel.find({ brewery_id });
      // console.log(("reviews", reviews));
      const response = await fetch(url);
      const brewery = await response.json();
      if (reviews) {
        return res.status(200).json({ brewery, reviews });
      }
      return res.status(200).json({ brewery });
    };
    getBrewery(singleApi);
  } catch (err) {
    next(err);
  }
};

module.exports.randomBrewery = async (req, res, next) => {
  const api = "https://api.openbrewerydb.org/v1/breweries/random";
  try {
    const getRandomBrewery = async (api) => {
      const response = await fetch(api);
      // console.log("Random", response);
      const data = await response.json();
      console.log("data", data);
      [brewery] = data;
      // console.log("brewery", this.brewery);
      const {id} = brewery;
      // console.log("id", id);
      brewery_id = id;
      const reviews = await reviewModel.find({ brewery_id });
      return res.status(200).json({brewery, reviews});
    };
    getRandomBrewery(api);
  } catch (err) {
    next(err);
  }
};


module.exports.searchBrewery = async (req, res, next) => {
  try{
    const { searchQuery } = req.body;
    const searchApi = `https://api.openbrewerydb.org/v1/breweries/search?query=${searchQuery}`;
    const getBrewery = async (searchApi)=>{
      const response = await fetch(searchApi);
      const data = await response.json();
      console.log("data", data);
      return res.status(200).json(data);
    }
    getBrewery(searchApi);

  } catch(err){
    next(err);
  }
}
