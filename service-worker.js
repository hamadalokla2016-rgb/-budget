self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("budget-app").then(cache => {
      return cache.addAll(["./", "index.html"]);
    })
  );
});
