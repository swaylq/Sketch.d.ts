/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSIntersectAction<T0 = void, T1 = void, T2 = void> extends MSBaseBooleanAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    booleanIntersect<R = void, P0 = unknown>(_booleanIntersect: P0): R;
  }
  namespace MSIntersectAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseBooleanAction {
      alloc<R = MSIntersectAction>(): R;
      new: <R = MSIntersectAction>() => R;
    }
  }
}

declare const MSIntersectAction: cocoa.MSIntersectAction.CLASS;
