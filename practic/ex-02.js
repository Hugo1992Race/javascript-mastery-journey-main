const product = {
  name: "Смартфон",
  brand: "Samsung",
  price: 599.99,
  inStock: true,
  specifications: {
      screenSize: "6.5 дюймов",
      RAM: "8 ГБ",
      storage: "128 ГБ"
  },
  displayDetails: function () {
      console.log(`Товар: ${this.brand} ${this.name}, Цена: $${this.price}`);
  }
};