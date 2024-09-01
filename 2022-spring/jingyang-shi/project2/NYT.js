let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=ukraine&sort=newest&api-key=yHFOASUNYojObNNdP0jpKCSZZa6gqaM5';
let jsonData
function preload(){
    jsonData = loadJSON(url, gotData);
}
function setup() {
    noCanvas();
    console.log(jsonData.response.docs)
}

function gotData(data) {
    let articles = data.response.docs;
    // console.log(articles)
    for (let i = 0; i < articles.length; i++) {
        createElement('h1', articles[i].headline.main);
        createP(articles[i].snippet);
    }
}