// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request, presetsIndex, newPresetArray) => {

  let returnArray = [];

  switch (request) {
    case 'GET':
      return returnArray = !presets[presetsIndex] ? [404]: [200, presets[presetsIndex]];
      break;
    case 'PUT':
      return returnArray = !presets[presetsIndex] ? [404]: (
        presets[presetsIndex] = newPresetArray,
        [200, presets[presetsIndex]]);
      break;
    default:
      return [400];
      break;
  }


};

//console.log(presetHandler('PUT',3));

/*
- a function named `presetHandler`. This function will be called from within your server to get an existing preset or create/update a preset.
  - `presetHandler` takes up to three arguments. The first argument is a string representing the request type: `'GET'` or `'PUT'`. The second argument is the array index of the `presets` array. For `'PUT'` requests, a third argument, `newPresetArray` will also be passed in, representing the new drum preset array to save at that index.
  - `presetHandler` should return an array. This array will have one or two elements depending on how it is called. If `presetHandler` is called with an invalid `index`, it should return an array with `404` as the first element, meaning that that array index is <a href="https://en.wikipedia.org/wiki/HTTP_404" target="_blank">Not Found</a>. If `index` is valid, the first element of the return array should be `200`, meaning the request was <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200" target="_blank">OK</a>.
  - If `presetHandler` is called a method that is not `'GET'` or `'PUT'`, it should return an array with `400` as the first element, meaning that it was a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400" target="_blank">Bad Request</a>.
  - If the index was valid, `presetHandler` should also return a second element in the array. for `'GET'` requests, that element should be the preset array at that array index. For `'PUT'` requests, it should save the `newPresetArray` to that index and then also return it as the second element.
*/


// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
