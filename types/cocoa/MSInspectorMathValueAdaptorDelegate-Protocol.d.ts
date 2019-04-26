/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorMathValueAdaptorDelegateProtocol<T0 = void, T1 = void, T2 = void> extends MSInspectorValueAdaptorDelegateProtocol {
    inspectorValueAdaptorAllowFloat<R = boolean, P0 = MSInspectorValueAdaptor>(_inspectorValueAdaptorAllowFloat: P0): R;
  }
  namespace MSInspectorMathValueAdaptorDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorValueAdaptorDelegateProtocol {}
  }
}
