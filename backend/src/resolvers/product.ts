import {simulateDelay} from "../utils/delay";
import {categories, products} from "../_db";

const productResolver = {
    Query: {
        products: async (_, {categoryId}) => {
            console.log("categoryId", categoryId);
            if (categoryId)
                return simulateDelay(() => products.filter((product) => product.category.id === categoryId));
            return simulateDelay(() => products);
        },
        product: async (_, {id}) => {
            console.log("product id", id);
            console.log("product", products.find((product) => product.id === id));
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
            const productIndex = products.findIndex((product) => product.id === id);
            if (productIndex === -1) throw new Error("Product not found");
            const category = categories.find((category) => category.id === input.category.id);
            if (!category) throw new Error("Category not found");

            products[productIndex] = Object.assign(products[productIndex], {...input, category});
            console.log(products[productIndex]);
            return simulateDelay(() => products[productIndex]);
        },
        deleteProduct: async (_, {id}) => {
            const productIndex = products.findIndex((product) => product.id === id);
            if (productIndex === -1) throw new Error("Product not found");
            const product = products[productIndex];

            products.splice(productIndex, 1);
            products.map((product, index) => product.id = `${index + 1}`)

            return simulateDelay(() => product);
        }
    }
}

export default productResolver;
