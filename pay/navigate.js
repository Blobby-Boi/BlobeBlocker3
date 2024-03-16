navigator.serviceWorker.addEventListener("message", (event) => {
  location.replace("https://us12.proxysite.com/process.php?d=" + event.data.url);
});
