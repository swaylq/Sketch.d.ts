/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBulkPointerArray<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {}
  namespace NSBulkPointerArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSBulkPointerArray>(): R;
      new: <R = NSBulkPointerArray>() => R;
      _setRunningTestRig_minCapacity<R = void, P0 = boolean, P1 = number>(__setRunningTestRig: P0, _minCapacity: P1): R;
    }
  }
}

declare const NSBulkPointerArray: cocoa.NSBulkPointerArray.CLASS;
