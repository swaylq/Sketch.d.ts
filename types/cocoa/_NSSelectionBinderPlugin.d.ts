/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSelectionBinderPlugin<T0 = void, T1 = void, T2 = void> extends _NSValueBinderPlugin, _NSSelectionBinderPluginProtocol {
    addContentObject_isPlaceholder_insertsNullPlaceholder_value_index_cellOrControl<R = void, P0 = unknown, P1 = boolean, P2 = boolean, P3 = unknown, P4 = number, P5 = unknown>(_addContentObject: P0, _isPlaceholder: P1, _insertsNullPlaceholder: P2, _value: P3, _index: P4, _cellOrControl: P5): R;
    removeAllContentObjectsInCellOrControl<R = void, P0 = unknown>(_removeAllContentObjectsInCellOrControl: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSSelectionBinderPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSValueBinderPlugin, _NSSelectionBinderPluginProtocol {
      alloc<R = _NSSelectionBinderPlugin>(): R;
      new: <R = _NSSelectionBinderPlugin>() => R;
    }
  }
}
