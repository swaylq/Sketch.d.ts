/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceColorAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    replaceColor<R = void, P0 = unknown>(_replaceColor: P0): R;
  }
  namespace MSReplaceColorAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSReplaceColorAction>(): R;
      new: <R = MSReplaceColorAction>() => R;
    }
  }
}

declare const MSReplaceColorAction: cocoa.MSReplaceColorAction.CLASS;
