import fs from 'fs';

export class CsvFileReader {
    data: string[][] = [];

    constructor(public filename: string) {}

    read(): void {
        this.data = fs
            .readFileSync(this.filename, {
                encoding: 'utf-8', // tells readFileSync to return a string
            })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            });
    }
}
