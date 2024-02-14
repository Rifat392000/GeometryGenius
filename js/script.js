
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
        
        return [input1, input2];
    }
    else{
       
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
        

        const pElement1 = document.createElement("p");
        pElement1.textContent = shape;
        

        const pElement2 = document.createElement("p");
        pElement2.textContent = answer;
        

        const buttonElement = document.createElement("button");
        buttonElement.type = "button";
        buttonElement.className = "bg-[#1090D8] text-white px-[6px] text-lg py-[2px] rounded-md text-center";
        buttonElement.innerHTML = "Convert to m <sup>2</sup>";
        

        const deleteElement = document.createElement("img");
        deleteElement.src = "../images/delete.png";
        deleteElement.className = "w-[20px] cursor-pointer";
        

        divElement.appendChild(pElement1);
        divElement.appendChild(pElement2);
        divElement.appendChild(buttonElement);
        divElement.appendChild(deleteElement);

        node.appendChild(divElement);
        document.getElementById("orderedList").appendChild(node);

        
    }
}




document.getElementById('orderedList').addEventListener('click', e => {
    // console.log(e.target.tagName);
    if (e.target.tagName === 'BUTTON') {
        e.target.previousSibling.innerText = (parseFloat(e.target.previousSibling.innerText)/1000).toFixed(2);
        // console.log(e.target.previousSibling.innerText);
        e.target.disabled = true;
        e.target.style.backgroundColor ='grey';
    }
});

document.getElementById('orderedList').addEventListener('click', e => {

    if (e.target.tagName === 'IMG'){
        const li = e.target.parentNode.parentNode;
        li.remove();
    }
    
})

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.round(Math.random() * 16)];
    }
    return color;
  };

document.querySelectorAll('.child-div').forEach(child =>{
child.addEventListener('mouseenter',()=>{
    child.style.backgroundColor = randomColor();
})
});

function calculations(checkbox,arr,val1,val2,name,formula, resultDisplay){

    if(document.getElementById(checkbox).checked){
        result(arr,name,formula);
        document.getElementById(checkbox).checked = false;
        document.getElementById(resultDisplay).style.display='none';
        document.getElementById(val1).value="";
        document.getElementById(val2).value="";
        document.getElementById(val1).disabled=false;
        document.getElementById(val2).disabled=false;
    }

    else{
        alert('Please checked the values');
    }

}


function checkedValue(block,val1,val2,checkbox,a,b){
    const bl = document.getElementById(block);
    const arr= getInput(val1,val2);
    if (document.getElementById(checkbox).checked && arr){
        bl.style.display='block';
        bl.innerText= `${a} = ${arr[0]} cm  ${b} = ${arr[1]} cm`
        document.getElementById(val1).disabled=true;
        document.getElementById(val2).disabled=true;
    }
    else{
        bl.style.display='none';
    document.getElementById(val1).disabled=false;
    document.getElementById(val2).disabled=false;
    }
}


//Triangle
document.getElementById('check1').addEventListener('change',()=>{

    checkedValue('triangle-display','input1','input2','check1','a','b');
})

document.getElementById('triangle').addEventListener('click', () => {
    const arr= getInput('input1','input2');
calculations('check1',arr,'input1','input2','Triangle',0.5*arr[0]*arr[1],'triangle-display');

});



//Rectangle
document.getElementById('check2').addEventListener('change',()=>{

    checkedValue('rectangle-display','input3','input4','check2','w','l');
})

document.getElementById('rectangle').addEventListener('click', () => {
    const arr= getInput('input3','input4');
calculations('check2',arr,'input3','input4','Rectangle',arr[0]*arr[1],'rectangle-display');

});



//Parallelogram
document.getElementById('check3').addEventListener('change',()=>{

    checkedValue('parallelogram-display','input5','input6','check3','b','h');
})

document.getElementById('parallelogram').addEventListener('click', () => {
    const arr= getInput('input5','input6');
calculations('check3',arr,'input5','input6','Parallelogram',arr[0]*arr[1],'parallelogram-display');

});










