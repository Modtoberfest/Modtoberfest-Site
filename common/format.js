export function removeProtocol(url) {
  return url.replace(/(^\w+:|^)\/\//, "");
}
