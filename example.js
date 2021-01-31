const data = require("./example.json");
const axios = require("axios").default;
// use this key, it's a public key.
axios.defaults.headers.common['X-Meili-API-Key'] = '96a2e7ade35243ad89658d64d62f74ff9a38b4e1a276a3a3f6689004b2af48fd';

const fridge = {
  "Dough": 100,
  "Pepperoni": 10,
  "Cheese": 20,
  "Mushroom": 10,
  "Onion": 10,
  "Sausage": 10
};

async function stuff() {
  const response = await axios.post('https://meili.yoik.software/indexes/recipes/search', {
    facetFilters: [["ingredients:Milk"]]
  });
  const data = response.data.hits;

  const results = data.sort((a, b) => {
    a.requirements = {};
    let aSum = 0;
    const aTotal = Object.keys(a.quantities).length;
    for (const [item, needs] of Object.entries(a.quantities)) {
      let has = fridge[item] || 0;
      if (has > needs) has = needs;
      const difference = needs - has;
      const rating = has / needs;
      a.requirements[item] = difference;
      aSum += rating;
    }
    a.score = aSum / aTotal;

    b.requirements = {};
    let bSum = 0;
    const bTotal = Object.keys(b.quantities).length;
    for (const [item, needs] of Object.entries(b.quantities)) {
      let has = fridge[item] || 0;
      if (has > needs) has = needs;
      const difference = needs - has;
      const rating = has / needs
      b.requirements[item] = difference;
      bSum += rating;
    }
    b.score = bSum / bTotal;

    if (a.score < b.score) return 1;
    if (a.score > b.score) return -1;
    return 0;
  });

  return results.map((x) => {
    return {
      id: x.id,
      title: x.title,
      requirements: x.requirements,
      score: x.score
    }
  });
}

// use the returned ID in each individual card component render to display rich data like image
// get that rich data like this:
/*
const response = await axios.get(`https://strapi.yoik.software/recipes/${x.id}`)
const data = response.data
*/

stuff().then((returned) => {
  console.log(returned);
}).catch((error) => {
  console.log(error);
});