'use strict';

//list of truckers
//useful for ALL 5 exercises
var truckers = [{
  'id': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
  'name': 'les-routiers-bretons',
  'pricePerKm': 0.05,
  'pricePerVolume': 5
}, {
  'id': '165d65ec-5e3f-488e-b371-d56ee100aa58',
  'name': 'geodis',
  'pricePerKm': 0.1,
  'pricePerVolume': 8.5
}, {
  'id': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
  'name': 'xpo',
  'pricePerKm': 0.10,
  'pricePerVolume': 10
}];

//list of current shippings
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var deliveries = [{
  'id': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
  'shipper': 'bio-gourmet',
  'truckerId': 'f9@a3ff-591b-4d5b-9b67-c7e08cba9791',
  'distance': 100,
  'volume': 4,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'convargo': 0
  }
}, {
  'id': '65203b0a-a864-4dea-81e2-e389515752a8',
  'shipper': 'librairie-lu-cie',
  'truckerId': '165d65ec-5e3f-488e-b371-d56ee100aa58',
  'distance': 650,
  'volume': 12,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'convargo': 0
  }
}, {
  'id': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
  'shipper': 'otacos',
  'truckerId': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
  'distance': 1250,
  'volume': 30,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'convargo': 0
  }
}];

//list of actors for payment
//useful from exercise 5
const actors = [{
  'deliveryId': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
  'payment': [{
    'who': 'shipper',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'trucker',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'convargo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'deliveryId': '65203b0a-a864-4dea-81e2-e389515752a8',
  'payment': [{
    'who': 'shipper',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'trucker',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'convargo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'deliveryId': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
  'payment': [{
    'who': 'shipper',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'trucker',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'convargo',
    'type': 'credit',
    'amount': 0
  }]
}];


//Exercice1

for (var i = 0; i< deliveries.length; i++)
    for (var j= 0; j < 3; j++) {
         if(truckers[j]['id']==deliveries[i]['truckerId']){
                deliveries[i]['price']=truckers[j]['pricePerKm']*deliveries[i]['distance']+truckers[j]['pricePerVolume']*deliveries[i]['volume']
        }
    }
    

//Exercice2

for (var i = 0; i< deliveries.length; i++)
    for (var j= 0; j < 3; j++) {
         if(truckers[j]['id']==deliveries[i]['truckerId']){
            if(deliveries[i]['volume']> 5){
                deliveries[i]['price']=(truckers[j]['pricePerKm']*deliveries[i]['distance']+truckers[j]['pricePerVolume']*deliveries[i]['volume'])*0.9
            }
            if(deliveries[i]['volume']> 10){
                deliveries[i]['price']=(truckers[j]['pricePerKm']*deliveries[i]['distance']+truckers[j]['pricePerVolume']*deliveries[i]['volume'])*0.7
            }
            if(deliveries[i]['volume']> 25){
                deliveries[i]['price']=(truckers[j]['pricePerKm']*deliveries[i]['distance']+truckers[j]['pricePerVolume']*deliveries[i]['volume'])*0.5
            }
            else{
                deliveries[i]['price']=(truckers[j]['pricePerKm']*deliveries[i]['distance']+truckers[j]['pricePerVolume']*deliveries[i]['volume'])
            }
        }
    }


//Exercice3
for (var i = 0; i< deliveries.length; i++)
    for (var j= 0; j < 3; j++) {
         if(truckers[j]['id']==deliveries[i]['truckerId']){
            if(deliveries[i]['volume']> 5){
                deliveries[i]['commission']['insurance']=((truckers[j]['pricePerKm']*deliveries[i]['distance']+truckers[j]['pricePerVolume']*deliveries[i]['volume'])*0.9)*0.15
                deliveries[i]['commission']['treasury']=Math.trunc(deliveries[i]['distance']/500)*1
                deliveries[i]['commission']['convargo']=deliveries[i]['commission']['insurance']- deliveries[i]['commission']['treasury']
            }
            if(deliveries[i]['volume']> 10){
                deliveries[i]['commission']['insurance']=((truckers[j]['pricePerKm']*deliveries[i]['distance']+truckers[j]['pricePerVolume']*deliveries[i]['volume'])*0.7)*0.15
                deliveries[i]['commission']['treasury']=Math.trunc(deliveries[i]['distance']/500)*1
                deliveries[i]['commission']['convargo']=deliveries[i]['commission']['insurance']- deliveries[i]['commission']['treasury']
            }
            if(deliveries[i]['volume']> 25){
                deliveries[i]['commission']['insurance']=((truckers[j]['pricePerKm']*deliveries[i]['distance']+truckers[j]['pricePerVolume']*deliveries[i]['volume'])*0.5)*0.15
                deliveries[i]['commission']['treasury']=Math.trunc(deliveries[i]['distance']/500)*1
                deliveries[i]['commission']['convargo']=deliveries[i]['commission']['insurance']- deliveries[i]['commission']['treasury']
            }
            else{
                deliveries[i]['commission']['insurance']=((truckers[j]['pricePerKm']*deliveries[i]['distance']+truckers[j]['pricePerVolume']*deliveries[i]['volume']))*0.15
                deliveries[i]['commission']['treasury']=Math.trunc(deliveries[i]['distance']/500)*1
                deliveries[i]['commission']['convargo']=deliveries[i]['commission']['insurance']- deliveries[i]['commission']['treasury']
            }
        }
    }

//Exercice4
for (var i = 0; i< deliveries.length; i++){
    for (var j= 0; j < 3; j++) {
        if(deliveries[i]['options']['deductibleReduction']==true){
            if(truckers[j]['id']==deliveries[i]['truckerId']){
                var charge = Math.trunc(deliveries[i]['volume'])
                if(deliveries[i]['volume']> 5){
                    
                    deliveries[i]['commission']['insurance']=((truckers[j]['pricePerKm']*deliveries[i]['distance']+truckers[j]['pricePerVolume']*deliveries[i]['volume'])*0.9)*0.15
                    deliveries[i]['commission']['treasury']=Math.trunc(deliveries[i]['distance']/500)*1
                    deliveries[i]['commission']['convargo']=deliveries[i]['commission']['insurance']- deliveries[i]['commission']['treasury']+charge
            }
             if(deliveries[i]['volume']> 10){
                    deliveries[i]['commission']['insurance']=((truckers[j]['pricePerKm']*deliveries[i]['distance']+truckers[j]['pricePerVolume']*deliveries[i]['volume'])*0.7)*0.15
                     deliveries[i]['commission']['treasury']=Math.trunc(deliveries[i]['distance']/500)*1
                     deliveries[i]['commission']['convargo']=deliveries[i]['commission']['insurance']- deliveries[i]['commission']['treasury']+charge
            }
              if(deliveries[i]['volume']> 25){
                    deliveries[i]['commission']['insurance']=((truckers[j]['pricePerKm']*deliveries[i]['distance']+truckers[j]['pricePerVolume']*deliveries[i]['volume'])*0.5)*0.15
                    deliveries[i]['commission']['treasury']=Math.trunc(deliveries[i]['distance']/500)*1
                    deliveries[i]['commission']['convargo']=deliveries[i]['commission']['insurance']- deliveries[i]['commission']['treasury']+charge
            }
            else{
                deliveries[i]['commission']['insurance']=((truckers[j]['pricePerKm']*deliveries[i]['distance']+truckers[j]['pricePerVolume']*deliveries[i]['volume']))*0.15
                deliveries[i]['commission']['treasury']=Math.trunc(deliveries[i]['distance']/500)*1
                deliveries[i]['commission']['convargo']=deliveries[i]['commission']['insurance']- deliveries[i]['commission']['treasury']+charge
            }
        }
    }
    }

//Exercice5
for (var i = 0; i< actors.length; i++){
    for (var j = 0; j< deliveries.length; j++){
            if(actors['deliveryId']==deliveries['id']){
                  if(deliveries[i]['options']['deductibleReduction']==true){  
                             actors[i]['deliveryId'][0]=deliveries[i]['price']+1000
                  }
                  else{
                    actors[i]['deliveryId'][0]=deliveries[i]['price']+200
                 }
                   actors[i]['deliveryId'][1]=deliveries[i]['price']-deliveries[j]['commission']['insurance']-deliveries[j]['commission']['treasury']-deliveries[i]['commission']['convargo']
                   actors[i]['deliveryId'][2]=deliveries[j]['commission']['insurance']
                   actors[i]['deliveryId'][3]=deliveries[j]['commission']['treasury']
                   actors[i]['deliveryId'][4]=deliveries[i]['commission']['convargo']
            }
    }
}


console.log(truckers);
console.log(deliveries);
console.log(actors);


