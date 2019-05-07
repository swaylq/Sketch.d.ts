/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMultipleSelectionMatrixPlugin<T0 = void, T1 = void, T2 = void> extends _NSMatrixPlugin, _NSMultipleSelectionBinderPluginProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSMultipleSelectionMatrixPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSMatrixPlugin, _NSMultipleSelectionBinderPluginProtocol {
      alloc<R = _NSMultipleSelectionMatrixPlugin>(): R;
      new: <R = _NSMultipleSelectionMatrixPlugin>() => R;
    }
  }
}
