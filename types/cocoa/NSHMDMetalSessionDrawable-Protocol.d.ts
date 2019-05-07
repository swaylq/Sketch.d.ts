/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHMDMetalSessionDrawableProtocol<T0 = void, T1 = void, T2 = void> extends MTLDrawableProtocol {
    debugSignpost<R = number>(): R;
    setDebugSignpost<R = void, P0 = number>(_v: P0): R;
    inputTimeStamp<R = number>(): R;
    setInputTimeStamp<R = void, P0 = number>(_v: P0): R;
    texture<R = MTLTexture>(): R;
    session<R = NSHMDMetalSession>(): R;
  }
  namespace NSHMDMetalSessionDrawableProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MTLDrawableProtocol {}
  }
}
