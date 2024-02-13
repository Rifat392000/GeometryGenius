let identity = 0;
document.getElementById('blog').addEventListener('click', () => {
    window.open("../blog.html", '_blank');
});

function validate(inputvalue){
if(inputvalue !== '' && parseFloat(inputvalue)>0 && isFinite(inputvalue) )
{
    return true;

}
else{
    return false;
}
}

function getInput(val1, val2) {

   const input1 = document.getElementById(val1).value;
   const input2 = document.getElementById(val2).value;


    if(validate(input1) && validate(input2)){
        
        document.getElementById(val1).value="";
        document.getElementById(val2).value="";
        return [input1, input2];
    }
    else{
        document.getElementById(val1).value="";
        document.getElementById(val2).value="";
        return false;
    }

}


function result(arr, shape, answer) {
    if (!arr) {
        alert('Please enter valid input');
    } else {
        const node = document.createElement("li");

        const divElement = document.createElement("div");
        divElement.className = "flex justify-evenly items-center text-xl pb-4";
        divElement.id = `div${identity}`;

        const pElement1 = document.createElement("p");
        pElement1.textContent = shape;

        const pElement2 = document.createElement("p");
        pElement2.textContent = answer;

        const buttonElement = document.createElement("button");
        buttonElement.type = "button";
        buttonElement.className = "bg-[#1090D8] text-white px-[6px] text-lg py-[2px] rounded-md";
        buttonElement.innerHTML = "Convert to m <sup>2</sup>";
        buttonElement.id = `button${identity}`;

        divElement.appendChild(pElement1);
        divElement.appendChild(pElement2);
        divElement.appendChild(buttonElement);

        node.appendChild(divElement);
        document.getElementById("orderedList").appendChild(node);

        identity++;
    }
}


document.getElementById('orderedList').addEventListener('click',e=>{
    console.log(e.target.tagName);
})


document.getElementById('triangle').addEventListener('click', () => {
const arr= getInput('input1','input2');
result(arr,`Triangle`,0.5*arr[0]*arr[1]);

});

document.getElementById('rectangle').addEventListener('click', () => {
    const arr= getInput('input3','input4');
    result(arr,`Rectangle`,arr[0]*arr[1])
    
    });