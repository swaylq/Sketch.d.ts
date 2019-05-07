/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignmentActions<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace MSAlignmentActions {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
      alloc<R = MSAlignmentActions>(): R;
      new: <R = MSAlignmentActions>() => R;
    }
  }
}

declare const MSAlignmentActions: cocoa.MSAlignmentActions.CLASS;
