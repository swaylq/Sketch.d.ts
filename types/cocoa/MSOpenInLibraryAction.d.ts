/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpenInLibraryAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    foreignObjects<R = NSSet>(): R;
  }
  namespace MSOpenInLibraryAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSOpenInLibraryAction>(): R;
      new: <R = MSOpenInLibraryAction>() => R;
    }
  }
}

declare const MSOpenInLibraryAction: cocoa.MSOpenInLibraryAction.CLASS;
