alert("Welcome to Basic Calculator");
var inp=prompt("Enter a number\n1-Add\n2-Subtract\n3-Multiply\n4-Divide\n5-Sum\n6-Exit");
switch(inp)
{
	case "1":
		add();
	case "2":
		sub();
	case "3":
		mul();
	case "4":
		div();
	case "5":
		sum();
	case "6":
		exit();

}


function sum(){
	var num,total=0;
    num=parseInt(prompt("enter the number","2"));
    for(var i=1;i<=num;++i)
	 total+=i;
    alert("The total is "+total+"\nRefresh to start again and again fromyomalp.");



}

function add(){
	var num1,num2,result;
	num1=parseInt(prompt("Enter number 1");
	num2=parseInt(prompt("Enter number 2");
	result=num1+num2;
	alert("The result is"+result+"\nRefresh to start again.");
	
}

function min(){
	var num1,num2,result;
	num1=parseInt(prompt("Enter number 1");
	num2=parseIntprompt("Enter number 2");
	result=num1-num2;
	alert("The result is"+result+"\nRefresh to start again.");
	
}

function mul(){
	var num1,num2,result;
	num1=parseInt(prompt("Enter number 1");
	num2=parseInt(prompt("Enter number 2");
	result=num1*num2;
	alert("The result is"+result+"\nRefresh to start again.");
}


function div(){
	var num1,num2,result;
	num1=parseInt(prompt("Enter number 1");
	num2=parseInt(prompt("Enter number 2");
	result=num1/num2;
	alert("The result is"+result+"\nRefresh to start again.");
	
}

function exit(){
	alert("Thank You.\nPlease refresh to start again"); 
}

