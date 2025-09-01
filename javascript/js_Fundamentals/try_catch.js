// try catch and finally block example

try {
    // Code that may throw an error
    let result = riskyFunction();
    console.log(`Result: ${result}`);
} catch (error) {
    // Handle the error
    console.log(`Error occurred: ${error.message}`);
    console.error(`Error stack: ${error.stack}`);
    console.error(`Error code: ${error.code}`);
    console.error(`Error details: ${error.details}`);
    console.error(`Error timestamp: ${new Date().toISOString()}`);
    console.error(`Error user: ${error.user}`);
    console.error(`Error location: ${error.location}`);
    console.error(`Error context: ${error.context}`);
    console.error(`Error additional info: ${error.additionalInfo}`);
    console.error(`Error user: ${error.user}`);
    console.log(`error name: ${error.name}`);
} finally {
    // This block will always execute
    console.log("Cleanup actions can be performed here.");
}
