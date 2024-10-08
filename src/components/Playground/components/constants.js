export const WINNING_COMBINATIONS = [
    [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }], // İlk satır
    [{ row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }], // İkinci satır
    [{ row: 2, col: 0 }, { row: 2, col: 1 }, { row: 2, col: 2 }], // Üçüncü satır
    [{ row: 0, col: 0 }, { row: 1, col: 0 }, { row: 2, col: 0 }], // İlk sütun
    [{ row: 0, col: 1 }, { row: 1, col: 1 }, { row: 2, col: 1 }], // İkinci sütun
    [{ row: 0, col: 2 }, { row: 1, col: 2 }, { row: 2, col: 2 }], // Üçüncü sütun
    [{ row: 0, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 2 }], // Sol üstten sağ alta çapraz
    [{ row: 0, col: 2 }, { row: 1, col: 1 }, { row: 2, col: 0 }]  // Sağ üstten sol alta çapraz
];
