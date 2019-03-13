/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSBitmapLayer<T = any> extends MSStyledLayer {
    intendedDPI<R = number>(): R;
    setIntendedDPI<R = void, P0 = number>(_v: P0): R;
    image<R = MSImageData>(): R;
    setImage<R = void, P0 = MSImageData>(_v: P0): R;
    fillReplacesImage<R = boolean>(): R;
    setFillReplacesImage<R = void, P0 = boolean>(_v: P0): R;
    clippingMask<R = CGRect>(): R;
    setClippingMask<R = void, P0 = CGRect>(_v: P0): R;
  }
  namespace classes {
    export interface _MSBitmapLayer<T = any> extends MSStyledLayer {
      alloc<R = _MSBitmapLayer>(): R;
      new: <R = _MSBitmapLayer>() => R;
    }
  }
}
