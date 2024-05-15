from flask import Flask,jsonify,make_response
from flask_sqlalchemy import SQLAlchemy
from os import environ

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DB_URL')
    db.init_app(app)

    with app.app_context():
        db.create_all()

    @app.route('/working',methods=['GET'])
    def test():
        return make_response(jsonify({'message':'working'}))

    return app