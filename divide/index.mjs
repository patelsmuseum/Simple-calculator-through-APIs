export const handler = async (event) => {
    const num1 = parseInt(event.num1);
    const num2 = parseInt(event.num2);
    
     if(isNaN(num1) || isNaN(num2)) {
          return "400 Invalid Operand";
     }
 
     if (num2 === 0) {
         return {
             statusCode: 400,
             body: JSON.stringify({ error: "Division by zero is not allowed" }),
         };
     }
 
     const result = num1 / num2;
     return {
         statusCode: 200,
         Divide_Result: JSON.stringify( result ),
     };
};
 