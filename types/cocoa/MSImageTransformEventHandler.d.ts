/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageTransformEventHandler<T0 = void, T1 = void, T2 = void> extends MSTransformEventHandler {
    perspectiveImage<R = unknown>(): R;
    layerPointForCorner<R = CGPoint, P0 = number>(_layerPointForCorner: P0): R;
    newLayerRect<R = CGRect>(): R;
    pointForCorner_rect<R = CGPoint, P0 = number, P1 = CGRect>(_pointForCorner: P0, _rect: P1): R;
    instructions<R = unknown>(): R;
  }
  namespace MSImageTransformEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSTransformEventHandler {
      alloc<R = MSImageTransformEventHandler>(): R;
      new: <R = MSImageTransformEventHandler>() => R;
    }
  }
}

declare const MSImageTransformEventHandler: cocoa.MSImageTransformEventHandler.CLASS;
