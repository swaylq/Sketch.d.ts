/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSEditColorSpaceAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    editDocumentColorSpace<R = void, P0 = unknown>(_editDocumentColorSpace: P0): R;
  }
  namespace MSEditColorSpaceAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSEditColorSpaceAction>(): R;
      new: <R = MSEditColorSpaceAction>() => R;
    }
  }
}

declare const MSEditColorSpaceAction: cocoa.MSEditColorSpaceAction.CLASS;
