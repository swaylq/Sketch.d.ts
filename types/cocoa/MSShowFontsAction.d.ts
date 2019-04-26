/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShowFontsAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    showFontsAction<R = void, P0 = unknown>(_showFontsAction: P0): R;
  }
  namespace MSShowFontsAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSShowFontsAction>(): R;
      new: <R = MSShowFontsAction>() => R;
    }
  }
}

declare const MSShowFontsAction: cocoa.MSShowFontsAction.CLASS;
