/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStylePartInspectorValueAdaptor<T0 = void, T1 = void, T2 = void> extends MSInspectorValueAdaptor {
    value<R = unknown>(): R;
  }
  namespace MSStylePartInspectorValueAdaptor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorValueAdaptor {
      alloc<R = MSStylePartInspectorValueAdaptor>(): R;
      new: <R = MSStylePartInspectorValueAdaptor>() => R;
    }
  }
}

declare const MSStylePartInspectorValueAdaptor: cocoa.MSStylePartInspectorValueAdaptor.CLASS;
