/**
 * Helper function for delayed fetch simulating abracadabra magic
 * @param url
 * @param delay - time in milliseconds
 */
const delayedFetch = async (url: string, delay = 1000): Promise<Response> => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch(url);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    }, delay);
  });
};

export default delayedFetch;
