from fastapi import APIRouter
from pydantic import BaseModel

from app.services.ai_service import analyze_data
router = APIRouter()


class AnalyzeRequest(BaseModel):
    data: dict
    question: str


@router.post("/analyze")
def analyze(request: AnalyzeRequest):

    result = analyze_data(
        request.data,
        request.question
    )

    return {
        "success": True,
        "analysis": result
    }