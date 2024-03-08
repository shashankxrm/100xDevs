const zod = require("zod");
// if it is an arr of nums, return true else false
function validateInput(){
    const schema = zod.array(zod.number());
    const response = schema.safeParse(arr)
    console.log(response);
}
arr = ["ab", 2, 3]; // { success: false, error: [Getter] }
arr = [1, 2, 3]; // { success: true, data: [ 1, 2, 3 ] }
validateInput(arr);
