from fastapi import APIRouter
from pydantic import BaseModel

from app.services.google_auth import verify_google_token

router = APIRouter()


class GoogleLoginRequest(BaseModel):
    token: str


@router.post("/google")
def google_login(data: GoogleLoginRequest):

    user = verify_google_token(data.token)

    return {
        "success": True,
        "user": {
            "name": user["name"],
            "email": user["email"],
            "picture": user["picture"],
            "googleId": user["sub"],
        },
    }