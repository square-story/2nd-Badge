
//create a constructor function 
function BasicObject (){
    this.name = "John Doe";
    this.age = 30;
    this.city = "New York";
    this.basic = 'iam basic Object'
}

//create a extended object for inherited
function ExtendedObject (){
    this.ExtendedObjectProperty = 'Iam an extended property'
}

//setup prototype
ExtendedObject.prototype = new BasicObject()

//create object based on constructor function
const basicObj = new BasicObject();
const extendedObj = new ExtendedObject();


//they can access the property from basic constructor function also
console.log(extendedObj.ExtendedObjectProperty);
console.log(extendedObj.basic);