var currentUser = null;

var login = function (email) {
  var currentUser = email;
    };

var logout = function () {
  var currentUser = null;
    };

var getLoggedInUser = function () {
    var id;
    var result = '';
    for (id in friends) 
    {
    result = result + friends[id];
    }

    var output = getUserDetails();

  console.log(output);

};


//   var getUserDetails;(currentUser, function(result){
// console.log(result);
//     //print out friends list

//     }

login('john@doe.com');
getLoggedInUser();
logout();
getLoggedInUser();




/*********************************/
/** DO NOT EDIT BELOW THIS LINE **/
/*********************************/

/**
 * MOCK - get user details
 * @param  {string} email
 * @return {void}
 */
function getUserDetails(email, callback){
  if(email){
    callback({
      email: email,
      username: 'John Doe',
      friends: [0,1,2,3]
    });
  } else {
    callback(null);
  }
}













