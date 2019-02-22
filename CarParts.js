function modifyCar(carParts) {
    let modifiedCar = {};
    modifiedCar.model = carParts.model;
    let engine;
    if (carParts.power <= 90) {
        engine = {
            power: 90,
            volume: 1800
        }
    } else if (carParts.power <= 120) {
        engine = {
            power: 120,
            volume: 2400
        }
    } else if (carParts.power <= 200) {
        engine = {
            power: 200,
            volume: 3500
        }

    }

modifiedCar.engine = engine;
modifiedCar.carriange = {
    type: carParts.carriange,
    color: carParts.color
}

if (carParts.wheelsize%2===0){
    carParts.wheelsize--;
}
let wheels =[];
for (let i = 0; i < 4; i++) {
    wheels.push(carParts.wheelsize)    
}
modifiedCar.wheels = wheels

}
modifyCar({
    model: 'VW GOLF',
    power: 90,
    color: 'blue',
    carriange: 'hatchback',
    wheelsize: 14
})