import page from "//unpkg.com/page/page.mjs";

const searchResult = (ctx, next) => {
  $("#app").append(`
     <h1 id="container-center">Search Result</h1>
     <div id="mapid"></div>
    `);
  const mymap = L.map("mapid").setView([51.505, -0.09], 13);
};

export default searchResult;
