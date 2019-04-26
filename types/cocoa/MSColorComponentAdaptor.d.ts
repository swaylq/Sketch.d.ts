/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorComponentAdaptor<T0 = void, T1 = void, T2 = void> extends MSMathInspectorValueAdaptor {
    delegate<R = MSColorComponentAdaptorDelegate>(): R;
    setDelegate<R = void, P0 = MSColorComponentAdaptorDelegate>(_v: P0): R;
  }
  namespace MSColorComponentAdaptor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSMathInspectorValueAdaptor {
      alloc<R = MSColorComponentAdaptor>(): R;
      new: <R = MSColorComponentAdaptor>() => R;
    }
  }
}

declare const MSColorComponentAdaptor: cocoa.MSColorComponentAdaptor.CLASS;
