/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNormalBaseEventHandler<T0 = void, T1 = void, T2 = void> extends MSEventHandler {
    wantsStandardSelectionControls<R = boolean>(): R;
    resizeParentsOfSelectedLayersToFit<R = void>(): R;
    cursorForCorner_ofCoordinateSpace<R = unknown, P0 = number, P1 = unknown>(_cursorForCorner: P0, _ofCoordinateSpace: P1): R;
  }
  namespace MSNormalBaseEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSEventHandler {
      alloc<R = MSNormalBaseEventHandler>(): R;
      new: <R = MSNormalBaseEventHandler>() => R;
    }
  }
}

declare const MSNormalBaseEventHandler: cocoa.MSNormalBaseEventHandler.CLASS;
