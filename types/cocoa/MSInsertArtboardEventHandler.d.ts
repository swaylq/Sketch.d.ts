/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertArtboardEventHandler<T0 = void, T1 = void, T2 = void> extends MSInsertLayerEventHandler {
    shouldAddInsertFromSelectionItem<R = boolean>(): R;
    updateInspector<R = void>(): R;
    insertArtboardWithRect<R = unknown, P0 = CGRect>(_insertArtboardWithRect: P0): R;
    newPositionForFirstArtboardWithSize<R = CGRect, P0 = CGSize>(_newPositionForFirstArtboardWithSize: P0): R;
    initialRectForNewArtboard_besidesExistingArtboard<R = CGRect, P0 = CGSize, P1 = unknown>(_initialRectForNewArtboard: P0, _besidesExistingArtboard: P1): R;
    newPositionForSecondArtboardWithSize<R = CGRect, P0 = CGSize>(_newPositionForSecondArtboardWithSize: P0): R;
    rectForArtboardWithPreset<R = CGRect, P0 = unknown>(_rectForArtboardWithPreset: P0): R;
    insertArtboardFromPreset<R = void, P0 = unknown>(_insertArtboardFromPreset: P0): R;
    title<R = unknown>(): R;
    insertedArtboards<R = NSMutableArray>(): R;
    inspectorViewController<R = MSInsertArtboardInspectorViewController>(): R;
  }
  namespace MSInsertArtboardEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInsertLayerEventHandler {
      alloc<R = MSInsertArtboardEventHandler>(): R;
      new: <R = MSInsertArtboardEventHandler>() => R;
    }
  }
}

declare const MSInsertArtboardEventHandler: cocoa.MSInsertArtboardEventHandler.CLASS;
