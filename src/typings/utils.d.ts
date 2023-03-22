declare namespace TypeUtil {
  type Noop = (...args: any) => any;

  interface DataType {
    number: number;
    string: string;
    boolean: boolean;
    null: null;
    undefined: undefined;
    symbol: symbol;
    bigInt: bigint;
    object: Record<string, any>;
    array: Array<any>;
    function: (...args: any[]) => any | void;
    date: Date;
    regExp: RegExp;
    promise: Promise<any>;
    set: Set<any>;
    map: Map<any, any>;
    file: File;
  }

  type DataTypeStringKey = keyof DataType;

  type DataTypeString<T extends DataTypeStringKey = DataTypeStringKey> = `[object ${Capitalize<T>}]`;
}
