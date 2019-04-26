/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPopoverFramePrivateData<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    cachedImageMask<R = NSImage>(): R;
    setCachedImageMask<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace _NSPopoverFramePrivateData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSPopoverFramePrivateData>(): R;
      new: <R = _NSPopoverFramePrivateData>() => R;
    }
  }
}
