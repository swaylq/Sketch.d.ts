/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSelectAllArtboardsAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    selectAllArtboards<R = void, P0 = unknown>(_selectAllArtboards: P0): R;
  }
  namespace MSSelectAllArtboardsAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSSelectAllArtboardsAction>(): R;
      new: <R = MSSelectAllArtboardsAction>() => R;
    }
  }
}

declare const MSSelectAllArtboardsAction: cocoa.MSSelectAllArtboardsAction.CLASS;
