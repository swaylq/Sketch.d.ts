/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHMDMetalSessionDrawable<T0 = void, T1 = void, T2 = void> extends NSObject, NSHMDMetalSessionDrawableProtocol {
    presentAtTimestamp<R = void, P0 = number>(_presentAtTimestamp: P0): R;
    dealloc<R = void>(): R;
    initWithSession_surfaceDrawable<R = unknown, P0 = unknown, P1 = unknown>(_initWithSession: P0, _surfaceDrawable: P1): R;
    texture<R = MTLTexture>(): R;
    debugSignpost<R = number>(): R;
    setDebugSignpost<R = void, P0 = number>(_v: P0): R;
    inputTimeStamp<R = number>(): R;
    setInputTimeStamp<R = void, P0 = number>(_v: P0): R;
    session<R = NSHMDMetalSession>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSHMDMetalSessionDrawable {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSHMDMetalSessionDrawableProtocol {
      alloc<R = NSHMDMetalSessionDrawable>(): R;
      new: <R = NSHMDMetalSessionDrawable>() => R;
    }
  }
}

declare const NSHMDMetalSessionDrawable: cocoa.NSHMDMetalSessionDrawable.CLASS;
