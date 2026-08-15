import os

from dotenv import load_dotenv
from google import genai

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

print("GEMINI API KEY FOUND:", bool(api_key))

client = genai.Client(
    api_key=api_key
)


def analyze_data(data: dict, question: str):

    prompt = f"""
You are an AI assistant inside my application.

Analyze the following data:

{data}

User question:
{question}

Provide a clear and useful answer.
"""

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt
    )

    return response.text