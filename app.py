from flask import Flask, jsonify, render_template
from bson.json_util import dumps

# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
import pymongo

# Create an instance of our Flask app.
app = Flask(__name__)

# Create connection variable
# conn = 'mongodb://ds261648.mlab.com:61648'

conn = 'mongodb://uci:Today123!@ds261648.mlab.com:61648/student_loan_db'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# Connect to a database. Will create one if not already available.
db = client.get_default_database()



# Set route
@app.route('/')
def index():

    # Return the template with the teams list passed in
    return render_template('index.html')

@app.route("/test")
def test():
    data = [{
        "x": [1, 2, 3, 4, 5],
        "y": [1, 2, 4, 8, 16]}]

    return jsonify(data)
    
@app.route("/byage")
def byage():
    data = [{
        "x": [1, 2, 3, 4, 5],
        "y": [1, 2, 4, 8, 16]}]

    return jsonify(data)
    
@app.route("/bysize")
def bysize():
    bysize = list(db.by_size.find())
    print(bysize)
    result = dumps(bysize)
    return render_template('index.html', bysize=result)


@app.route("/bylocation")
def bystate():
    bylocation = list(db.by_location1.find())
	
    result = dumps(bylocation)
    return result
    
if __name__ == "__main__":
    app.run(debug=True)
