from flask import Flask
import time

# 'static_folder': tells Flask where the static folder is (by default it is a 'static' directory located in the same directory of the application).
# 'static_url_path': tells Flask what is the URL prefix for all static files (by default this is '/static').
app = Flask(__name__, static_folder='../dist', static_url_path='/')

@app.route('/index')
def index():
    return app.send_static_file('index.html')

@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}
