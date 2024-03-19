navigator.serviceWorker.addEventListener("message", (event) => {
  location.replace("https://blobe.topvazgeometry.online/launch.html?domain=" + event.data.url);
});
