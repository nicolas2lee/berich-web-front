export class FundModel {
    code: string;
    name: string;
    value: number;

    constructor(code: string, name: string, value: number) {
        this.code = code;
        this.name = name;
        this.value = value;
    }
}


export class TableCol {
    id: string;
    isNumeric: boolean;
    label: string;
    minWidth: number;
    align: string;
    format: string;

    constructor(id: string, isNumeric: boolean, label: string, minWidth: number, align: string, format: string) {
        this.id = id;
        this.isNumeric = isNumeric;
        this.label = label;
        this.minWidth = minWidth;
        this.align = align;
        this.format = format;
    }
}

export interface Fund {
    chineseName: string;
    code: string;
    pseudo: string;
    value: number;
}

export interface FundDetail {
    day: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}