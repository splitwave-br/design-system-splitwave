import { Action } from "./Action";

type ColumnWidth = {
    width?: string;
    minWidth?: string;
};

export const COLUMNS_WIDTH: Record<string, ColumnWidth> = {
    Date: { width: "140px" },
    Uuid: { minWidth: "120px" },
    Action: { width: "100px" },
}