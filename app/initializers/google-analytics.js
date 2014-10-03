export default {
  name: 'google-analytics',

  initialize: function(container, app) {
    app.Router.reopen({
      notifyGoogleAnalytics: function() {
        return ga('send', 'pageview', {
            'page': this.get('url'),
            'title': this.get('url')
          });
      }.on('didTransition')
    });
  }
};
