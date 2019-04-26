/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentZippedJSONReader<T0 = void, T1 = void, T2 = void> extends MSDocumentReader {
    metadata<R = unknown>(): R;
    UIMetadata<R = unknown>(): R;
    previewBitmapImageRepWithSize<R = unknown, P0 = CGSize>(_previewBitmapImageRepWithSize: P0): R;
    libraryPreviewImage<R = unknown>(): R;
    previewImage<R = unknown>(): R;
    containsPreviewImage<R = boolean>(): R;
    initWithFileURL<R = unknown, P0 = unknown>(_initWithFileURL: P0): R;
    unarchiver<R = MSJSONZippedUnarchiver>(): R;
    setUnarchiver<R = void, P0 = MSJSONZippedUnarchiver>(_v: P0): R;
  }
  namespace MSDocumentZippedJSONReader {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentReader {
      alloc<R = MSDocumentZippedJSONReader>(): R;
      new: <R = MSDocumentZippedJSONReader>() => R;
      maximumPixelSizeForImageSource_maximumSize<R = number, P0 = CGImageSource, P1 = CGSize>(_maximumPixelSizeForImageSource: P0, _maximumSize: P1): R;
    }
  }
}

declare const MSDocumentZippedJSONReader: cocoa.MSDocumentZippedJSONReader.CLASS;
