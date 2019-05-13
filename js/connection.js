let tStart = null;
let tEnd = null;
let image = new Image();
let counter = 0;
let arrTimes = [];
let abortFallback = false;

export default function checkConnectivity(timeToCount = 3, threshold = 3000, offlineTimeout = 3000) {
  if (navigator.onLine) {
    changeConnectivity(true);
  } else {
    setTimeout(() => {
      changeConnectivity(false);
    }, offlineTimeout);
  }

  window.addEventListener('online', e => {
    changeConnectivity(true);
  });
  window.addEventListener('offline', e => {
    setTimeout(() => {
      changeConnectivity(false);
    }, offlineTimeout);
  });

  timeoutFallback(threshold);
  checkLatency(timeToCount, offlineTimeout, avg => handleLatency(avg, threshold));
  setInterval(() => {
    reset();
    timeoutFallback(threshold);
    checkLatency(timeToCount, offlineTimeout,  avg => handleLatency(avg, threshold));
  }, 6000);

}

function checkLatency(timeToCount, offlineTimeout, cb) {
  tStart = new Date().getTime();
  if (counter < timeToCount) {
    image.src = "https://www.google.com/images/phd/px.gif?t=" + tStart;
    image.onload = function(e) {
      abortFallback = true;
      tEnd = new Date().getTime();
      let time = tEnd - tStart;
      arrTimes.push(time);
      counter++;
      checkLatency(timeToCount, offlineTimeout, cb);
    };
    image.onerror = function() {
      setTimeout(() => {
        changeConnectivity(false);
      }, offlineTimeout);
    };
  } else {
    const sum = arrTimes.reduce((a, b) => a + b);
    const avg = sum / arrTimes.length;
    cb(avg);
  }
}

function handleLatency(avg, threshold) {
  console.log(avg);
  const isConnectedFast = avg <= threshold;
  if (!isConnectedFast) return changeConnectivity(false);
  changeConnectivity(true);
}

function reset() {
  arrTimes  = [];
  counter = 0;
}

function changeConnectivity(state) {
  const event = new CustomEvent('connection-changed', {
    detail: state
  });

  document.dispatchEvent(event);
}

function timeoutFallback(threshold) {
  setTimeout(() => {
    if (!abortFallback) {
      console.log("Connectivity is too slow, falling back offline experience :'(");
      changeConnectivity(false);
    }
  }, threshold + 1);
}