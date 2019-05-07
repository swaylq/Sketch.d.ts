/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorChildControllerProtocol<T0 = void, T1 = void, T2 = void> {
    refreshIfNecessary<R = void, P0 = MSTreeDiff>(_refreshIfNecessary: P0): R;
    selectionDidChangeTo<R = void, P0 = NSArray>(_selectionDidChangeTo: P0): R;
    prepareForDisplay<R = void>(): R;
    layerPositionPossiblyChanged<R = void>(): R;
  }
  namespace MSInspectorChildControllerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
