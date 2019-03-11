/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSInspectorBarView<T = any> extends cocoa.NSStackView {
    mouseDownCanMoveWindow<R = boolean>(): R;
    addItem<R = void, P0 = unknown>(_addItem: P0): R;
    removeItems<R = void>(): R;
    inspectorBar<R = cocoa.NSInspectorBar>(): R;
    setInspectorBar<R = void, P0 = cocoa.NSInspectorBar>(_v: P0): R;
    items<R = cocoa.NSArray>(): R;
    setItems<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface __NSInspectorBarView<T = any> extends cocoa.classes.NSStackView {
      alloc<R = __NSInspectorBarView>(): R;
      new: <R = __NSInspectorBarView>() => R;
    }
  }
}
