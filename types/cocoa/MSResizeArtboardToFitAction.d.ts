/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSResizeArtboardToFitAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    shouldResizeArtboard_toFitRect<R = boolean, P0 = unknown, P1 = CGRect>(_shouldResizeArtboard: P0, _toFitRect: P1): R;
    resizeArtboardToFit<R = void, P0 = unknown>(_resizeArtboardToFit: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSResizeArtboardToFitAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSResizeArtboardToFitAction>(): R;
      new: <R = MSResizeArtboardToFitAction>() => R;
    }
  }
}

declare const MSResizeArtboardToFitAction: cocoa.MSResizeArtboardToFitAction.CLASS;
