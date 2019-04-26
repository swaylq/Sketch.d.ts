/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStarShapeAction<T0 = void, T1 = void, T2 = void> extends MSBaseShapeAction {
    starShape<R = void, P0 = unknown>(_starShape: P0): R;
  }
  namespace MSStarShapeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseShapeAction {
      alloc<R = MSStarShapeAction>(): R;
      new: <R = MSStarShapeAction>() => R;
    }
  }
}

declare const MSStarShapeAction: cocoa.MSStarShapeAction.CLASS;
