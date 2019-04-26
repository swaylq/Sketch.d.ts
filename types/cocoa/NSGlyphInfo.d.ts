/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGlyphInfo<T0 = void, T1 = void, T2 = void> {
    // + NSGlyphInfo(NSPortCoding): 
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
  }
  namespace NSGlyphInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const NSGlyphInfo: cocoa.NSGlyphInfo.CLASS;
