/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FMResultSet<T0 = void, T1 = void, T2 = void> extends NSObject {
    objectForKeyedSubscript<R = unknown, P0 = unknown>(_objectForKeyedSubscript: P0): R;
    objectAtIndexedSubscript<R = unknown, P0 = number>(_objectAtIndexedSubscript: P0): R;
    setParentDB<R = void, P0 = unknown>(_setParentDB: P0): R;
    columnNameForIndex<R = unknown, P0 = number>(_columnNameForIndex: P0): R;
    objectForColumnName<R = unknown, P0 = unknown>(_objectForColumnName: P0): R;
    objectForColumnIndex<R = unknown, P0 = number>(_objectForColumnIndex: P0): R;
    UTF8StringForColumnName<R = string, P0 = unknown>(_UTF8StringForColumnName: P0): R;
    UTF8StringForColumnIndex<R = string, P0 = number>(_UTF8StringForColumnIndex: P0): R;
    columnIsNull<R = boolean, P0 = unknown>(_columnIsNull: P0): R;
    columnIndexIsNull<R = boolean, P0 = number>(_columnIndexIsNull: P0): R;
    dataNoCopyForColumnIndex<R = unknown, P0 = number>(_dataNoCopyForColumnIndex: P0): R;
    dataNoCopyForColumn<R = unknown, P0 = unknown>(_dataNoCopyForColumn: P0): R;
    dataForColumnIndex<R = unknown, P0 = number>(_dataForColumnIndex: P0): R;
    dataForColumn<R = unknown, P0 = unknown>(_dataForColumn: P0): R;
    dateForColumnIndex<R = unknown, P0 = number>(_dateForColumnIndex: P0): R;
    dateForColumn<R = unknown, P0 = unknown>(_dateForColumn: P0): R;
    stringForColumn<R = unknown, P0 = unknown>(_stringForColumn: P0): R;
    stringForColumnIndex<R = unknown, P0 = number>(_stringForColumnIndex: P0): R;
    doubleForColumnIndex<R = number, P0 = number>(_doubleForColumnIndex: P0): R;
    doubleForColumn<R = number, P0 = unknown>(_doubleForColumn: P0): R;
    boolForColumnIndex<R = boolean, P0 = number>(_boolForColumnIndex: P0): R;
    boolForColumn<R = boolean, P0 = unknown>(_boolForColumn: P0): R;
    unsignedLongLongIntForColumnIndex<R = number, P0 = number>(_unsignedLongLongIntForColumnIndex: P0): R;
    unsignedLongLongIntForColumn<R = number, P0 = unknown>(_unsignedLongLongIntForColumn: P0): R;
    longLongIntForColumnIndex<R = number, P0 = number>(_longLongIntForColumnIndex: P0): R;
    longLongIntForColumn<R = number, P0 = unknown>(_longLongIntForColumn: P0): R;
    longForColumnIndex<R = number, P0 = number>(_longForColumnIndex: P0): R;
    longForColumn<R = number, P0 = unknown>(_longForColumn: P0): R;
    intForColumnIndex<R = number, P0 = number>(_intForColumnIndex: P0): R;
    intForColumn<R = number, P0 = unknown>(_intForColumn: P0): R;
    columnIndexForName<R = number, P0 = unknown>(_columnIndexForName: P0): R;
    hasAnotherRow<R = boolean>(): R;
    nextWithError<R = boolean, P0 = unknown>(_nextWithError: P0): R;
    next<R = boolean>(): R;
    resultDictionary<R = unknown>(): R;
    resultDict<R = unknown>(): R;
    kvcMagic<R = void, P0 = unknown>(_kvcMagic: P0): R;
    columnCount<R = number>(): R;
    close<R = void>(): R;
    dealloc<R = void>(): R;
    statement<R = FMStatement>(): R;
    setStatement<R = void, P0 = FMStatement>(_v: P0): R;
    query<R = NSString>(): R;
    setQuery<R = void, P0 = NSString>(_v: P0): R;
    columnNameToIndexMap<R = NSMutableDictionary>(): R;
  }
  namespace FMResultSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = FMResultSet>(): R;
      new: <R = FMResultSet>() => R;
      resultSetWithStatement_usingParentDatabase<R = unknown, P0 = unknown, P1 = unknown>(_resultSetWithStatement: P0, _usingParentDatabase: P1): R;
    }
  }
}

declare const FMResultSet: cocoa.FMResultSet.CLASS;
