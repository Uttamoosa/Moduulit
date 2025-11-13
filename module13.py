from flask import Flask, jsonify

app = Flask(__name__)

def isPrime(n):
    if n <= 1:
        return False

    for i in range(2, n):
        if n % i == 0:
            return False

    return True

@app.route("/alkuluku/<int:num>")
def alkuluku(num):
    return jsonify({"Number": num, "isPrime": isPrime(num)})

if __name__ == "__main__":
    app.run(debug=True)