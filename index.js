let userName = prompt("Please enter your name:");
let Age = prompt("Please enter your age: ");
let gender=prompt("please enter your gender: ");
let orderstaus="none";

if(gender=="Male" || gender=="male") 
{
   alert("Welcome Mr. "+ userName);
}
else if(gender=="Female" || gender=="female")
{
   alert("Welcome Ms. "+userName);

}
else
{
   alert("Welcome "+ userName);
}

if(Age<16)
    {
        alert("You are not eligible to place an order");
    }
else
    {
        alert("Continue with the order");

    }

let order=prompt("please  enter one of the following Burger Shawarma Zinger ");

if(order=="Burger"||order=="Shawarma" ||order=="Zinger")
{
alert("Your order is being prepared");
orderstaus="Your order is being prepared";
}

else{
alert("Invalid order. Please try again");
orderstaus="Invalid order. Please try again";
}

if(Age>18)
{
if(order=="Zinger"||order=="Shawarma"||order=="Burger")
{    
alert("Order confirmed");
orderstaus="Order confirmed";
}
else
{
alert("Order requires verification"); 
orderstaus="Order requires verification";
}
}
else
{
    alert("Order requires verification"); 
 orderstaus="Order requires verification";
}

console.log("customer name is " + userName );
console.log("age is " +Age );
console.log("gender is " +gender );
console.log("Order is " +order );
console.log("Order Status"+orderstaus);


document.write("<h2>Restaurant Order Summary</h2>");
document.write("<p><strong>Customer Name:</strong> " + userName + "</p>");
document.write("<p><strong>Age:</strong> " + Age + "</p>");
document.write("<p><strong>Gender:</strong> " + gender + "</p>");
document.write("<p><strong>Order:</strong> " + order + "</p>");
document.write("<p><strong>Order Status:</strong> " + orderstaus + "</p>");
