function calculateBodaFare(distanceInKm){
    const BaseFare = 50;
    const chargePerKm = 15;
    const DistanceFare = distanceInKm * chargePerKm
    const total = BaseFare + DistanceFare
}

console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
console.log(`Ukikalia Pikipiki: KES ${BaseFare}`);
console.log(`Mpaka Uko: KES ${DistanceFare}`);
console.log(`Total: KES ${total}`);
console.log('Panda Pikipiki!')