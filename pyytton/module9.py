import random

class race():
    def __init__(self, name, length, participants):
        self.name = name
        self.length = length
        self.participants = participants

    def pass_time(self):
        carlist = self.participants

        for car in carlist:
            car.accelerate(random.randrange(-10,15))
            car.travel(1)
        
    def print_state(self):
        self.participants.sort(key=lambda x: x.traveled, reverse=True)

        print("---")
        for car in self.participants:
            print(f"{car.register}: {car.traveled} km at {car.cur_speed} km/h")

    def check_end(self):
        if any(car.traveled > 10000 for car in self.participants):
            return True
        
class car():
    def __init__(self, register, max_speed):
        self.register = register
        self.max_speed = max_speed
        self.cur_speed = 0
        self.traveled = 0

    def accelerate(self, change):
        if change + self.cur_speed > self.max_speed:
            self.cur_speed = self.max_speed

        elif change + self.cur_speed < 0:
            self.cur_speed = 0
        
        else:
            self.cur_speed += change

    def travel(self, time):
        self.traveled += self.cur_speed * time

class electric_car(car):
    def __init__(self, register, max_speed, battery):
        super().__init__(register, max_speed)
        self.battery = battery

class combustion_car(car):
    def __init__(self, register, max_speed, fuel):
        super().__init__(register, max_speed)
        self.fuel = fuel

if __name__ == "__main__":
    carlist = [car(f"ABC-{i}", random.randrange(100,200)) for i in range(10)]

    r = race("Suuri romuralli", 8000, carlist)

    while True:
        r.print_state()
        r.pass_time()
        
        if r.check_end():
            r.print_state()
            break
    
    print("-----")

    print("Electric:")
    electric = electric_car("ABC-15", 180, 52.5)
    electric.accelerate(random.randrange(10, 180))
    electric.travel(3)
    print(f"{electric.register}: {electric.traveled} km at {electric.cur_speed} km/h")

    print("---")

    print("Combustion:")
    combustion = combustion_car("ACD-123", 165, 32.3)
    combustion.accelerate(random.randrange(25,165))
    combustion.travel(3)
    print(f"{combustion.register}: {combustion.traveled} km at {combustion.cur_speed} km/h")