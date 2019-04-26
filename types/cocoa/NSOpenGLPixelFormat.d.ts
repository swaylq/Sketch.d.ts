/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOpenGLPixelFormat<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    setAttributes<R = void, P0 = unknown>(_setAttributes: P0): R;
    attributes<R = unknown>(): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    getValues_forAttribute_forVirtualScreen<R = void, P0 = number, P1 = number, P2 = number>(_getValues: P0, _forAttribute: P1, _forVirtualScreen: P2): R;
    dealloc<R = void>(): R;
    initWithCGLPixelFormatObj<R = unknown, P0 = _CGLPixelFormatObject>(_initWithCGLPixelFormatObj: P0): R;
    initWithAttributes<R = unknown, P0 = number>(_initWithAttributes: P0): R;
    _fallbackInitializer<R = unknown>(): R;
    isSharableWithPixelFormat<R = boolean, P0 = unknown>(_isSharableWithPixelFormat: P0): R;
    _initWithCGLPixelFormatObj<R = unknown, P0 = void>(__initWithCGLPixelFormatObj: P0): R;
    _pixelFormatAuxiliary<R = void>(): R;
    numberOfVirtualScreens<R = number>(): R;
    CGLPixelFormatObj<R = _CGLPixelFormatObject>(): R;
  }
  namespace NSOpenGLPixelFormat {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSOpenGLPixelFormat>(): R;
      new: <R = NSOpenGLPixelFormat>() => R;
      initialize<R = void>(): R;
      openGLPixelFormatWithCGLPixelFormatObj<R = unknown, P0 = _CGLPixelFormatObject>(_openGLPixelFormatWithCGLPixelFormatObj: P0): R;
    }
  }
}

declare const NSOpenGLPixelFormat: cocoa.NSOpenGLPixelFormat.CLASS;
