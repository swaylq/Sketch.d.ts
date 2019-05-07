/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTriangleShapeAction<T0 = void, T1 = void, T2 = void> extends MSBaseShapeAction {
    triangleShape<R = void, P0 = unknown>(_triangleShape: P0): R;
  }
  namespace MSTriangleShapeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseShapeAction {
      alloc<R = MSTriangleShapeAction>(): R;
      new: <R = MSTriangleShapeAction>() => R;
    }
  }
}

declare const MSTriangleShapeAction: cocoa.MSTriangleShapeAction.CLASS;
