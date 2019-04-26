/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextInputClient_IncrementalSearchProtocol<T0 = void, T1 = void, T2 = void> {
    wouldHandleEvent<R = boolean, P0 = NSEvent>(_wouldHandleEvent: P0): R;
    incrementalSearchClientGeometry<R = number>(): R;
  }
  namespace NSTextInputClient_IncrementalSearchProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
