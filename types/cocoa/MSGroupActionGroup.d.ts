/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGroupActionGroup<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace MSGroupActionGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
      alloc<R = MSGroupActionGroup>(): R;
      new: <R = MSGroupActionGroup>() => R;
    }
  }
}

declare const MSGroupActionGroup: cocoa.MSGroupActionGroup.CLASS;
