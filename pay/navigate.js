navigator.serviceWorker.addEventListener("message", (event) => {
  location.replace("https://blobbypass.geometrytip.site/launch.html?domain=" + event.data.url);
});
