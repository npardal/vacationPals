"""
from flask import Flask


app = Flask(__name__)

#members api route 

@app.route("/members")
def members(): 
    return {"members": ["Member1", "Member2", "Member3"]}

if __name__ == "_main_": 
    app.run(debug=True)

    """