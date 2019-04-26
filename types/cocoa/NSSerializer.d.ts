/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSerializer<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSSerializer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSSerializer>(): R;
      new: <R = NSSerializer>() => R;
      serializePropertyList<R = unknown, P0 = unknown>(_serializePropertyList: P0): R;
      serializePropertyList_intoData<R = void, P0 = unknown, P1 = unknown>(_serializePropertyList: P0, _intoData: P1): R;
    }
  }
}

declare const NSSerializer: cocoa.NSSerializer.CLASS;
