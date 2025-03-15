from flask import Flask, request
import json
from config import db

app = Flask(__name__)

# This is an endpoint 
@app.get("/")
def home():
    return "Hello from Flask"

@app.get("/about")
def about():
    return "Hello from the about page"

@app.get("/info")
def info():
    name = {"name":"Adrian RA"}
    return json.dumps(name)

catalog = []
products = []

def fix_id(obj):
    obj["_id"] = str(obj["_id"])
    return obj


@app.get("/api/catalog")
def get_catalog():
    return json.dumps(catalog)

@app.post("/api/catalog")
def post_catalog():
    product = request.get_json()
    # products.append(product)
    catalog.append(product)
    db.products.insert_one(product)
    return "Product added to catalog"

@app.get("/api/reports/total")
def get_total():
    total = 0
    for product in catalog:
        total += product.get("price", 0)
    return "Total value", total 


@app.get("/api/products/<category>")
def get_products_by_category(category):
    filtered_products = [product for product in catalog if product.get("category") == category]
    return json.dumps(filtered_products)

@app.get("/api/products")
def get_products():
    products_db = []
    cursor = db.products.find({})
    for product in cursor:
        print("product ", product)
        products_db.append(fix_id(product))
    return json.dumps(products_db)

@app.post("/api/products")
def post_products():
    product = request.get_json()
    db.products.insert_one(product) #need help ask during tutor session!!
    print(product)
    return "Product saved"

@app.put("/api/products/<int:index>")
def put_products(index):
    updatedProduct = request.get_json()
    if 0<= index < len(products): #len = length
        products[index]=updatedProduct
        return json.dumps(updatedProduct)
    else: 
        return "that index does not exist"
    
# just remember that to delete an element from a list, you need to use - pop
@app.delete("/api/products/<int:index>")
def delete_products(index):
    #deletedProduct = request.get_json()
    if 0<= index < len(products):
    #    ---> Here we need to specify wich element from products list will be removed
        deletedProduct = products.pop(index)
        return json.dumps(deletedProduct)
    else: 
        return "that index does not exist" 
    
# try this to the patch, but use this logic instead - list[index].update(object)

@app.patch("/api/products/<int:index>")
def patch_products(index):
    patchProducts = request.get_json()
    if 0<= index < len(products):
        products[index].update(patchProducts)
        return json.dumps(patchProducts)
    else:
        return "That index does not exist"

app.run(debug=True)#This pass the changes to the server when we save