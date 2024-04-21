import products from './products.json';

// Inicializar un objeto vacío para almacenar las categorías únicas y sus subcategorías
const uniqueCategories = {};

// Iterar sobre cada producto para extraer las categorías únicas y sus subcategorías
products.products.forEach(product => {
  if (!uniqueCategories[product.category]) {
    uniqueCategories[product.category] = [];
  }
  // Asegurarse de que la subcategoría no se repita antes de agregarla al array
  if (!uniqueCategories[product.category].includes(product.subCategory)) {
    uniqueCategories[product.category].push(product.subCategory);
  }
});

// Crear una tabla de categorías
const categoryTable = (
  <table>
    <thead>
      <tr>
        <th>Categoría</th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(uniqueCategories).map(category => (
        <tr key={category}>
          <td>{category}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// Exportar las categorías únicas, los datos de productos y la tabla de categorías
export { uniqueCategories, products, categoryTable };