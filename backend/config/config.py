import os
from dotenv import load_dotenv

# .env ファイルを読み込む
load_dotenv()

class Config:
    SECRET_KEY = os.getenv("FLASK_SECRET_KEY", "supersecretkey")
    GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
    GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "your_jwt_secret")
