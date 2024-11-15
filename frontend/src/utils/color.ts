export const getRandomColor = (index: number): string => {
    const colors = [
        "bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500",
        "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-teal-500",
        "bg-orange-500", "bg-gray-500", "bg-lime-500", "bg-cyan-500"
    ];

    // It returns one of the colors above. With the modulo operator I can wrap the index around if it exceeds the length of colors array
    return colors[index % colors.length];
}
