/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSKeyedUnarchiveFromDataTransformer<T0 = void, T1 = void, T2 = void> extends _NSSharedValueTransformer {
    description<R = unknown>(): R;
  }
  namespace _NSKeyedUnarchiveFromDataTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSSharedValueTransformer {
      alloc<R = _NSKeyedUnarchiveFromDataTransformer>(): R;
      new: <R = _NSKeyedUnarchiveFromDataTransformer>() => R;
    }
  }
}
