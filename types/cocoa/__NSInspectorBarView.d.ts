/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSInspectorBarView<T = any> extends NSStackView {
    mouseDownCanMoveWindow<R = boolean>(): R;
    addItem<R = void, P0 = unknown>(_addItem: P0): R;
    removeItems<R = void>(): R;
    inspectorBar<R = NSInspectorBar>(): R;
    setInspectorBar<R = void, P0 = NSInspectorBar>(_v: P0): R;
    items<R = NSArray>(): R;
    setItems<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface __NSInspectorBarView<T = any> extends NSStackView {
      alloc<R = __NSInspectorBarView>(): R;
      new: <R = __NSInspectorBarView>() => R;
    }
  }
}
