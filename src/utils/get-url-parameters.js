const fixUrl = (url) => url.replace(/%3A/g, ':').replace(/%2F/g, '/');


export const getUrlParameters = () => {
  const parameters = {};

  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (match, key, value) => {
    if (key === 'photo_url') {
      parameters[key] = fixUrl(value);
    } else {
      parameters[key] = value;
    }
  });

  return parameters;
};
