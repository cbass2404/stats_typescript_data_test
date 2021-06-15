# CSV Files

[Documentation](https://nodejs.org/api)

# Load

-   filesystem
    -   fs.readFileSync(path[,options])

```
$ npm install @types/node
```

```javascript
import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8', // tells readFileSync to return a string
});
```

# Parse

```javascript
const matches = fs
    .readFileSync('football.csv', {
        encoding: 'utf-8', // tells readFileSync to return a string
    })
    .split('\n')
    .map((row: string): string[] => {
        return row.split(',');
    });
```

# Analyze

```javascript
let manUnitedWins = 0;

for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
    }
}
```

# Report

```javascript
console.log(manUnitedWins);
```
