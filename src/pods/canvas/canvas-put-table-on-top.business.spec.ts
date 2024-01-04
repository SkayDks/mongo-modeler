import { putTableOnTop } from './canvas.business';
import { TableVm } from './canvas.vm';

describe('putTabbleOnTop', () => {
  it('should return empty array, if I have a table and the array is empty', () => {
    // Arrange
    const tables: TableVm[] = [];
    const tableId = 'someTableId';

    // Act
    const result = putTableOnTop(tableId, tables);

    // Assert
    expect(result).toEqual([]);
  });

  it('should return the same array, if table and array with one element,but it is not the same as table', () => {
    // Arrange
    const tables: TableVm[] = [
      { id: '1', fields: [], tableName: 'Table 1', x: 0, y: 0 },
    ];
    const tableId = '2';

    // Act
    const result = putTableOnTop(tableId, tables);

    // Assert
    expect(result).toEqual(tables);
  });

  it("should return an array with a single table, which is the same table if it's the only one", () => {
    // Arrange
    const TableId = '1';
    const tables: TableVm = {
      id: TableId,
      fields: [],
      tableName: 'Table 1',
      x: 0,
      y: 0,
    };
    const arrayWithOnlyTable: TableVm[] = [tables];

    // Act
    const result = putTableOnTop(TableId, arrayWithOnlyTable);

    // Assert
    expect(result).toEqual(arrayWithOnlyTable);
  });

  it("should return array with table on top if it's already in the first position", () => {
    // Arrange
    const tableId = '1';
    const tables: TableVm[] = [
      { id: tableId, fields: [], tableName: 'Table 1', x: 0, y: 0 },
      { id: '2', fields: [], tableName: 'Table 2', x: 10, y: 10 },
    ];

    // Act
    const result = putTableOnTop(tableId, tables);

    // Assert
    expect(result[0]).toBe(tables[1]);
  });

  it('should return the same array if the table is already in the last position', () => {
    // Arrange
    const tableId = '2';
    const tables: TableVm[] = [
      { id: '1', fields: [], tableName: 'Table 1', x: 0, y: 0 },
      { id: tableId, fields: [], tableName: 'Table 2', x: 10, y: 10 },
    ];

    // Act
    const result = putTableOnTop(tableId, tables);
    console.log('Result:', result);
    console.log('Tables:', tables);
    // Assert
    expect(result).toEqual(tables);
  });

  it('should return the same array if the selected table is in the middle', () => {
    // Arrange
    const tablaId = '2';
    const tables: TableVm[] = [
      { id: '1', fields: [], tableName: 'Table 1', x: 0, y: 0 },
      { id: tablaId, fields: [], tableName: 'Table 2', x: 10, y: 10 },
      { id: '3', fields: [], tableName: 'Table 3', x: 20, y: 20 },
    ];

    // Act
    const result = putTableOnTop(tablaId, tables);
    console.log('Result:', result);
    console.log('Tables:', tables);
    // Assert
    expect(result[2]).toBe(tables[1]);
  });
});
