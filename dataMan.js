const fs = require('fs');

// Specify the input file path
const inputFile = 'input_data.json';

// Read the input JSON file
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading input file:", err);
        return;
    }

    // Parse the input JSON data
    const inputData = JSON.parse(data);

    // Calculate the average age
    const averageAge = inputData.reduce((acc, curr) => acc + curr.age, 0) / inputData.length;

    // Filter people aged 30 and older
    const oldPeople = inputData.filter(item => item.age >= 30);

    // Sort the list of older people by name
    oldPeople.sort((a, b) => a.name.localeCompare(b.name));

    // Create the final output object
    const finalOutput = {
        averageAge: averageAge,
        peopleOverThirtySorted: oldPeople
    };

    // Specify the output file path
    const output_file = "output.json";

    // Write the final output to the output JSON file
    fs.writeFile(output_file, JSON.stringify(finalOutput, null, 2), (writeError) => {
        if (writeError) {
            console.error('Error writing output JSON file');
            return;
        };
        console.log("output_file ready");
    });
});
