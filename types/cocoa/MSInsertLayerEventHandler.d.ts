/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertLayerEventHandler<T0 = void, T1 = void, T2 = void> extends MSDragRectEventHandler {
    resizeLayer_toRect<R = void, P0 = unknown, P1 = CGRect>(_resizeLayer: P0, _toRect: P1): R;
    insertNewLayerInCurrentGroup<R = void, P0 = unknown>(_insertNewLayerInCurrentGroup: P0): R;
    insertAsNewLayer<R = unknown, P0 = CGRect>(_insertAsNewLayer: P0): R;
    pathForPrototypeLayer<R = unknown>(): R;
    setInsertionRect<R = void, P0 = CGRect>(_setInsertionRect: P0): R;
    applicableActionItemIdentifier<R = unknown>(): R;
    insertedLayer<R = MSLayer>(): R;
    setInsertedLayer<R = void, P0 = MSLayer>(_v: P0): R;
    completionBlock<R = CDUnknownBlockType>(): R;
    setCompletionBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    prototypeLayer<R = MSLayer>(): R;
    setPrototypeLayer<R = void, P0 = MSLayer>(_v: P0): R;
  }
  namespace MSInsertLayerEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDragRectEventHandler {
      alloc<R = MSInsertLayerEventHandler>(): R;
      new: <R = MSInsertLayerEventHandler>() => R;
    }
  }
}

declare const MSInsertLayerEventHandler: cocoa.MSInsertLayerEventHandler.CLASS;
