# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import logging
import os

app = Flask(__name__)
CORS(app)

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "phi3:mini"

logging.basicConfig(level=logging.INFO)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json(force=True)
    user_message = data.get("message", "").strip()

    if not user_message:
        return jsonify({"error": "Message required"}), 400

    system_prompt = (
        "You are a cloud infrastructure expert for JPN Cloud Solutions. "
        "Give short, professional answers related to cloud, DevOps, "
        "security, and infrastructure."
    )

    prompt = f"""
    System: {system_prompt}
    User: {user_message}
    Assistant:
    """

    payload = {
        "model": MODEL,
        "prompt": prompt,
        "stream": False,
        "options": {
            "temperature": 0.2,
            "num_predict": 150,   # limit tokens for faster reply
            "top_k": 20,
            "top_p": 0.9,
            "num_ctx": 2048
        }
    }

    try:
        response = requests.post(OLLAMA_URL, json=payload, timeout=60)
        result = response.json()

        reply = result.get("response", "").strip()

        return jsonify({"reply": reply})

    except Exception as e:
        logging.exception("Error")
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)