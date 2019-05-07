/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRoundedRectangleShapeAction<T0 = void, T1 = void, T2 = void> extends MSBaseShapeAction {
    roundedRectangleShape<R = void, P0 = unknown>(_roundedRectangleShape: P0): R;
  }
  namespace MSRoundedRectangleShapeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseShapeAction {
      alloc<R = MSRoundedRectangleShapeAction>(): R;
      new: <R = MSRoundedRectangleShapeAction>() => R;
    }
  }
}

declare const MSRoundedRectangleShapeAction: cocoa.MSRoundedRectangleShapeAction.CLASS;
