/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolPreviewGenerator<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSSymbolPreviewGenerator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSSymbolPreviewGenerator>(): R;
      new: <R = MSSymbolPreviewGenerator>() => R;
      imageForSymbolAncestry_withSize_colorSpace_trimmed<R = unknown, P0 = unknown, P1 = CGSize, P2 = unknown, P3 = boolean>(_imageForSymbolAncestry: P0, _withSize: P1, _colorSpace: P2, _trimmed: P3): R;
      imageRepForArtboardAncestry_withSize_drawingRect_colorSpace_trimmed<R = unknown, P0 = unknown, P1 = CGSize, P2 = CGRect, P3 = unknown, P4 = boolean>(_imageRepForArtboardAncestry: P0, _withSize: P1, _drawingRect: P2, _colorSpace: P3, _trimmed: P4): R;
    }
  }
}

declare const MSSymbolPreviewGenerator: cocoa.MSSymbolPreviewGenerator.CLASS;
