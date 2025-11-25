from flask import Flask, send_from_directory
from flask import request, jsonify

app = Flask(__name__, static_folder='site', static_url_path='')

@app.route('/')

def page():
      return send_from_directory('site', 'index.html')

if __name__ == '__main__':
    app.run(debug=True)