from app import app
from flask import render_template, request, jsonify
from .models import Message, User
from datetime import datetime


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/message", methods=["POST"])
def save_msg():
    form = request.form
    author = form.get("author")
    content = form.get("content")
    msg = Message(author=author, content=content, time=datetime.now())
    msg.save()
    return jsonify(status='success')

@app.route("/login", methods=["GET"])
def to_register_page():
    return render_template("login.html")

@app.route("/register", methods=["POST"])
def register():
    form = request.form
    username = form.get("username")
    name = form.get("name")
    password = form.get("password")
    user = User(username=username, name=name, password=password)
    user.save()
    return jsonify(status='success')

@app.route("/messages")
def list_msg():
    page = request.args.get("page")
    searchValue = request.args.get("searchValue")
    if searchValue:
        paginator =Message.objects(content__contains=searchValue).order_by('-time').paginate(page=int(page), per_page=5)
    else:
        paginator =Message.objects.order_by('-time').paginate(page=int(page), per_page=5)

    pager = {
        'page': paginator.page,
        'pages': paginator.pages,
        'messages': [m.to_json() for m in paginator.items]
    }
    return jsonify(status="success", pager=pager)


