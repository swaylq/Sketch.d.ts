/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSplitViewVariables<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSSplitViewVariables {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSSplitViewVariables>(): R;
      new: <R = NSSplitViewVariables>() => R;
    }
  }
}

declare const NSSplitViewVariables: cocoa.NSSplitViewVariables.CLASS;
