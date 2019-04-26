/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorComponentAdaptorDelegateProtocol<T0 = void, T1 = void, T2 = void> extends MSInspectorMathValueAdaptorDelegateProtocol {
    shouldForceMultipleValuesForAdaptor<R = boolean, P0 = MSInspectorValueAdaptor>(_shouldForceMultipleValuesForAdaptor: P0): R;
  }
  namespace MSColorComponentAdaptorDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorMathValueAdaptorDelegateProtocol {}
  }
}
