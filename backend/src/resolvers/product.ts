import {simulateDelay} from "../utils/delay";
import {products} from "../_db";

const productResolver = {
    Query: {
        products: async () => {
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
                ...input
            };
            products.push(newProduct);
            return simulateDelay(() => newProduct);
        },
        updateProduct: async (_, {id, input}) => {
            const product = products.find((product) => product.id === id);
            if (!product) throw new Error("Product not found");

            Object.assign(product, input);
            return simulateDelay(() => product);
        },
        deleteProduct: async (_, {id}) => {
            const index = products.findIndex((product) => product.id === id);

            if (index === -1) {
                throw new Error("Product not found");
            }

            const deleted = products.splice(index, 1);

            return simulateDelay(() => deleted[0]);
        }
    }
}

export default productResolver;