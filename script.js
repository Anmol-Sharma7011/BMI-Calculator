let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let results = document.querySelector("#results");
    let specification = document.querySelector("#specification");

    if(height=="" || height<0 || isNaN(height)){
        results.innerHTML = "Please Enter a valid Height";
    }
    else if(weight=="" || weight<0 || isNaN(weight)){
        results.innerHTML = "Please Enter a valid weight";
    }
    else{
        let bmi = (weight / ((height*height) / 10000)).toFixed(2);
        results.innerHTML = bmi;
         if(bmi<18.6) specification.innerHTML = "Under Weight";
         else if(bmi>18.6 && bmi<24.9) specification.innerHTML = "Normal";
         else if(bmi>24.9) specification.innerHTML = "OverWeight";

    }
})