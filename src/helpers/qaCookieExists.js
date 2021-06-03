export default (testName)=>{
    if(testName.length === 0) return false

   const cookieExists = document.cookie.toLowerCase().includes(`${testName.toLowerCase()}=true`);
   return cookieExists
}