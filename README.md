# TemporaryBlog
A self hosted Blogging Site written in java using Sping-boot framework
To start the application, run the jar and go to http://localhost:8080 to access the website.


#Sample Curl Commands:

#GET ALL BLOGPOSTS
curl -X GET localhost:8080/blogs

#GETTING A SPESIFIC BLOGPOST
curl -X GET localhost:8080/blogs/1

#ADDING A NEW BLOGPOST
curl -H "Content-Type: application/json" -X POST --data "{"title": "test", "body": "test"}" http://localhost:8080/blogs

#EDITING AN EXISTING BLOGPOST
curl -H "Content-Type: application/json" -X POST --data "{"title": "test1", "body": "test1"}" http://localhost:8080/blogs/1

#REMOVING A SPESIFIC BLOGPOST
curl -X DELETE localhost:8080/blogs/1

#REMOVING ALL THE BLOGPOSTS
curl -X DELETE localhost:8080/blogs

