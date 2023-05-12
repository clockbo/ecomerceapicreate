# E-Commerce-API
# ABOUT
This is an E-commerce API made using Node.Js & MongoDB. 

STEPS TO USE THE API:
1) Open postman
2) Make a GET request on https://ecomerce-api.up.railway.app/products
3) The products should be visible


STEPS TO CREATE A NEW PRODUCT: 
1) Open postman
2) put https://ecomerce-api.up.railway.app/products/create as the url. 
3) Select Body tab below the url textarea and then select x-www-form-urlencoded
4) Add name & quantity as the keys and set the desired values for the keys.
5) Make a POST request.
6) If you recieve the message saying new product added successfully then you have done everything correct.
7) The product is created. Check it out by making a GET request at https://ecomerce-api.up.railway.app/products

STEPS TO DELETE A PRODUCT:
1) copy the object id of the product you want to delete.
2) add the id after https://ecomerce-api.up.railway.app/products/
3) Make a DELETE request.
4) You will recieve a message saying deleted successfully.

STEPS TO UPDATE THE QUANTITY OF A PRODUCT:
1) Copy the object id of the product whose quantity you want to update
2) Put the id after https://ecomerce-api.up.railway.app/products/
3) After putting the id add /update_quantity/?number=x in the url where x is the number by which you want to increase or decrease the quantity.
4) the url should be looking like https://ecomerce-api.up.railway.app/products/645db5a8e7ccbcf2bf468374/update_quantity/?number=100
5) Make a POST request and you should get a message containing the update product


# TECHSTACK
Node.Js, MongoDB
