from flask import Flask,jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/")
def hello():
    return "wwww"

@app.route('/api/users', methods=['GET'])
def get_number_male_female():
    male_count = 60
    female_count = 40
    
    return jsonify({'male': male_count, 'female': female_count})

if __name__ == '__main__':
    app.run(debug=True)