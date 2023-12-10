

const api_url = "https://api.openbrewerydb.org/v1/breweries";

module.exports = brewery = async (req, res, next) => {
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

// const single_url = "https://api.openbrewerydb.org/v1/breweries/{obdb-id}";
// module.exports = singleBrewery = async (req, res, next) => {
//   try {
//     const getSingleBrewery = async (single_url) => {
//       const response = await fetch(single_url);
//       const data = await response.json();
//       return res.status(200).json(data);
//     };
//     getSingleBrewery(single_url);
//   } catch (err) {
//     next(err);
//   }
// };