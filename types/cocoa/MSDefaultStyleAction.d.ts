/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDefaultStyleAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    setStyleAsDefault<R = void, P0 = unknown>(_setStyleAsDefault: P0): R;
  }
  namespace MSDefaultStyleAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSDefaultStyleAction>(): R;
      new: <R = MSDefaultStyleAction>() => R;
    }
  }
}

declare const MSDefaultStyleAction: cocoa.MSDefaultStyleAction.CLASS;
