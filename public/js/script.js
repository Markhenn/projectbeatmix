/*
To Do List:


    Four variables to represent the arrays of drum pads. These arrays are named after the drums they represent: kicks, snares, hiHats, rideCymbals. These arrays should all have a length of 16 and be filled with false.

    a function called toggleDrum that takes two arguments: a string representing the array name ('kicks', 'snares', 'hiHats', or 'rideCymbals'), and an index number. This function should flip the boolean value in the correct array at the specified index.

    A function named clear that takes an array name string and sets all values in the correct array to false.

    A function named invert that takes an array name string and flips the boolean value of all elements in the correct array.

In addition, you will write some server-side code to handle saving and retrieving drum machine presets in presetHandler.js:

    a function named presetHandler. This function will be called from within your server to get an existing preset or create/update a preset.
        presetHandler takes up to three arguments. The first argument is a string representing the request type: 'GET' or 'PUT'. The second argument is the array index of the presets array. For 'PUT' requests, a third argument, newPresetArray will also be passed in, representing the new drum preset array to save at that index.

        presetHandler should return an array. This array will have one or two elements depending on how it is called. If presetHandler is called with an invalid index, it should return an array with 404 as the first element, meaning that that array index is Not Found. If index is valid, the first element of the return array should be 200, meaning the request was OK.

        If presetHandler is called a method that is not 'GET' or 'PUT', it should return an array with 400 as the first element, meaning that it was a Bad Request.

        If the index was valid, presetHandler should also return a second element in the array. for 'GET' requests, that element should be the preset array at that array index. For 'PUT' requests, it should save the newPresetArray to that index and then also return it as the second element.

        If you are testing presets with the app itself, you will need to stop and re-start your server to see the changes you write in presetHandler.js take effect.

Bonus

As a bonus, you can choose to implement a function in script.js to play multiple synthesizer tones at once by writing:

    a function called getNeighborPads that accepts an x, y, and a size parameter. In the application, these values refer to the synth grid: x and y zero-indexed from the bottom left of the grid, and size is a number representing the number of rows/columns in the square. getNeighborPads should return an array of neighbors, each in the form [xValue, yValue]. Neighbors are the squares immediately to the left, right, above, and below of a grid position.

To work on the bonus with tests, you will need to remove their pending status. Open the test/test.js and edit the line that begins xdescribe('BONUS: getNeighborPads() function' (it should be around line 360 in the test file). If you delete the x (so that the line simply starts with describe( and save the test file before re-running, your bonus tests will now be active.

*/


// Drum Arrays
let kicks = Array(16).fill(false);
let snares = Array(16).fill(false);
let hiHats = Array(16).fill(false);
let rideCymbals = Array(16).fill(false);

//console.log(kicks);
