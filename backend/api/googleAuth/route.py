from flask import Blueprint, redirect, url_for, session, jsonify
from authlib.integrations.flask_client import OAuth
from flask_jwt_extended import create_access_token
import os

google_auth_bp = Blueprint("google_auth", __name__)

oauth = OAuth()
google = oauth.register(
    name="google",
    client_id=os.getenv("GOOGLE_CLIENT_ID"),
    client_secret=os.getenv("GOOGLE_CLIENT_SECRET"),
    server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
    client_kwargs={"scope": "openid email profile"},
)

@google_auth_bp.route("/auth/login")
def login():
    nonce = os.urandom(16).hex()
    session["nonce"] = nonce
    return google.authorize_redirect(url_for("google_auth.callback", _external=True), nonce=nonce)

@google_auth_bp.route("/auth/callback")
def callback():
    token = google.authorize_access_token()
    nonce = session.pop("nonce", None)
    user_info = google.parse_id_token(token, nonce=nonce)

    # JWT トークンを発行
    access_token = create_access_token(identity=user_info["email"])

    session["user"] = user_info
    return jsonify({"message": "Logged in", "user": user_info, "token": access_token})

@google_auth_bp.route("/auth/logout")
def logout():
    session.pop("user", None)
    return jsonify({"message": "Logged out"})
