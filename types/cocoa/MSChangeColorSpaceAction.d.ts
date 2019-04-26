/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSChangeColorSpaceAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    refreshColorSpaceDependentUI<R = void>(): R;
  }
  namespace MSChangeColorSpaceAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSChangeColorSpaceAction>(): R;
      new: <R = MSChangeColorSpaceAction>() => R;
    }
  }
}

declare const MSChangeColorSpaceAction: cocoa.MSChangeColorSpaceAction.CLASS;
