/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFillOptionsInspectorViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    cxx_destruct<R = void>(): R;
    layers<R = NSArray>(): R;
    setLayers<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace MSFillOptionsInspectorViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = MSFillOptionsInspectorViewController>(): R;
      new: <R = MSFillOptionsInspectorViewController>() => R;
    }
  }
}

declare const MSFillOptionsInspectorViewController: cocoa.MSFillOptionsInspectorViewController.CLASS;
