Bubble Chart API Reference
======

This API reference will help you create Bubble Charts with ease using simple method calls. 

Methods
======

* [bubble.height](#bubbleheight)
* [bubble.width](#bubblewidth)
* [bubble.radius](#bubbleradius)
* [bubble.colors](#bubblecolors)
* [bubble.colorInput](#bubblecolorinput)
* [bubble.circleData](#bubblecircledata)
* [bubble.hovers](#bubblehovers)

bubble.height
======
Sets the height of the bubble chart.
* bubble.**height**(value)

Takes in a number value to set the bubble chart's height.

bubble.width
======
Sets the width of the bubble chart.
* bubble.**width**(value)

Takes in a number value to set the bubble chart's width. 

bubble.radius
======
Sets the radius of the cirlces in the bubble chart.
* bubble.**radius**(value)

Takes in a number value to set the radius of the circles in the bubble chart. 

bubble.colors
======
Determines how the colors of the circles will be bound to the data in the bubble chart.
* bubble.**colors**(array)

Takes in an array of values to set which colors will correspond to which piece of data to be used in the bubble chart. This method utilizes the d3.schemeCategory10 to determine the colors. Provide the array of categories that should be bound to a color. 

bubble.colorInput
======
Neccessary to determine how the colors will be displayed in the bubble chart.
* bubble.**colorInput**(string)

Takes in a string value. Needs to take a property of your dataset that specifies how the colors should be bound to your data. 

bubble.circleData
======
Determines how to size and place the circles based on the parameter provided.
* bubble.**circleData**(string)

Takes in a string value. Needs to take a property of your dataset that specifies what data the circles should represent. 

bubble.hovers
======
Allows hovers to show up on the bubble chart
* bubble.**hovers**(bool, label, unit)

Takes in boolean value. Determines whether to show hovers on the circles or not. 
