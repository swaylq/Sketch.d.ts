/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPolygonShapeAction<T0 = void, T1 = void, T2 = void> extends MSBaseShapeAction {
    polygonShape<R = void, P0 = unknown>(_polygonShape: P0): R;
  }
  namespace MSPolygonShapeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseShapeAction {
      alloc<R = MSPolygonShapeAction>(): R;
      new: <R = MSPolygonShapeAction>() => R;
    }
  }
}

declare const MSPolygonShapeAction: cocoa.MSPolygonShapeAction.CLASS;
