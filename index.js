addEventListener("fetch", (event) => {
  const response = new Response("Hello WOrld!", {
    headers: {"content-type": "application/plain"},
  });
  event.respondWith(response);
});