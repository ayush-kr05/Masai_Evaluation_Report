// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

var th8=document.createElement("th");
th8.innerText="Delete";
document.querySelector("thead tr").append(th8);


document.querySelector("form").addEventListener("submit",findResult);

function findResult(){
    

    event.preventDefault();
    var name=document.querySelector("#name").value;
    var batch=document.getElementById("batch").value;
    var dsa=document.getElementById("dsa").value;
    var skill=document.getElementById("cs").value;
    var code=document.getElementById("coding").value;

    // console.log(name,batch,dsa,skill,code);

    var percent= ((Number(dsa)+Number(skill)+Number(code))/30)*100;

    var status=""; 
    if(percent>=50){
        status="Regular";
    }else{
        status="Async";
    }
    
    var del="Delete";

    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=name;
    var td2=document.createElement("td");
    td2.innerText=batch;
    var td3=document.createElement("td");
    td3.innerText=dsa;
    var td4=document.createElement("td");
    td4.innerText=skill;
    var td5=document.createElement("td");
    td5.innerText=code;
    var td6=document.createElement("td");
    td6.innerText=percent;
    var td7=document.createElement("td");
    
    if(percent>=50){
        td7.innerText="Regular";
        td7.style.backgroundColor="green";
    }else{
        td7.innerText="Async";
        td7.style.backgroundColor="red";
    }
    var td8=document.createElement("td");
    td8.innerText="delete";
    td8.style.color="red";
    td8.addEventListener("click",delRow);
    

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);

    document.querySelector("tbody").append(tr);


}
function delRow(){
    event.target.parentNode.remove();
}