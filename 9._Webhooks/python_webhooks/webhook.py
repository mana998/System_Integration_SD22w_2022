import requests
import json
import datetime

#webhook_url = "http://localhost:8000/webhook"

#webhook_url = "http://f729-94-18-243-162.ngrok.io/webhook"

webhook_url = "http://15cd-94-18-243-162.ngrok.io/github"

data = {
    "description": "Coming from webhook",
    "timestamp": datetime.datetime.now().isoformat()
}

response = requests.post(webhook_url, json=json.dumps(data),
    headers={"Content-Type": "application/json"})

print(response.status_code)
print(response.json())