function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`Creating a ${size} shirt with the message: "${message}".`);
}

// Calling the function with default values
make_shirt();
make_shirt("medium");

// Calling the function with different size and message
make_shirt("small", "Hello, World!");
