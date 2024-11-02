import {simulateDelay} from "../utils/delay";
import {categories} from "../_db";

const categoryResolver = {
    Query: {
        categories: async () => {
            return simulateDelay(() => categories);
        },
    }
}

export default categoryResolver;
