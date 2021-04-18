const API_LINK = "https://api.quotable.io/random";

export default function getQuote(params) {
  const requestLink = getRequestLink(params);

  console.log(`Requesting quote at ${requestLink}`);

  const quoteObject = fetch(requestLink)
    .then((response) => response.json())
    .then((data) => data);

  return quoteObject;
}

function getRequestLink(params) {
  if (!params) return API_LINK;

  let link = API_LINK + "?";
  Object.keys(params).forEach((param) => {
    link += `${param}=${params[param].replace(" ", "%20")}&`;
  });

  return link.substring(0, link.length - 1);
}
