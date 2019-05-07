/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSActionRecord<T0 = void, T1 = void, T2 = void> extends NSObject {
    fromMainMenu<R = boolean>(): R;
  }
  namespace _NSActionRecord {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSActionRecord>(): R;
      new: <R = _NSActionRecord>() => R;
    }
  }
}
