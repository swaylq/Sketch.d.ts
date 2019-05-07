/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _UIViewLFLDChangeRecord<T0 = void, T1 = void, T2 = void> extends NSObject {
    timestamp<R = number>(): R;
  }
  namespace _UIViewLFLDChangeRecord {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _UIViewLFLDChangeRecord>(): R;
      new: <R = _UIViewLFLDChangeRecord>() => R;
    }
  }
}
