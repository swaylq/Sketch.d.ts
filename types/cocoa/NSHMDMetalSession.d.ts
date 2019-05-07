/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHMDMetalSession<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    initWithDevice_error<R = unknown, P0 = unknown, P1 = unknown>(_initWithDevice: P0, _error: P1): R;
    invalidate<R = void>(): R;
    displayLinkWithHandler<R = unknown, P0 = CDUnknownBlockType>(_displayLinkWithHandler: P0): R;
    nextDrawable<R = unknown>(): R;
    valid<R = boolean>(): R;
    metalDevice<R = MTLDevice>(): R;
    preferredDrawablePixelFormat<R = number>(): R;
    supportedDrawablePixelFormats<R = NSArray>(): R;
    maxDrawableSize<R = CGSize>(): R;
    minDrawableSize<R = CGSize>(): R;
    preferredDrawableSize<R = CGSize>(): R;
    drawableColorSpace<R = NSColorSpace>(): R;
    setDrawableColorSpace<R = void, P0 = NSColorSpace>(_v: P0): R;
    drawablePixelFormat<R = number>(): R;
    setDrawablePixelFormat<R = void, P0 = number>(_v: P0): R;
    drawableSize<R = CGSize>(): R;
    setDrawableSize<R = void, P0 = CGSize>(_v: P0): R;
    device<R = NSHMDDevice>(): R;
  }
  namespace NSHMDMetalSession {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSHMDMetalSession>(): R;
      new: <R = NSHMDMetalSession>() => R;
      keyPathsForValuesAffectingValid<R = unknown>(): R;
    }
  }
}

declare const NSHMDMetalSession: cocoa.NSHMDMetalSession.CLASS;
