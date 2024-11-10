import {simulateDelay} from "../utils/delay";
import {categories, products} from "../_db";

const productResolver = {
    Query: {
        products: async (_, {categoryId}) => {
            if (categoryId)
                return simulateDelay(() => products.filter((product) => product.category.id === categoryId));
            return simulateDelay(() => products);
        },
        product: async (_, {id}) => {
            return simulateDelay(() => products.find((product) => product.id === id));
        }
    },
    Mutation: {
        createProduct: async (_, {input}) => {
            const newProduct = {
                id: String(products.length + 1),
                ...input,
                category: categories.find((category) => category.id === input.category.id)
            };
            products.push(newProduct);
            return simulateDelay(() => newProduct);
        },
        updateProduct: async (_, {id, input}) => {
            const product = products.find((product) => product.id === id);
            if (!product) throw new Error("Product not found");
            const category = categories.find((category) => category.id === input.category.id);
            if (!category) throw new Error("Category not found");

            // TODO: check se funziona
            Object.assign(product, {...input, category});
            return simulateDelay(() => product);
        },
        deleteProduct: async (_, {id}) => {
            const index = products.findIndex((product) => product.id === id);
            products.map((product, index) => product.id = `${index}`)

            if (index === -1) {
                throw new Error("Product not found");
            }

            const deleted = products.splice(index, 1);

            return simulateDelay(() => deleted[0]);
        }
    }
}

export default productResolver;
