
import sys
import os
from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config.config import Config
from api.googleAuth import create_google_auth_blueprint

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "api")))

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# 設定を適用
app.config.from_object(Config)
jwt = JWTManager(app)

# Google 認証のルートを登録
app.register_blueprint(create_google_auth_blueprint())

@app.route("/")
def home():
    return "Flask OAuth Google Login is Running!"

if __name__ == "__main__":
    app.run(debug=True, port=8080)
