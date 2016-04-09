
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
    var NYTimesURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + location + "&fl=headline,lead_paragraph,web_url";
    $.getJSON(NYTimesURL, function(data){
        data.docs.forEach(function(elm) {
            var headline = elm.headline.main;
            var lead_paragraph = elm.lead_paragraph;
            var url = elm.web_url;
            var anchor = '<a href="' + url + '">' + headline + '</a>';
            var paragraph = '<p>' + lead_paragraph + '</p>';
            var item = '<li class="article"'> + anchor + paragraph + '</li>';
            $nytElem.append(item);

        });
    });

    return false;
};

$('#form-container').submit(loadData);
