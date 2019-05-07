/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FMStatement<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    reset<R = void>(): R;
    close<R = void>(): R;
    dealloc<R = void>(): R;
    inUse<R = boolean>(): R;
    setInUse<R = void, P0 = boolean>(_v: P0): R;
    useCount<R = number>(): R;
    setUseCount<R = void, P0 = number>(_v: P0): R;
    query<R = NSString>(): R;
    setQuery<R = void, P0 = NSString>(_v: P0): R;
    statement<R = sqlite3_stmt>(): R;
    setStatement<R = void, P0 = sqlite3_stmt>(_v: P0): R;
  }
  namespace FMStatement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = FMStatement>(): R;
      new: <R = FMStatement>() => R;
    }
  }
}

declare const FMStatement: cocoa.FMStatement.CLASS;
