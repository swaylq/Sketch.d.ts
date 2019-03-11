/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWebExporter<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    saveManifestFile_withError<R = boolean, P0 = unknown, P1 = unknown>(_saveManifestFile: P0, _withError: P1): R;
    exportedImageDataForRequest<R = unknown, P0 = unknown>(_exportedImageDataForRequest: P0): R;
    metadataForDocument<R = unknown, P0 = unknown>(_metadataForDocument: P0): R;
    callCompletionBlock_withDidExport_error<R = void, P0 = cocoa.CDUnknownBlockType, P1 = boolean, P2 = unknown>(_callCompletionBlock: P0, _withDidExport: P1, _error: P2): R;
    exportDocumentWithUIMetadata_completionBlock<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_exportDocumentWithUIMetadata: P0, _completionBlock: P1): R;
    exportArtboardsWithCompletionBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_exportArtboardsWithCompletionBlock: P0): R;
    cancel<R = void>(): R;
    initWithDocument_name_localURL<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithDocument: P0, _name: P1, _localURL: P2): R;
    cancelled<R = boolean>(): R;
    setCancelled<R = void, P0 = boolean>(_v: P0): R;
    exportingQueue<R = cocoa.OS_dispatch_queue>(): R;
    setExportingQueue<R = void, P0 = cocoa.OS_dispatch_queue>(_v: P0): R;
    cloudOrganization<R = cocoa.SCKOrganization>(): R;
    setCloudOrganization<R = void, P0 = cocoa.SCKOrganization>(_v: P0): R;
    selectiveExport<R = boolean>(): R;
    setSelectiveExport<R = void, P0 = boolean>(_v: P0): R;
    cacheManager<R = cocoa.MSCacheManager>(): R;
    setCacheManager<R = void, P0 = cocoa.MSCacheManager>(_v: P0): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    destinationURL<R = cocoa.NSURL>(): R;
    setDestinationURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    documentData<R = cocoa.MSDocumentData>(): R;
    setDocumentData<R = void, P0 = cocoa.MSDocumentData>(_v: P0): R;
    documentFileSize<R = number>(): R;
  }
  namespace classes {
    export interface MSWebExporter<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSWebExporter>(): R;
      new: <R = MSWebExporter>() => R;
      exportViewportBitmapImageForRequest<R = unknown, P0 = unknown>(_exportViewportBitmapImageForRequest: P0): R;
      exportBitmapImageForRequest<R = unknown, P0 = unknown>(_exportBitmapImageForRequest: P0): R;
      imageURLWithHash_inDirectory<R = unknown, P0 = unknown, P1 = unknown>(_imageURLWithHash: P0, _inDirectory: P1): R;
      documentURLInDirectory<R = unknown, P0 = unknown>(_documentURLInDirectory: P0): R;
      exportArtboardsOfDocument_withName_toLocalURL_completionBlock<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.CDUnknownBlockType>(_exportArtboardsOfDocument: P0, _withName: P1, _toLocalURL: P2, _completionBlock: P3): R;
      exportSelectedArtboardsOfDocument_withName_toLocalURL_completionBlock<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.CDUnknownBlockType>(_exportSelectedArtboardsOfDocument: P0, _withName: P1, _toLocalURL: P2, _completionBlock: P3): R;
    }
  }
}

declare const MSWebExporter: cocoa.classes.MSWebExporter;
