export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?limit=15&api_key=H2XaerwSl8VdvilTnAvfU2RQmczX9s3t&q=${encodeURI(
    category
  )}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    const {
      id,
      title,
      images: {
        downsized_medium: { url },
      },
    } = img;
    return {
      id,
      title,
      url,
    };
  });

  return gifs;
};
