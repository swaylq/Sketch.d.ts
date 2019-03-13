/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowLayerSurface<T = any> extends NSCGSWindowLayerSurface {
    setLayer<R = void, P0 = unknown>(_setLayer: P0): R;
    layer<R = unknown>(): R;
    setDisplayNumber<R = void, P0 = number>(_setDisplayNumber: P0): R;
    displayNumber<R = number>(): R;
    setDisplayMask<R = void, P0 = number>(_setDisplayMask: P0): R;
    displayMask<R = number>(): R;
    setScale<R = void, P0 = number>(_setScale: P0): R;
    scale<R = number>(): R;
    setOpaque<R = void, P0 = boolean>(_setOpaque: P0): R;
    isOpaque<R = boolean>(): R;
    setColorSpace<R = void, P0 = CGColorSpace>(_setColorSpace: P0): R;
    colorSpace<R = CGColorSpace>(): R;
    setFrame<R = void, P0 = CGRect>(_setFrame: P0): R;
    frame<R = CGRect>(): R;
    surfaceID<R = number>(): R;
    window<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithWindow<R = unknown, P0 = unknown>(_initWithWindow: P0): R;
  }
  namespace classes {
    export interface _NSCGSWindowLayerSurface<T = any> extends NSCGSWindowLayerSurface {
      alloc<R = _NSCGSWindowLayerSurface>(): R;
      new: <R = _NSCGSWindowLayerSurface>() => R;
    }
  }
}
