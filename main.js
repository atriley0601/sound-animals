function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
    
}
function gotResults(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("result_label").innerHTML='I can hear - '+        results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy - '+    results[0].confidence.toFixed(3);
    img=document.getElementById("alien1");
    if(results[0].label == "Barking"){
        img.src='http://www.rover.com/blog/wp-content/uploads/2014/07/terrier-two-step-dog-dance.gif';
    }else if(results[0].label == "Meowing"){
        img.src='https://media2.giphy.com/media/L2GmwARts46dC6f7NR/source.gif';
    }    
    }
}



