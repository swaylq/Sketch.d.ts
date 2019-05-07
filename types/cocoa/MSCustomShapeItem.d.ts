/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCustomShapeItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
    refreshAndResetAction<R = void, P0 = unknown>(_refreshAndResetAction: P0): R;
  }
  namespace MSCustomShapeItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSCustomShapeItem>(): R;
      new: <R = MSCustomShapeItem>() => R;
    }
  }
}

declare const MSCustomShapeItem: cocoa.MSCustomShapeItem.CLASS;
