function route(path, query) {
  return System.import("./routes/" + path + "/route")
    .then(route => new route.Route(query));
}
