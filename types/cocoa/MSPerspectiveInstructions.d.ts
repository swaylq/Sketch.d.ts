/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPerspectiveInstructions<T0 = void, T1 = void, T2 = void> extends NSObject {
    applyToImage<R = unknown, P0 = unknown>(_applyToImage: P0): R;
    bottomRight<R = CGPoint>(): R;
    setBottomRight<R = void, P0 = CGPoint>(_v: P0): R;
    bottomLeft<R = CGPoint>(): R;
    setBottomLeft<R = void, P0 = CGPoint>(_v: P0): R;
    topRight<R = CGPoint>(): R;
    setTopRight<R = void, P0 = CGPoint>(_v: P0): R;
    topLeft<R = CGPoint>(): R;
    setTopLeft<R = void, P0 = CGPoint>(_v: P0): R;
    rect<R = CGRect>(): R;
    setRect<R = void, P0 = CGRect>(_v: P0): R;
  }
  namespace MSPerspectiveInstructions {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSPerspectiveInstructions>(): R;
      new: <R = MSPerspectiveInstructions>() => R;
    }
  }
}

declare const MSPerspectiveInstructions: cocoa.MSPerspectiveInstructions.CLASS;
