/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLoadedImageData<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    intendedDPI<R = number>(): R;
    setIntendedDPI<R = void, P0 = number>(_v: P0): R;
    size<R = CGSize>(): R;
    setSize<R = void, P0 = CGSize>(_v: P0): R;
    image<R = MSImageData>(): R;
    setImage<R = void, P0 = MSImageData>(_v: P0): R;
  }
  namespace MSLoadedImageData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSLoadedImageData>(): R;
      new: <R = MSLoadedImageData>() => R;
      scalingFactorForFilename<R = number, P0 = unknown>(_scalingFactorForFilename: P0): R;
      bestScaleAccountingForPixelDensityOfImage<R = number, P0 = unknown>(_bestScaleAccountingForPixelDensityOfImage: P0): R;
      loadedImageFromImage_withSizeScaledDownByFactor<R = unknown, P0 = unknown, P1 = number>(_loadedImageFromImage: P0, _withSizeScaledDownByFactor: P1): R;
      imageFromFileURL<R = unknown, P0 = unknown>(_imageFromFileURL: P0): R;
      imageFromPasteboard<R = unknown, P0 = unknown>(_imageFromPasteboard: P0): R;
    }
  }
}

declare const MSLoadedImageData: cocoa.MSLoadedImageData.CLASS;
