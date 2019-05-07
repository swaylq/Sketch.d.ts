/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpenStyleInLibraryAction<T0 = void, T1 = void, T2 = void> extends MSOpenInLibraryAction {
    label<R = unknown>(): R;
    openLibraryForStyles<R = void, P0 = unknown>(_openLibraryForStyles: P0): R;
  }
  namespace MSOpenStyleInLibraryAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSOpenInLibraryAction {
      alloc<R = MSOpenStyleInLibraryAction>(): R;
      new: <R = MSOpenStyleInLibraryAction>() => R;
    }
  }
}

declare const MSOpenStyleInLibraryAction: cocoa.MSOpenStyleInLibraryAction.CLASS;
