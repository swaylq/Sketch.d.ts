/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShowColorsAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    showColorsAction<R = void, P0 = unknown>(_showColorsAction: P0): R;
  }
  namespace MSShowColorsAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSShowColorsAction>(): R;
      new: <R = MSShowColorsAction>() => R;
    }
  }
}

declare const MSShowColorsAction: cocoa.MSShowColorsAction.CLASS;
