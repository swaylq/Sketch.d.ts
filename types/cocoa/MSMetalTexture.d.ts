/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMetalTexture<T0 = void, T1 = void, T2 = void> extends NSObject, MSGPUTextureProtocol {
    cxx_destruct<R = void>(): R;
    initWithMetalTexture<R = unknown, P0 = unknown>(_initWithMetalTexture: P0): R;
    metalTexture<R = MTLTexture>(): R;
    setMetalTexture<R = void, P0 = MTLTexture>(_v: P0): R;
  }
  namespace MSMetalTexture {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSGPUTextureProtocol {
      alloc<R = MSMetalTexture>(): R;
      new: <R = MSMetalTexture>() => R;
    }
  }
}

declare const MSMetalTexture: cocoa.MSMetalTexture.CLASS;
