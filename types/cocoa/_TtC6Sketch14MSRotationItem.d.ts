/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC6Sketch14MSRotationItem<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = CDUnknownBlockType>(): R;
    setAnchorPointWithLocation_inLayer<R = void, P0 = CGPoint, P1 = unknown>(_setAnchorPointWithLocation: P0, _inLayer: P1): R;
    initWithLayer<R = unknown, P0 = unknown>(_initWithLayer: P0): R;
    initialRotation<R = number>(): R;
    setInitialRotation<R = void, P0 = number>(_v: P0): R;
    anchorPoint<R = CGPoint>(): R;
    setAnchorPoint<R = void, P0 = CGPoint>(_v: P0): R;
    layer<R = MSLayer>(): R;
  }
  namespace _TtC6Sketch14MSRotationItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _TtC6Sketch14MSRotationItem>(): R;
      new: <R = _TtC6Sketch14MSRotationItem>() => R;
    }
  }
}
