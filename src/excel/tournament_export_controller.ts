import * as path from 'path'
import Excel, { ErrorValue, Workbook } from 'exceljs';
import { Error } from 'mongoose';

type Team = string[];


export var openTournament = function (fname: string) {
    return new Promise<Team[]>(function (resolve, reject) {

        const filePath = path.resolve(fname);
        var teams: Team[] = [];
        const workbook = new Excel.Workbook();

        workbook.csv.readFile(filePath)
            .then(() => {
                const sheet = workbook.worksheets[0];
                const rows = sheet.getRows(1, sheet.actualRowCount);
                var teams: Team[] = [];
                teams = rows?.map((row): Team => {
                    return getCellValue(row, 1).split(";", 2)
                })!;
                resolve(teams);
            })
            .catch((err) => {
                reject(err.message);
            })
    })
}

function getCellValue(row: Excel.Row, cellIndex: number) {
    const cell = row.getCell(cellIndex);
    return cell.value ? cell.value.toString() : '';
};
