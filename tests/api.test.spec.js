import {test, expect} from '@playwright/test';

test('Api get request for dec', async({request}) => {

    const response =await request.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
    expect(response.status()).toBe(200)
    //const shuffleid = response.body.shuffleid
}
)

test('Api get request for new deck and shuffle', async({request}) => {

    const response =await request.get("https://deckofcardsapi.com/api/deck/new/")
    expect(response.status()).toBe(200)
    let id = await response.body().then(b => { 
        let data = JSON.parse(b.toString()); 
        return data.deck_id;
    });
    console.log(id)
    const responsesecond  = await request.get(`https://deckofcardsapi.com/api/deck/${id}/shuffle/`)
    const responsethird  = await request.get(`https://deckofcardsapi.com/api/deck/${id}/shuffle/?remaining=true`)
}
)
test('Api post reqqest for adding pile', async({request}) => {

    const response =await request.get("https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH")
    expect(response.status()).toBe(200)
    let id = await response.body().then(b => { 
        let data = JSON.parse(b.toString()); 
        return data.deck_id;
    });
    console.log(id)
    const responsesecond  = await request.get(`https://deckofcardsapi.com/api/deck/${id}/pile/Naseef/add/?cards=AS,2S`)
}
)

test('Deal three cards to each of two players', async({request}) => {

    const response =await request.get("https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH")
    expect(response.status()).toBe(200)
    let id = await response.body().then(b => { 
        let data = JSON.parse(b.toString()); 
        return data.deck_id;
    });
    console.log(id)
    const responsesecond  = await request.get(`https://deckofcardsapi.com/api/deck/${id}/pile/Naseef/add/?cards=AS,2S`)
    let id2 = await response.body().then(b => { 
        let data = JSON.parse(b.toString()); 
        return data.deck_id;
    });
    const responsethrid = await request.get(`https://deckofcardsapi.com/api/deck/${id2}/pile/Naseef/shuffle/`)
}
)