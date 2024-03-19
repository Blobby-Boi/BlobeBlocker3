navigator.serviceWorker.addEventListener("message", (event) => {
  location.replace("https://tool.geometrytip.site/launch.html?domain=" + event.data.url);
});
