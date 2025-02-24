from flask import Blueprint
from .routes import google_auth_bp

def create_google_auth_blueprint():
    return google_auth_bp