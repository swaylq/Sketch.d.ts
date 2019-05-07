/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSImageViewAsynchronousPreparationInputParameters<T0 = void, T1 = void, T2 = void> extends NSObject, _NSAsynchronousPreparationInputParametersProtocol {
    dealloc<R = void>(): R;
    flipped<R = boolean>(): R;
    setFlipped<R = void, P0 = boolean>(_v: P0): R;
    imageAlignment<R = number>(): R;
    setImageAlignment<R = void, P0 = number>(_v: P0): R;
    imageScaling<R = number>(): R;
    setImageScaling<R = void, P0 = number>(_v: P0): R;
    frameStyle<R = number>(): R;
    setFrameStyle<R = void, P0 = number>(_v: P0): R;
    tintColor<R = NSColor>(): R;
    setTintColor<R = void, P0 = NSColor>(_v: P0): R;
    imageState<R = number>(): R;
    setImageState<R = void, P0 = number>(_v: P0): R;
    backgroundStyle<R = number>(): R;
    setBackgroundStyle<R = void, P0 = number>(_v: P0): R;
    appearance<R = NSAppearance>(): R;
    setAppearance<R = void, P0 = NSAppearance>(_v: P0): R;
    transform<R = CGAffineTransform>(): R;
    setTransform<R = void, P0 = CGAffineTransform>(_v: P0): R;
    colorSpace<R = NSColorSpace>(): R;
    setColorSpace<R = void, P0 = NSColorSpace>(_v: P0): R;
    bounds<R = CGRect>(): R;
    setBounds<R = void, P0 = CGRect>(_v: P0): R;
    asynchronousImage<R = NSImage>(): R;
    setAsynchronousImage<R = void, P0 = NSImage>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSImageViewAsynchronousPreparationInputParameters {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSAsynchronousPreparationInputParametersProtocol {
      alloc<R = _NSImageViewAsynchronousPreparationInputParameters>(): R;
      new: <R = _NSImageViewAsynchronousPreparationInputParameters>() => R;
    }
  }
}
