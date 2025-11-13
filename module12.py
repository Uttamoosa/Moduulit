import requests

response = requests.get("https://api.chucknorris.io/jokes/random")

print(response.json()["value"])

# onkohan pakko tehdä tota 2 tehtävää kun ei tekis mieli tehä käyttäjää