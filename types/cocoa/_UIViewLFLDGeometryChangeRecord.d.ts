/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _UIViewLFLDGeometryChangeRecord<T0 = void, T1 = void, T2 = void> extends _UIViewLFLDChangeRecord {
    currentLayoutMethodName<R = NSString>(): R;
  }
  namespace _UIViewLFLDGeometryChangeRecord {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _UIViewLFLDChangeRecord {
      alloc<R = _UIViewLFLDGeometryChangeRecord>(): R;
      new: <R = _UIViewLFLDGeometryChangeRecord>() => R;
    }
  }
}
