/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCornerRadiusInspectorValueAdaptor<T0 = void, T1 = void, T2 = void> extends MSMathInspectorValueAdaptor {
    initWithModelsController<R = unknown, P0 = unknown>(_initWithModelsController: P0): R;
  }
  namespace MSCornerRadiusInspectorValueAdaptor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSMathInspectorValueAdaptor {
      alloc<R = MSCornerRadiusInspectorValueAdaptor>(): R;
      new: <R = MSCornerRadiusInspectorValueAdaptor>() => R;
    }
  }
}

declare const MSCornerRadiusInspectorValueAdaptor: cocoa.MSCornerRadiusInspectorValueAdaptor.CLASS;
