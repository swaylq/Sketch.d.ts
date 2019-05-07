/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSForceResyncLibraryAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    forceResyncAllLibraryObjects<R = void, P0 = unknown>(_forceResyncAllLibraryObjects: P0): R;
  }
  namespace MSForceResyncLibraryAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSForceResyncLibraryAction>(): R;
      new: <R = MSForceResyncLibraryAction>() => R;
    }
  }
}

declare const MSForceResyncLibraryAction: cocoa.MSForceResyncLibraryAction.CLASS;
