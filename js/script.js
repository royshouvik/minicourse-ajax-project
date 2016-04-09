
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // load background images
    var street = $('#street').val();
    var location = $('#city').val();
    var queryString = street + ', ' + location;
    var img = '<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + queryString + '">';
    // console.log(img);
    $body.append(img);

    // YOUR CODE GOES HERE!
    var apiKey = "f21d18859a8ac5580762c0b398902228:1:74961864";
    var NYTimesURL = "http://api.nytimes.com/svc/search/v2/articlesearch.response-format?api-key=" + apiKey + '"';
    $.getJSON(NYTimesURL, function(data){
        console.log(data);
    });

    return false;
};

$('#form-container').submit(loadData);
