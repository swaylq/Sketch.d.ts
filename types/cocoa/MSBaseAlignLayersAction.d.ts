/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseAlignLayersAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, MSAltButtonTargetProtocol {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    alignVectorPointsToKey<R = void, P0 = unknown>(_alignVectorPointsToKey: P0): R;
    canAlignToArtboardInstead<R = boolean>(): R;
    alignToKey<R = void, P0 = unknown>(_alignToKey: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSBaseAlignLayersAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, MSAltButtonTargetProtocol {
      alloc<R = MSBaseAlignLayersAction>(): R;
      new: <R = MSBaseAlignLayersAction>() => R;
    }
  }
}

declare const MSBaseAlignLayersAction: cocoa.MSBaseAlignLayersAction.CLASS;
