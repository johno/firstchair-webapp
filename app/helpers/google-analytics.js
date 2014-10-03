import Ember from 'ember';

function googleAnalytics(value) {
    return new Handlebars.SafeString("<script type='text/javascript'>var _gaq = _gaq || [];_gaq.push(['_setAccount', '" + value + "']);(function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();</script>");
}

export { googleAnalytics };

export default Ember.Handlebars.makeBoundHelper(googleAnalytics);
