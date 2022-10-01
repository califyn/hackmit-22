from fastapi import FastAPI
from pydantic import BaseModel
import pyTigerGraph as tg 
from auth import SECRET

conn = tg.TigerGraphConnection(host="https://pigeon.i.tgcloud.io/", graphname="Pigeon", gsqlSecret=SECRET)
conn.getToken(SECRET)

class User(BaseModel):
    name: str
    pwd: str

class Username(BaseModel):
    name: str

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

@app.post("/signup")
async def signup(usr: User): 
    res = conn.runInstalledQuery("userExists", {"username": usr.name})
    if "\"NOT FOUND\"" in res[0].keys():
        conn.upsertVertex("User", usr.name, {"username": usr.name, "password": usr.pwd})
        return {"success": "success"}
    else:
        return {"error": "User exists"}
