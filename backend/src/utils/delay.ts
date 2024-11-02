export const simulateDelay = async (operationFn: any, delay = 10) => {
    await new Promise((resolve) => setTimeout(resolve, delay));
    return await operationFn();
}
