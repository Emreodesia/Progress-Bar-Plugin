function(instance, properties, context) {

    var bubbleBackgroundColor = properties.bubbleBackgroundColor;
    var bubbleFontFace = properties.bubble.font_face;
    var bubbleFontColor = properties.bubble.font_color;
    var bubbleBorderColor = properties.bubbleBorderColor;
    var bubbleFontSize = properties.bubble.font_size;
    var progressValue = properties.bubbleProgressValue;
    var bubbleText = properties.bubbleText;
    var bubbleSize = properties.bubbleSize;
    var bubbleSecondaryColor = properties.bubbleBorderSecondaryColor;
    var elementRadius = properties.bubbleSize/2-5;
    var elementPerimeter = 2 * Math.PI * elementRadius;
    
    var classCard = "classCard-"+(Math.random() * Math.pow(3, 60)).toString(20);
    var classPercent = "classPercent-"+(Math.random() * Math.pow(3, 60)).toString(20);
    var classText = "classText-"+(Math.random() * Math.pow(3, 60)).toString(20);
    var classSvg = "classSvg-"+(Math.random() * Math.pow(3, 60)).toString(20);
    var classCircle = "classCircle-"+(Math.random() * Math.pow(3, 60)).toString(20);
    
    var div = $('<div class="'+classCard+'"><div class="'+classPercent+'"><svg class="'+classSvg+'"><circle class="'+classCircle+'" cx='+elementRadius+' cy='+elementRadius+' r='+elementRadius+' style="stroke-width:9"></circle><circle class="'+classCircle+'" cx='+elementRadius+' cy='+elementRadius+' r='+elementRadius+' style="stroke-width:10"></circle><svg class="'+classSvg+'"><div class="'+classText+'">'+properties.bubbleText+'</div></div></div>');
    $(div).appendTo(instance.canvas); 
    
   
    // CSS Styling for the element
    var style = `.${classPercent}
{
  position:relative;
  width:${bubbleSize}px;
  height:${bubbleSize}px;
  border-radius:50%;
  box-shadow: inset 0 0 20px #000;
  background:${bubbleBackgroundColor};
  z-index:1000;
}
.${classText}
{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:50%;
  color:${bubbleFontColor};
  font-weight:700;
  font-size:${bubbleFontSize}px;
  transition:0.5s;
  font-family:${bubbleFontFace};
}

.${classSvg}
{
  position:relative;
  width:${bubbleSize}px;
  height:${bubbleSize}px;
  z-index:1000;
}
.${classCircle}
{
  width:100%;
  height:100%;
  fill:none;
  stroke:${bubbleSecondaryColor};
  stroke-width:10;
  stroke-linecap:round;
  transform:translate(5px,5px);
}
.${classCircle}:nth-child(2)
{
  stroke-dasharray:${elementPerimeter};
  stroke-dashoffset:${elementPerimeter};
}
.${classCard}:nth-child(1) .${classCircle}:nth-child(2)
{
  stroke-dashoffset:${offset};
  stroke:${bubbleBorderColor};
}`
   $('<style>'+ style +'</style>').appendTo('head'); 


    
}