/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVisitDocumentationAction<T0 = void, T1 = void, T2 = void> extends MSAction {
    label<R = unknown>(): R;
    visitDocumentation<R = void, P0 = unknown>(_visitDocumentation: P0): R;
  }
  namespace MSVisitDocumentationAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAction {
      alloc<R = MSVisitDocumentationAction>(): R;
      new: <R = MSVisitDocumentationAction>() => R;
    }
  }
}

declare const MSVisitDocumentationAction: cocoa.MSVisitDocumentationAction.CLASS;
