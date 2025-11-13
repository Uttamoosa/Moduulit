class building():
    def __init__(self, lowest: int, highest: int, elevators: int):
        self.elevators = [elevator(highest, lowest) for i in range(elevators)]

    def move_elevator(self, number: int, floor: int):
        self.elevators[number].move(floor)

    def emergency(self):
        for i in range(len(self.elevators)):
            self.elevators[i].move(self.elevators[i].lowest)
            
class elevator():
    def __init__(self, lowest: int, highest: int):
        self.lowest = lowest
        self.highest = highest
        self.floor = lowest

    def move(self, floor):
        while self.floor != floor:
            if self.floor < floor:
                self.up()
            
            else:
                self.down()

    def up(self):
        self.floor += 1

    def down(self):
        self.floor -= 1

if __name__ == "__main__":
    b = building(1, 20, 4)
    
    b.emergency()