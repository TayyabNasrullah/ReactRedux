const convert = require("xml-js");
export const fetchData = suggestions => {
  return {
    type: 'API_FETCH_DATA',
    suggestions
  };
};

export const apiFetchData = (value) => {
  return dispatch => {
    fetch(
      `https://www.goodreads.com/search/index.xml?key=l7qiXtcIr7A2PzHh726pBg&q=${value}`
    )
      .then(async res => {
        const value = await res.text();
        const result = convert.xml2json(value, { compact: true, spaces: 4 });
        const myObj = JSON.parse(result);
        let SearchArray = [];
        SearchArray.push(myObj);
        let temp_suggestions =
          SearchArray[0].GoodreadsResponse.search.results.work;
        dispatch(fetchData(temp_suggestions));
      })
      .catch();
    
  };
};
