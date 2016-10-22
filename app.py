from flask import Flask, render_template

app = Flask(__name__)


#home page
@app.route('/')
def homepage():
    return render_template('index.html')

@app.route('/home')
def home():
    return render_template('index.html')
if __name__ == '__main__':
    app.run()

@app.route('/finance_project')
def finance():
    return True

@app.route('/piano_project')
def piano():
    return True
