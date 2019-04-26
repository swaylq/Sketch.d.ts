/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorValueAdaptorChangeObserverProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    inspectorValueAdaptorDidChangeValue<R = void, P0 = MSInspectorValueAdaptor>(_inspectorValueAdaptorDidChangeValue: P0): R;
  }
  namespace MSInspectorValueAdaptorChangeObserverProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
