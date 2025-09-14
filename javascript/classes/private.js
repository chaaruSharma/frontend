// private properties

class user{
    #id=123;
    changeId(id){
        this.id=id;
    }
}
 user1=new user();
// user.#id=321;
user1.changeId("xya");

console.log(user1.id);