/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSUnarchiveFromDataTransformer<T0 = void, T1 = void, T2 = void> extends _NSSharedValueTransformer {
    description<R = unknown>(): R;
  }
  namespace _NSUnarchiveFromDataTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSSharedValueTransformer {
      alloc<R = _NSUnarchiveFromDataTransformer>(): R;
      new: <R = _NSUnarchiveFromDataTransformer>() => R;
    }
  }
}
