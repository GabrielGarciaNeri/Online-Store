import pymongo
import certifi #install pip certifi

connection_string = "mongodb+srv://Gabriel:Junior55@fsdi-107.utquu.mongodb.net/?retryWrites=true&w=majority&appName=fsdi-107"

client = pymongo.MongoClient(connection_string, tlsCAFile=certifi.where())
db = client.get_database("organika")