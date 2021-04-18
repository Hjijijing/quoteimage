const API_LINK = "https://picsum.photos";

export default function getImage(params) {
  const requestLink = getRequestLink(params);

  console.log(`Requesting image at ${requestLink}`);

  const requestInfo = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const imageObject = fetch(requestLink, requestInfo).then(
    (response) => response
  );

  return imageObject;
}

function getRequestLink({ width = 1920, height = 1080 } = {}) {
  return `${API_LINK}/${width}/${height}`;
}
