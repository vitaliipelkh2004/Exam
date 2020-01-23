var api=new XMLHttpRequest();
var result ;
var tbody=document.querySelector(".tbody");
var btn=document.getElementById("conv");
var inp=document.getElementById("inp");
var select=document.getElementById("slct");
var data;
api.open('GET','https://poloniex.com/public?command=returnCurrencies',true);
api.send();
api.onload=async function(){
  if(api.status==200){
    data=JSON.parse(api.responseText);
    result = Object.keys(data).map(function(key) {
        return data[key];
         });    
for(var i=0;i<100;i++){
var some=`<tr>
<td>${result[i].id}</td>
<td>${result[i].name}</td>
<td>${result[i].humanType}</td>
<td><button class="btn btn-secondary" onclick="deleteCoin(${i})">Delete</button></td>
</tr>` ; 
$("#tbody").append(some);
        }
  }
  else{
      alert("ERROR");
  }
  for(var i=0;i<10;i++){
  $("#slct").append(`<option value="${result[i].name}">${result[i].name}</option>`);  
  }
}

function test(){
    for(var i=0;i<10;i++){
    if(select.value==result[i].name){
        var price=result[i].price_usd;
    }
    }
    var p=(parseInt(inp.value)*parseInt(price));
    document.getElementById("h2").innerHTML="="+p+"$";
}

function deleteCoin(i)
{
     
  result.splice(i,1);
  document.getElementById("tbody").innerHTML="";
  for(var i=0;i<100;i++){
    var some=`<tr>
    <td>${result[i].id}</td>
    <td>${result[i].name}</td>
    <td>${result[i].humanType}</td>
    <td><button class="btn btn-secondary" onclick="deleteCoin(${i})">Delete</button></td>
    </tr>` ; 
    $("#tbody").append(some);
}
}

function sear()
{
  var n=document.getElementById("ser").value;
  document.getElementById("tbody").innerHTML="";
  for(var i=0;i<10;i++){
  if(result[i].name.includes(n)){
   
    var some=`<tr>
    <td>${result[i].id}</td>
    <td>${result[i].name}</td>
    <td>${result[i].humanType}</td>
    <td><button class="btn btn-secondary" onclick="deleteCoin(${i})">Delete</button></td>
    </tr>` ; 
    $("#tbody").append(some);
  }
  
  }
}

