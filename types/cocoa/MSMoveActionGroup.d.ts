/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMoveActionGroup<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace MSMoveActionGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
      alloc<R = MSMoveActionGroup>(): R;
      new: <R = MSMoveActionGroup>() => R;
    }
  }
}

declare const MSMoveActionGroup: cocoa.MSMoveActionGroup.CLASS;
