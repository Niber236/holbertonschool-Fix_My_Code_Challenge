#!/usr/bin/node
/*
    Print a square
*/

if (process.argv.length < 3) {
    process.stderr.write("Missing argument\n");
    process.exit(1);
}

// CORRECTION : Changement de la base 16 à la base 10
const size = parseInt(process.argv[2], 10);

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}
