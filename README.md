# back-end
the back-end

Endpoint type,  Protected                         Endpoint Url     
POST             NO             https://african-market-67.herokuapp.com/auth/register
What Endpoint does:Registers a new user. Requires an object with a username, password, and email all of type string.


POST            NO              https://african-market-67.herokuapp.com/auth/login
                                     What Endpoint does
Logs in a user. Requires an object with a username and password all of type string. Returns JSON Web Token.


GET             YES             https://african-market-67.herokuapp.com/items
                             What Endpoint does: Returns all items.


POST            YES             https://african-market-67.herokuapp.com/items
What Endpoint does:Creates an item. Requires a name, description, price, and location all of type string.


PUT             YES             https://african-market-67.herokuapp.com/items/:id
What Endpoint does: Updates an item with specified id. Requires what is to be updated.


DELETE          YES             https://african-market-67.herokuapp.com/items/:id
What Endpoint does:Deletes the item with specified id.


GET             YES             https://african-market-67.herokuapp.com/items/:id
 What Endpoint does:Gets item data based on id, requires logged in user.

ALL PROTECTED ROUTES REQUIRE JSON WEB TOKEN IN AUTH HEADER! YOU GET THE TOKEN IN THE RESPONSE OF THE LOGIN ENDPOINT.
