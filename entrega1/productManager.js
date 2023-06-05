//Realizar una clase “ProductManager” que gestione un conjunto de productos.
class ProductManager {
  //Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío
  constructor() {
    this.products = [];
  }

  // Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
  addProduct = (title, description, price, thumbnail, code, stock) => {
    //Cada producto que gestione debe contar con las propiedades: title, description, price, thumbnail, code, stock
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    // Verificar que se hayan completado todos los atributos del producto para agregarlo al array de productos
    if (Object.values(product).includes(undefined)) {
      console.log(`All product attributes should be defined\n`);
    } else {
      let codeExists = false;

      // Validar que no se repita el campo “code”
      this.products.forEach((prod) => {
        if (product.code === prod.code) {
          codeExists = true;
        }
      });

      if (codeExists === false) {
        // Al agregarlo, debe crearse con un id autoincrementable
        if (this.products.length === 0) {
          product.id = 1;
        } else {
          product.id = this.products[this.products.length - 1].id + 1;
        }
        // Pushear producto al array
        this.products.push(product);
        console.log(`Product code ${product.code} added succesfully\n`);
      } else {
        console.log(
          `Product code ${product.code} already exists for another product\n`
        );
      }
    }
  };

  //Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
  getProducts = () => {
    // Se evalua si el array tiene una longitud igual a 0
    if (this.products.length === 0) {
      // Se muestra por consola el error si no hay productos en el array
      console.log(`\nThere's no products at all\n`);
    } else {
      // Se itera el array y se muestran por consola los productos
      this.products.forEach((product) => {
        console.log(product);
      });
    }
  };

  // Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
  getProductById = (id) => {
    let i;

    // Se itera el array para encontrar un id de producto que coincida con el buscado
    this.products.forEach((product) => {
      if (product.id === id) {
        i = this.products.indexOf(product);
      }
    });

    // En caso de no coincidir ningún id, mostrar en consola un error “Not found”
    if (i > -1) {
      // Se muestra por consola el producto correspondiente al id buscado
      console.log(this.products[i]);
    } else {
      // Se muestra por consola el error “Not found”
      console.log(`Product id ${id} not found\n`);
    }
  };
}

// Se instancia la clase
const productManager = new ProductManager();

// Se consultan los productos con array vacío --> It should return "There's no products at all"
productManager.getProducts();

// Se agregan 3 productos al array --> It should return "Product code added succesfully"
productManager.addProduct(
  "Pelota Nike",
  "Pelota de futbol nro 5",
  20000,
  "no thumbnail present",
  95321,
  1631
);
productManager.addProduct(
  "Medias Adidas",
  "Medias Running 1/2 Caña",
  5675,
  "no thumbnail present",
  14215,
  893
);
productManager.addProduct(
  "Gorra Reebok",
  "Gorra Running Snapback",
  8300,
  "no thumbnail present",
  87352,
  1365
);

// Se intenta agregar un producto con código repetido al array --> It should return "Product code already exists for another product"
productManager.addProduct(
  "Zapatillas Adidas Ultraboost",
  "Zapatillas de Running",
  89000,
  "no thumbnail present",
  87352,
  5451
);

// Se intenta agregar un producto con un atributo faltante --> It should return "All product attributes should be defined"
productManager.addProduct(
  "Raqueta Babolat",
  "Raqueta de Tenis",
  "no thumbnail present",
  87352,
  5451
);

// Se consultan los productos una vez agregados --> It should return all the products info
productManager.getProducts();

// Se consulta un producto con id existente --> It should return the specific product info
productManager.getProductById(1);
productManager.getProductById(3);

// Se consulta un producto con id inexistente --> It should return "Product id not found"
productManager.getProductById(4);
productManager.getProductById(5);
