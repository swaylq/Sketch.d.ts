/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorHexStringAdaptor<T0 = void, T1 = void, T2 = void> extends MSInspectorValueAdaptor {
    value<R = unknown>(): R;
    delegate<R = MSColorComponentAdaptorDelegate>(): R;
    setDelegate<R = void, P0 = MSColorComponentAdaptorDelegate>(_v: P0): R;
  }
  namespace MSColorHexStringAdaptor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorValueAdaptor {
      alloc<R = MSColorHexStringAdaptor>(): R;
      new: <R = MSColorHexStringAdaptor>() => R;
    }
  }
}

declare const MSColorHexStringAdaptor: cocoa.MSColorHexStringAdaptor.CLASS;
