from fastapi import FastAPI
from pydantic import BaseModel
import pyTigerGraph as tg 
from auth import SECRET
from datetime import datetime 
import json

conn = tg.TigerGraphConnection(host="https://pigeon.i.tgcloud.io/", graphname="Pigeon", gsqlSecret=SECRET)
conn.getToken(SECRET)

class User(BaseModel):
    name: str
    pwd: str

class Username(BaseModel):
    name: str

class Package(BaseModel):
    from_user: str
    to_user: str
    message: str
    lat: float
    lon: float

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/login")
async def login(usr: User): 
    res = conn.runInstalledQuery("userLogin", {"username": usr.name, "pwd": usr.pwd})
    if "\"NOT FOUND\"" in res[0].keys():
        return {"error": "User not found"} 
    else: 
        return res[0]

@app.get("/userexists")
async def userexists(usr: Username):
    res = conn.runInstalledQuery("userExists", {"username": usr.name})
    if "\"NOT FOUND\"" in res[0].keys():
        return {"error": "User not found"} 
    else: 
        return res[0]

@app.get("/packages")
async def getpackages(usr: Username): 
    try:
        res = conn.runInstalledQuery("userLocations", {"username": usr.name})
        return res[0]
    except:
        return {"error": "An unexpected error has occurred!"}

@app.post("/addpackage")
async def addpackage(usr: Package): 
    try:
        pkg_name = f"{usr.from_user}-{datetime.now().strftime('%m%d%Y%H%M%S%f')}"
        conn.upsertVertex("Package", pkg_name, {"text": usr.message, "lat": usr.lat, "lon": usr.lon, "time": datetime.now().strftime('%Y-%m-%d %H-%M-%S')})
        conn.upsertEdge("User", usr.from_user, "PACKAGE_FROM", "Package", pkg_name)
        conn.upsertEdge("User", usr.to_user, "PACKAGE_TO", "Package", pkg_name)
        return {"success": "success"}
    except:
        return {"error": "An unexpected error has occurred!"}

@app.post("/signup")
async def signup(usr: User): 
    res = conn.runInstalledQuery("userExists", {"username": usr.name})
    if "\"NOT FOUND\"" in res[0].keys():
        conn.upsertVertex("User", usr.name, {"username": usr.name, "password": usr.pwd})
        return {"success": "success"}
    else:
        return {"error": "User exists"}
