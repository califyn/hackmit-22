import pyTigerGraph as tg 
from auth import SECRET

conn = tg.TigerGraphConnection(host="https://pigeon.i.tgcloud.io/", graphname="Pigeon", gsqlSecret=SECRET)
conn.getToken(SECRET)

conn.gsql('''

CREATE GRAPH 

''')

# conn.upsertVertex("User", "sample_user", {"username": "sample_user", "password": "sample_password"})