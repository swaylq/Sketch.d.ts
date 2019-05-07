/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCALayerGraphicsContext<T0 = void, T1 = void, T2 = void> extends NSWindowGraphicsContext {
    _initWithGraphicsPort_CALayer_flipped<R = unknown, P0 = void, P1 = unknown, P2 = boolean>(__initWithGraphicsPort: P0, _CALayer: P1, _flipped: P2): R;
  }
  namespace NSCALayerGraphicsContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindowGraphicsContext {
      alloc<R = NSCALayerGraphicsContext>(): R;
      new: <R = NSCALayerGraphicsContext>() => R;
    }
  }
}

declare const NSCALayerGraphicsContext: cocoa.NSCALayerGraphicsContext.CLASS;
