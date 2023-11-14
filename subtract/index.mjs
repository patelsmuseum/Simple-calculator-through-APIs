export const handler = async (event) => {
  
    const num1 = parseInt(event.num1);
    const num2 = parseInt(event.num2);
    
     if (isNaN(num1) || isNaN(num2)) {
          return "400 Invalid Operand";
     }
  
      const result = num1 - num2; 
  
      return {
          statusCode: 200,
          Subtract: JSON.stringify(result ),
      }
};
  