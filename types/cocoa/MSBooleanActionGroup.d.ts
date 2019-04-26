/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBooleanActionGroup<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace MSBooleanActionGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
      alloc<R = MSBooleanActionGroup>(): R;
      new: <R = MSBooleanActionGroup>() => R;
    }
  }
}

declare const MSBooleanActionGroup: cocoa.MSBooleanActionGroup.CLASS;
