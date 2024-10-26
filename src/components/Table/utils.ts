export function getIdentifierIndex(columns: any[]) {
  const index = columns.findIndex(
    (column: React.JSX.Element) => column.props?.identifier,
  );

  return index >= 0 ? index : 0;
}

export function reorderCells(cells: any[], identifierIndex: number) {
  return [
    cells[identifierIndex],
    ...cells.slice(0, identifierIndex),
    ...cells.slice(identifierIndex + 1),
  ];
}
