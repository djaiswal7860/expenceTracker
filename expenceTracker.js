var productName=document.querySelector(".productName");
var productPrice=document.querySelector(".productPrice");
var purchaseDate=document.querySelector(".purchaseDate");
var listData=document.querySelector("#listData");
var Expence=document.querySelector(".Expence");
var Income=document.querySelector(".Income");
var Balance=document.querySelector(".Balance")
var count=0;
let listDat;
var proPri=[];
var incPri=[];
var sum=0;
var sam=0;
    function getDataOfUser()
    {
        if(productName.value==""||productPrice.value==""||purchaseDate.value=="")
        {
            alert("Information provided is incomplite")
        }
        else{
            count++
            listDat=`<tr id="${count}"><td>${count}</td><td>${productName.value}</td><td class="pr">${productPrice.value}</td><td>${purchaseDate.value}</td><td><input type="button" value="delete" onclick="removeData(${count})"></td></tr>`;
            listData.innerHTML+=listDat;
            var prVal=parseInt(productPrice.value);//for converting string value of productPrice to intiger we have use parseInt function;
            console.log(prVal);
            proPri.push(prVal);
            console.log(proPri);
           getTotalExp(proPri);
           productName.value=productPrice.value=purchaseDate.value="";
        }   
    }
    function getIncomeOfUser()
    {
        if(productName.value==""||productPrice.value==""||purchaseDate.value=="")
        {
            alert("Information provided is incomplite")
        }
        else{
            count++
            listDat=`<tr id="${count}"><td>${count}</td><td>${productName.value}</td><td class="pr">${productPrice.value}</td><td>${purchaseDate.value}</td><td><input type="button" value="delete" onclick="removeData(${count})"></td></tr>`;
            listData.innerHTML+=listDat;
            var inVal=parseInt(productPrice.value);//for converting string value of productPrice to intiger we have use parseInt function;
            console.log(inVal);
            incPri.push(inVal);
            console.log(incPri);
           getTotalnc(incPri);
           productName.value=productPrice.value=purchaseDate.value="";
        }    
    }
    function removeData(inputCount)
    {
        var inputState=confirm("Are shoure you want to delete the Data ?");
        if(inputState)
        document.getElementById(inputCount).remove();
    }
    function getTotalExp(exp)
    {
         sum=exp.reduce((accumulator,currentValue)=>{
            return accumulator + currentValue;
        },0);
        console.log(sum);
        Expence.innerHTML=sum;
        getTotalBal();
    }
    function getTotalnc(inc)
    {
         sam=inc.reduce((accumulator,currentValue)=>{
            return accumulator + currentValue;
        },0);
        console.log(sam);
        Income.innerHTML=sam;
        getTotalBal();
    }
    function getTotalBal()
    {
        if(sam==""||sum=="")
        {
            Balance.innerHTML=sam;
        }
        else{
        console.log(sum);
        console.log(sam);
         const bal= sam-sum;
         console.log(bal);
        Balance.innerHTML=bal;
        }
    }