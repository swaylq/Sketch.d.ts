/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRectangleShapeAction<T0 = void, T1 = void, T2 = void> extends MSBaseShapeAction {
    rectangleShape<R = void, P0 = unknown>(_rectangleShape: P0): R;
  }
  namespace MSRectangleShapeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseShapeAction {
      alloc<R = MSRectangleShapeAction>(): R;
      new: <R = MSRectangleShapeAction>() => R;
    }
  }
}

declare const MSRectangleShapeAction: cocoa.MSRectangleShapeAction.CLASS;
