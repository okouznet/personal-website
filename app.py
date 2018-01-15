from flask import Flask, render_template

app = Flask(__name__)


# home page
@app.route('/')
def homepage():
    return render_template('index.html')


@app.route('/home')
def home():
    return render_template('index.html')

@app.route('/garch')
def garch():
    return render_template('garch.html')

if __name__ == '__main__':
    app.run()
