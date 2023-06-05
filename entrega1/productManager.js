//Realizar una clase “ProductManager” que gestione un conjunto de productos.
class ProductManager {
  //Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío
  constructor() {
    this.products = [];
  }

  //Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
    // Validar que no se repita el campo “code” y que todos los campos sean obligatorios
    // Al agregarlo, debe crearse con un id autoincrementable
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

    if (this.products.length === 0) {
      product.id = 1;
    } else {
      product.id = this.products[this.products.length - 1].id + 1;
    }
    
    this.products.push(product);
  };

  //Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
  getProducts(){
    if (this.products.length === 0) {
        console.log(`There's no products at all\n`)
    } else {
        this.products.forEach(product => {
            console.log(product)
        });
    }
  }

  //Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
  getProductById(id){
    let i
    this.products.forEach(product => {
        if (product.id === id) {
            i = this.products.indexOf(product);
        }
    });

    //En caso de no coincidir ningún id, mostrar en consola un error “Not found”
    if (i > -1) {
        console.log(this.products[i])
    } else {
        console.log(`Product id ${id} not found\n`);
    };
  };
}


// Se instancia la clase
const productManager = new ProductManager();

// Se consultan los productos con array vacío --> It should return "There's no products at all"
productManager.getProducts();

// Se agregan los productos al array
productManager.addProduct("Pelota Nike", "Pelota de futbol nro 5", 20000, "no thumbnail present", 95321, 1631);
productManager.addProduct("Medias Adidas", "Medias Running 1/2 Caña", 5675, "no thumbnail present", 14215, 893);
productManager.addProduct("Gorra Reebok", "Gorra Running Snapback", 8300, "no thumbnail present", 87352, 1365);
productManager.addProduct("Ojotas Nike", "Ojotas de Playa", 24500, "no thumbnail present", 23456, 7813);

// Se agregan un producto con código repetido al array --> It should "The code already exists"
productManager.addProduct("Zapatillas Adidas Ultraboost", "Zapatillas de Running", 89000, "no thumbnail present", 87352, 5451);

// Se consultan los productos una vez agregados --> It should return all the products info
productManager.getProducts();

// Se consulta un producto con id existente --> It should return the specific product info
productManager.getProductById(2);
productManager.getProductById(4);

// Se consulta un producto con id inexistente --> It should return "Product id not found"
productManager.getProductById(6);
productManager.getProductById(8);