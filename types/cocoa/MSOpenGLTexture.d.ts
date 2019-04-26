/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpenGLTexture<T0 = void, T1 = void, T2 = void> extends NSObject, MSGPUTextureProtocol {
    readImageWithColorSpace<R = CGImage, P0 = CGColorSpace>(_readImageWithColorSpace: P0): R;
    dealloc<R = void>(): R;
    initWithTextureID_width_height<R = unknown, P0 = number, P1 = number, P2 = number>(_initWithTextureID: P0, _width: P1, _height: P2): R;
    filter<R = number>(): R;
    setFilter<R = void, P0 = number>(_v: P0): R;
    textureID<R = number>(): R;
  }
  namespace MSOpenGLTexture {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSGPUTextureProtocol {
      alloc<R = MSOpenGLTexture>(): R;
      new: <R = MSOpenGLTexture>() => R;
    }
  }
}

declare const MSOpenGLTexture: cocoa.MSOpenGLTexture.CLASS;
