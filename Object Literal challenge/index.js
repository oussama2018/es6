function addressMaker(address){
    const {city, state} = address
    const newAdress={
        city,
        state,
        country: 'united states'
    }
    console.log(`${newAdress.city} ${newAdress.state} ${newAdress.country}`)
}

addressMaker({city:'austion',state:'texas'})