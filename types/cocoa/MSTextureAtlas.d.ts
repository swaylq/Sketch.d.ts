/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextureAtlas<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    relativeRectForResizeableTextureNamed_withEdgePaddings<R = CGRect, P0 = unknown, P1 = BCEdgePaddings>(_relativeRectForResizeableTextureNamed: P0, _withEdgePaddings: P1): R;
    textureForRenderer<R = unknown, P0 = unknown>(_textureForRenderer: P0): R;
    absoluteRectForTextureNamed<R = CGRect, P0 = unknown>(_absoluteRectForTextureNamed: P0): R;
    relativeRectForTextureNamed<R = CGRect, P0 = unknown>(_relativeRectForTextureNamed: P0): R;
    assembleAtlas<R = void>(): R;
    dealloc<R = void>(): R;
    initWithTextures_colorSpace<R = unknown, P0 = unknown, P1 = CGColorSpace>(_initWithTextures: P0, _colorSpace: P1): R;
    relativeRects<R = NSDictionary>(): R;
    setRelativeRects<R = void, P0 = NSDictionary>(_v: P0): R;
    atlasImage<R = CGImage>(): R;
    setAtlasImage<R = void, P0 = CGImage>(_v: P0): R;
    textures<R = NSDictionary>(): R;
    absoluteRects<R = NSDictionary>(): R;
  }
  namespace MSTextureAtlas {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSTextureAtlas>(): R;
      new: <R = MSTextureAtlas>() => R;
    }
  }
}

declare const MSTextureAtlas: cocoa.MSTextureAtlas.CLASS;
