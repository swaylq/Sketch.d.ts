/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTile<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    replaceRegion_withBytes_bytesPerRow<R = void, P0 = unknown, P1 = void, P2 = number>(_replaceRegion: P0, _withBytes: P1, _bytesPerRow: P2): R;
    initWithRenderer_point<R = unknown, P0 = unknown, P1 = unknown>(_initWithRenderer: P0, _point: P1): R;
    rectWithImageFragment<R = unknown>(): R;
    point<R = unknown>(): R;
    setPoint<R = void, P0 = unknown>(_v: P0): R;
    texture<R = MSGPUTexture>(): R;
    setTexture<R = void, P0 = MSGPUTexture>(_v: P0): R;
  }
  namespace MSTile {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSTile>(): R;
      new: <R = MSTile>() => R;
    }
  }
}

declare const MSTile: cocoa.MSTile.CLASS;
