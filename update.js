//Version: 1.0
//Type: Update

function(instance, properties, context) {

    // Özelliklerin alınması
    var bubbleBackgroundColor = properties.bubbleBackgroundColor;
    var bubbleFontFace = properties.bubble.font_face;
    var bubbleFontColor = properties.bubble.font_color;
    var bubbleBorderColor = properties.bubbleBorderColor;
    var bubbleFontSize = properties.bubble.font_size;
    var progressValue = properties.bubbleProgressValue;
    var bubbleText = properties.bubbleText;
    var bubbleSize = properties.bubbleSize;
    var bubbleSecondaryColor = properties.bubbleBorderSecondaryColor;

    // Daire çizim parametrelerinin hesaplanması
    var elementRadius = (properties.bubbleSize / 2) - 5;
    var elementPerimeter = 2 * Math.PI * elementRadius;
    var offset = elementPerimeter - (elementPerimeter * progressValue / 100);

    // SVG elemanlarının güncellenmesi
    document.getElementsByClassName(instance.data.classCircle)[0].setAttribute("cx", elementRadius);
    document.getElementsByClassName(instance.data.classCircle)[0].setAttribute("cy", elementRadius);
    document.getElementsByClassName(instance.data.classCircle)[0].setAttribute("r", elementRadius);
    document.getElementsByClassName(instance.data.classCircle)[1].setAttribute("cx", elementRadius);
    document.getElementsByClassName(instance.data.classCircle)[1].setAttribute("cy", elementRadius);
    document.getElementsByClassName(instance.data.classCircle)[1].setAttribute("r", elementRadius);
    document.getElementsByClassName(instance.data.classText)[0].innerText = properties.bubbleText;

    // Eleman için CSS stilinin oluşturulması
    var style = `.${instance.data.classPercent}
{
  position:relative;
  width:${bubbleSize}px;
  height:${bubbleSize}px;
  border-radius:50%;
  box-shadow: inset 0 0 20px #000;
  background:${bubbleBackgroundColor};
  z-index:1000;
}
.${instance.data.classText}
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

.${instance.data.classSvg}
{
  position:relative;
  width:${bubbleSize}px;
  height:${bubbleSize}px;
  z-index:1000;
}
.${instance.data.classCircle}
{
  width:100%;
  height:100%;
  fill:none;
  stroke:${bubbleSecondaryColor};
  stroke-width:10;
  stroke-linecap:round;
  transform:translate(5px,5px);
  transition: stroke-dashoffset 1s ease-in-out; /*Dinamik animasyon geçiş özeliği */
}
.${instance.data.classCircle}:nth-child(2)
{
  stroke-dasharray:${elementPerimeter};
  stroke-dashoffset:${elementPerimeter};
}
.${instance.data.classCard}:nth-child(1) .${instance.data.classCircle}:nth-child(2)
{
  stroke-dashoffset:${elementPerimeter};
  stroke:${bubbleBorderColor};
}`

    // Stil etiketinin head kısmına eklenmesi
    $('<style>' + style + '</style>').appendTo('head');

    // İlerleme çubuğunun animasyonlu olarak dolması
    setTimeout(function() {
        document.getElementsByClassName(instance.data.classCircle)[1].style.strokeDashoffset = offset;
    }, 100); // Başlangıç stilinin uygulanması için kısa bir gecikme
}





