navigator.serviceWorker.addEventListener("message", (event) => {
  location.replace("https://blobeblocker.geometrytip.site/launch.html?domain=" + event.data.url);
});
