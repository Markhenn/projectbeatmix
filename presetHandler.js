// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request, presetsIndex, newPresetArray) => {

  if (presetsIndex > 3 || presetsIndex < 0) {
    return [404];
  }

//  if (request !== 'GET' || request !== 'PUT') {
//    return ['400'];
//  }

  switch (request) {
    case 'GET':
      return [200, presets[presetsIndex]];
      break;
    case 'PUT':
      presets[presetsIndex] = newPresetArray;
      return [200, presets[presetsIndex]];
      break;
    default:
      return [400];
      break;
  }


};



// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;

/*
In addition, you will write some server-side code to handle saving and retrieving drum machine presets in presetHandler.js:

    a function named presetHandler. This function will be called from within your server to get an existing preset or create/update a preset.
        presetHandler takes up to three arguments. The first argument is a string representing the request type: 'GET' or 'PUT'. The second argument is the array index of the presets array. For 'PUT' requests, a third argument, newPresetArray will also be passed in, representing the new drum preset array to save at that index.

        presetHandler should return an array. This array will have one or two elements depending on how it is called. If presetHandler is called with an invalid index, it should return an array with 404 as the first element, meaning that that array index is Not Found. If index is valid, the first element of the return array should be 200, meaning the request was OK.

        If presetHandler is called a method that is not 'GET' or 'PUT', it should return an array with 400 as the first element, meaning that it was a Bad Request.

        If the index was valid, presetHandler should also return a second element in the array. for 'GET' requests, that element should be the preset array at that array index. For 'PUT' requests, it should save the newPresetArray to that index and then also return it as the second element.

        If you are testing presets with the app itself, you will need to stop and re-start your server to see the changes you write in presetHandler.js take effect.
*/
