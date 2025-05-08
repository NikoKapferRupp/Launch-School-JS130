import { p } from './log.js'



let itemCreator = function(name, category, quantity) {
  let isNameValid = (value) => new RegExp('[a-zA-Z]{5}', 'g').test(value.replaceAll(' ', ''))
  let isCategoryValid = (value) => new RegExp('[a-zA-Z]{5}', 'g').test(value) && !value.includes(' ');

  if(isNameValid(name) && isCategoryValid(category) && quantity >= 0) {
    return true;
  } else {
    return { notValid: true }
  }
}

let Itemmanager = {
  items: [],
  create(name, category, quantity) {
    if (itemCreator(name, category, quantity)) {
      this.items.push({
        SKU: SKUCreator(name, category),
        name,
        category,
        quantity
      })
    }
  },
  update(SKU, obj) {
    this.items.forEach(entry => {
      if (entry.SKU === SKU) {
        Object.assign(entry, obj)
      }
    })
  },
  delete(SKU) {
    let toDelete = [];
    this.items.forEach((entry, index) => {
      if (entry.SKU === SKU) {
        toDelete.push(index)
      }
    })
    toDelete.forEach(index => this.items.splice(index, 1))
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0)
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category)
  }
} 

let SKUCreator = (name, category) => {
  name = name.toUpperCase();
  category = category.toUpperCase()
  let splitName = name.split(' ')
  if (splitName.length < 2) {
    return name.slice(0, 3) + category.slice(0, 2)
  } else {
    return splitName[0].slice(0, 2) + splitName[1][0] + category.slice(0, 2)
  }
}
Object.assign(Object.getPrototypeOf(Itemmanager), SKUCreator)

let ReportManager = {
  items,
  init(Itemmanager) {
    this.items = Itemmanager
  },

  createReporter(SKU) {
    let currentItem = this.items.items
    return {

      itemInfo() {
        for (const key in object) {
          p(`${key}: `)
        }
      }
    }
  }
}


Itemmanager.create('Tennisball', 'Balls', 0)
Itemmanager.create('Running Shoes', 'Shoes', 2)

//p(Itemmanager.items)
Itemmanager.update('TENBA', { quantity: 0 });

//Itemmanager.delete('TENBA')

p(Itemmanager.inStock())
p(Itemmanager.itemsInCategory('Balls'))