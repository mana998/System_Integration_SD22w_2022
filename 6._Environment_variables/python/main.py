from dotenv import load_dotenv
load_dotenv()
import os

print(os.environ.get('KEY'))
print(os.getenv('KEY'))