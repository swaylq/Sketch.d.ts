/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConvertColorSpaceAction<T0 = void, T1 = void, T2 = void> extends MSChangeColorSpaceAction {
    convertDocumentColorSpace<R = void, P0 = unknown>(_convertDocumentColorSpace: P0): R;
  }
  namespace MSConvertColorSpaceAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSChangeColorSpaceAction {
      alloc<R = MSConvertColorSpaceAction>(): R;
      new: <R = MSConvertColorSpaceAction>() => R;
    }
  }
}

declare const MSConvertColorSpaceAction: cocoa.MSConvertColorSpaceAction.CLASS;
