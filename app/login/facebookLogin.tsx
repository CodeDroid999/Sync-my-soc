import { useEffect } from 'react';

function FacebookLayout() {
  useEffect(() => {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : 'YOUR-APP-ID',
        cookie     : true,
        xfbml      : true,
        version    : 'vX.X'
      });

      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return null;
}

export default FacebookLayout;
