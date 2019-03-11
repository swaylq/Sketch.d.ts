/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGPUTextureProtocol<T = any> {
    height<R = number>(): R;
    width<R = number>(): R;
    replaceRegion_bytesPerRow_pixels<R = void, P0 = unknown, P1 = number, P2 = void>(_replaceRegion: P0, _bytesPerRow: P1, _pixels: P2): R;
  }
  namespace classes {
    export interface MSGPUTextureProtocol<T = any> {  }
  }
}

declare const MSGPUTextureProtocol: cocoa.classes.MSGPUTextureProtocol;
