const CACHE_NAME = "version-1";

//Install
self.addEventListener("install", (e) =>
  console.log("Service Worker Installed!")
);

//Activate
self.addEventListener("activate", (e) => {
  console.log("Service Worker Activated!");

  //Removing redundant cache versions
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Cleared Old Caches");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

//Fetch
self.addEventListener("fetch", (e) => {
  console.log("Fetching data", e);

  e.respondWith(
    fetch(e.request)
      .then((resposnse) => {
        //Making a clone of the response
        const clonedResponse = resposnse.clone();

        //Opening the cache
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, clonedResponse);
        });

        return resposnse;
      })
      .catch((err) => {
        console.log("Error: ", err);
        caches.match(e.request).then((res) => res);
      })
  );
});
