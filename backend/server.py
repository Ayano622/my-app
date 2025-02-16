from flask import Flask, redirect, url_for, session, jsonify
from flask_cors import CORS
from authlib.integrations.flask_client import OAuth
import os
from flask import Flask
from dotenv import load_dotenv

# .env を読み込む
load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # すべてのオリジンを許可
 # React との CORS 設定

app.secret_key = os.getenv("FLASK_SECRET_KEY", "supersecretkey")

# Google OAuth 設定
GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")

oauth = OAuth(app)
google = oauth.register(
    name="google",
    client_id=GOOGLE_CLIENT_ID,
    client_secret=GOOGLE_CLIENT_SECRET,
    authorize_url="https://accounts.google.com/o/oauth2/auth",
    authorize_params=None,
    access_token_url="https://oauth2.googleapis.com/token",
    access_token_params=None,
    refresh_token_url=None,
    redirect_uri="http://localhost:5000/auth/callback",
    client_kwargs={"scope": "openid email profile"},
)

@app.route("/")
def home():
    return f"Flask is running! Secret: {app.secret_key}"

@app.route("/auth/login")
def login():
    return google.authorize_redirect(url_for("callback", _external=True))

@app.route("/auth/callback")
def callback():
    token = google.authorize_access_token()
    user_info = google.parse_id_token(token)
    
    session["user"] = user_info
    return jsonify({"message": "Logged in", "user": user_info})

@app.route("/auth/logout")
def logout():
    session.pop("user", None)
    return jsonify({"message": "Logged out"})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
