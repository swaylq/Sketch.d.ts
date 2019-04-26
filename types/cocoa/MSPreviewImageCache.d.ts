/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPreviewImageCache<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    exportPreviewImageForDocumentFileURL_maximumPixelSize_handler<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_exportPreviewImageForDocumentFileURL: P0, _maximumPixelSize: P1, _handler: P2): R;
    cachedPreviewImageForDocumentFileURL_maximumPixelSize_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_cachedPreviewImageForDocumentFileURL: P0, _maximumPixelSize: P1, _error: P2): R;
    cachedPreviewImageURLForDocumentFileURL_maximumPixelSize_createDirectoriesIfNeeded_error<R = unknown, P0 = unknown, P1 = number, P2 = boolean, P3 = unknown>(_cachedPreviewImageURLForDocumentFileURL: P0, _maximumPixelSize: P1, _createDirectoriesIfNeeded: P2, _error: P3): R;
    directoryURLCreateIfNeeded_error<R = unknown, P0 = boolean, P1 = unknown>(_directoryURLCreateIfNeeded: P0, _error: P1): R;
    fetchPreviewImageForDocumentAtURL_maximumPixelSize_handler<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_fetchPreviewImageForDocumentAtURL: P0, _maximumPixelSize: P1, _handler: P2): R;
    initWithSubdirectoryName<R = unknown, P0 = unknown>(_initWithSubdirectoryName: P0): R;
    subdirectoryName<R = NSString>(): R;
    sketchToolRunner<R = BCSketchToolRunner>(): R;
    fetchQueue<R = NSOperationQueue>(): R;
    directoryURL<R = NSURL>(): R;
  }
  namespace MSPreviewImageCache {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSPreviewImageCache>(): R;
      new: <R = MSPreviewImageCache>() => R;
      bundledSketchToolURL<R = unknown>(): R;
    }
  }
}

declare const MSPreviewImageCache: cocoa.MSPreviewImageCache.CLASS;
