/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBooleanActionGroup<T = any> extends MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSBooleanActionGroup<T = any> extends MSActionGroup {
      alloc<R = MSBooleanActionGroup>(): R;
      new: <R = MSBooleanActionGroup>() => R;
    }
  }
}

declare const MSBooleanActionGroup: cocoa.classes.MSBooleanActionGroup;