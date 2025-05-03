function(instance, context) {

    instance.data.classCard = "classCard-"+(Math.random() * Math.pow(3, 60)).toString(20);
    instance.data.classPercent = "classPercent-"+(Math.random() * Math.pow(3, 60)).toString(20);
    instance.data.classText = "classText-"+(Math.random() * Math.pow(3, 60)).toString(20);
    instance.data.classSvg = "classSvg-"+(Math.random() * Math.pow(3, 60)).toString(20);
    instance.data.classCircle = "classCircle-"+(Math.random() * Math.pow(3, 60)).toString(20);
    
    var div = $('<div class="'+instance.data.classCard+'"><div class="'+instance.data.classPercent+'"><svg class="'+instance.data.classSvg+'"><circle class="'+instance.data.classCircle+'" style="stroke-width:9"></circle><circle class="'+instance.data.classCircle+'" style="stroke-width:10"></circle></svg><div class="'+instance.data.classText+'"></div></div></div>');
    $(div).appendTo(instance.canvas); 

}




