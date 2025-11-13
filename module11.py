class julkaisu():
    def __init__(self, nimi):
        self.nimi = nimi

class kirja(julkaisu):
    def __init__(self, nimi, kirjoittaja, sivumaara):
        super().__init__(nimi)
        self.kirjoittaja = kirjoittaja
        self.sivumaara = sivumaara
    
    def tulosta_tiedot(self):
        print("---")
        print(f"{self.nimi}")
        print(f"Kirjoittaja: {self.kirjoittaja}")
        print(f"Sivuja: {self.sivumaara}")

class lehti(julkaisu):
    def __init__(self, nimi, paatoimittaja):
        super().__init__(nimi)
        self.paatoimittaja = paatoimittaja

    def tulosta_tiedot(self):
        print("---")
        print(f"{self.nimi}")
        print(f"Toimittaja: {self.paatoimittaja}")

if __name__ == "__main__":
    aku = lehti("Aku Ankka", "Aki Hyyppä")
    hytti = kirja("Hytti n:o 6", "Rosa Liksom", 200)

    aku.tulosta_tiedot()
    hytti.tulosta_tiedot()