/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCenterSelectionInVisibleAreaAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    centerCanvasSelectionInVisibleArea<R = void, P0 = unknown>(_centerCanvasSelectionInVisibleArea: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSCenterSelectionInVisibleAreaAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSCenterSelectionInVisibleAreaAction>(): R;
      new: <R = MSCenterSelectionInVisibleAreaAction>() => R;
    }
  }
}

declare const MSCenterSelectionInVisibleAreaAction: cocoa.MSCenterSelectionInVisibleAreaAction.CLASS;
