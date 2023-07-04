from flask import Flask, render_template
import os

app = Flask(__name__, static_folder=os.path.abspath('static/'))

@app.route('/')
def index():
    return render_template('Index.html')

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=1881)
    #app.run()