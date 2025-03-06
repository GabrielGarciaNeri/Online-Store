from flask import Flask
import json

app = Flask(__name__)

#This is an endpoint
@app.get("/")
def home():
    return "Hello from flask"

@app.post("/")
def homepost():
    return "thats not allowed"

@app.get("/about")
def about():
    return "welcome to the about page!"

@app.get("/info")
def info():
    name = {"name":"Junior"}
    return json.dumps(name)

app.run(debug=True) # This pass the changes to the server when we save

