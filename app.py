from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "App is running"

if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def training_page():
    return render_template("training_events.html")

@app.route("/registrations-page")
def registrations_page():
    return render_template("registrations.html")

if __name__ == "__main__":
    app.run(debug=True)