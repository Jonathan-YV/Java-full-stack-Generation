const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);
    //console.log(userController.getUsers())    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('findByEmail function works', () => {
    let yair = new User(4321, "Yair", "yair@correo.com");
    userController.add(yair);
    expect(userController.findByEmail(yair.email)).toEqual(yair);
  });

  test('findById function works', () => {
    let jonathan = new User(1235, "Jonathan", "jonathan@correo.com");
    userController.add(jonathan);
    console.log(userController.getUsers())
    expect(userController.findById(jonathan.id)).toEqual(jonathan);
  });