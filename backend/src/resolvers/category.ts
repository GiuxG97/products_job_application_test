import {Category} from "../__generated__/graphql-schema-types";
import {simulateDelay} from "../utils/delay";

const categoryResolver = {
    Query: {
        categories: async () => {
            return simulateDelay(() => Object.values(Category));
        },
    }
}

export default categoryResolver;
