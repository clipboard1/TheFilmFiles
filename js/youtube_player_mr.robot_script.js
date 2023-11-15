
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    width: '100%',
    height: '500',
    videoId: 'Vwp3IIlIle8', 
    playerVars: {
      autoplay: 0, 
      rel: 0, 
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

// Когда плеер готов
function onPlayerReady(event) {
  event.target.playVideo();
}

// Когда состояние плеера изменяется
function onPlayerStateChange(event) {
}