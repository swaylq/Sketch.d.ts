/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGPUArtboardShadow<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    cornerSourceSize<R = number>(): R;
    cornerSize<R = number>(): R;
    minimumArtboardSizeForDrawingShadow<R = number>(): R;
    dealloc<R = void>(): R;
    initWithRenderer<R = unknown, P0 = unknown>(_initWithRenderer: P0): R;
    selectedTexture<R = MSGPUTexture>(): R;
    texture<R = MSGPUTexture>(): R;
  }
  namespace MSGPUArtboardShadow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSGPUArtboardShadow>(): R;
      new: <R = MSGPUArtboardShadow>() => R;
    }
  }
}

declare const MSGPUArtboardShadow: cocoa.MSGPUArtboardShadow.CLASS;
