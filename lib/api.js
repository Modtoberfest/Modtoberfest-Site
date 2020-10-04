export async function fetchJson(endpoint, options = {}) {
  const res = await fetch(`${process.env.API_HOST}/api/${endpoint}`, options);

  const json = await res.json();

  return json;
}
