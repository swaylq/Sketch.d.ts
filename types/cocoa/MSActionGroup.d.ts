/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSActionGroup<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    supportsState<R = boolean>(): R;
    actionNames<R = unknown>(): R;
    childActions<R = unknown>(): R;
  }
  namespace MSActionGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSActionGroup>(): R;
      new: <R = MSActionGroup>() => R;
    }
  }
}

declare const MSActionGroup: cocoa.MSActionGroup.CLASS;
