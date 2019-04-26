/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInspectorBarItemControllerProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    inspectorBarItemCanBeDetached<R = boolean, P0 = NSInspectorBarItem>(_inspectorBarItemCanBeDetached: P0): R;
    viewForInspectorBarItem<R = NSView, P0 = NSInspectorBarItem>(_viewForInspectorBarItem: P0): R;
  }
  namespace NSInspectorBarItemControllerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
