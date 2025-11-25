from flask import Flask, send_from_directory
from flask import request, jsonify
import os
import json

app = Flask(__name__, static_folder='site', static_url_path='')

@app.route('/')

def page():
      return send_from_directory('site', 'index.html')

@app.route('/data', methods=["POST"])

def update():
    datajson = request.get_json()

    with open("Member.json", "w") as f:
        json.dump(datajson, f, indent=4)

    return jsonify({"status": "ok"})

@app.route('/start', methods=["GET"])

def read():

    with open("Member.json", "r") as f:
        data = json.load(f)
        
    return data


if __name__ == '__main__':
    app.run(debug=True)