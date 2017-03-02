var youTubeURL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromAPI(searchTerm, callback) {
  var query = {
    part: 'snippet',
    key: 'AIzaSyDk2KIDQByyoogTHDytW8hJCDcLrHJwOjg',
    q: searchTerm
  }
  $.getJSON(youTubeURL, query, callback);
}

function displayYouTubeThumbnails(data) {
  var resultElement = '';
  if (data.items) {
    data.items.forEach(function(item) {
      console.log(item);
      resultElement += '<img src=' + '"' + item.snippet.thumbnails.default.url + '"' + '</img>'
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(event) {
    event.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromAPI(query, displayYouTubeThumbnails)
  });
}

$(function(){watchSubmit();});