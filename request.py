import requests
import json
req = requests.get('https://www.example.com/get-data')
res = json.loads(req.text)
item_array = res['data']
item_array.sort(key=lambda x: x["id"])
for items in item_array:
    print(items.id)
    print(items.item)