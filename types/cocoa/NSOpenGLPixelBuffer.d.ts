/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOpenGLPixelBuffer<T0 = void, T1 = void, T2 = void> extends NSObject {
    textureMaxMipMapLevel<R = number>(): R;
    textureInternalFormat<R = number>(): R;
    textureTarget<R = number>(): R;
    pixelsHigh<R = number>(): R;
    pixelsWide<R = number>(): R;
    CGLPBufferObj<R = _CGLPBufferObject>(): R;
    dealloc<R = void>(): R;
    initWithCGLPBufferObj<R = unknown, P0 = _CGLPBufferObject>(_initWithCGLPBufferObj: P0): R;
    initWithTextureTarget_textureInternalFormat_textureMaxMipMapLevel_pixelsWide_pixelsHigh<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number, P4 = number>(_initWithTextureTarget: P0, _textureInternalFormat: P1, _textureMaxMipMapLevel: P2, _pixelsWide: P3, _pixelsHigh: P4): R;
  }
  namespace NSOpenGLPixelBuffer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSOpenGLPixelBuffer>(): R;
      new: <R = NSOpenGLPixelBuffer>() => R;
      initialize<R = void>(): R;
      openGLPixelBufferWithCGLPBufferObj<R = unknown, P0 = _CGLPBufferObject>(_openGLPixelBufferWithCGLPBufferObj: P0): R;
    }
  }
}

declare const NSOpenGLPixelBuffer: cocoa.NSOpenGLPixelBuffer.CLASS;
