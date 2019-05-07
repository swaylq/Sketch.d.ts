/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudShareUploadController<T0 = void, T1 = void, T2 = void> extends NSObject, SCKShareUploadDataSourceProtocol {
    cxx_destruct<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    cancel<R = void>(): R;
    loadManifest<R = unknown>(): R;
    createShare<R = void>(): R;
    startUpload<R = void>(): R;
    dealloc<R = void>(): R;
    initWithDocument<R = unknown, P0 = unknown>(_initWithDocument: P0): R;
    operation<R = SCKShareUploadOperation>(): R;
    setOperation<R = void, P0 = SCKShareUploadOperation>(_v: P0): R;
    webExporter<R = MSWebExporter>(): R;
    setWebExporter<R = void, P0 = MSWebExporter>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    localURL<R = NSURL>(): R;
    setLocalURL<R = void, P0 = NSURL>(_v: P0): R;
    previousShare<R = SCKShare>(): R;
    setPreviousShare<R = void, P0 = SCKShare>(_v: P0): R;
    document<R = MSCloudExportableDocument>(): R;
    setDocument<R = void, P0 = MSCloudExportableDocument>(_v: P0): R;
    cancelled<R = boolean>(): R;
    organization<R = SCKOrganization>(): R;
    setOrganization<R = void, P0 = SCKOrganization>(_v: P0): R;
    existingShare<R = SCKShare>(): R;
    setExistingShare<R = void, P0 = SCKShare>(_v: P0): R;
    previousUpload<R = MSCloudShareUploadController>(): R;
    setPreviousUpload<R = void, P0 = MSCloudShareUploadController>(_v: P0): R;
    delegate<R = MSCloudShareUploadControllerDelegate>(): R;
    setDelegate<R = void, P0 = MSCloudShareUploadControllerDelegate>(_v: P0): R;
    progress<R = NSProgress>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSCloudShareUploadController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, SCKShareUploadDataSourceProtocol {
      alloc<R = MSCloudShareUploadController>(): R;
      new: <R = MSCloudShareUploadController>() => R;
      operationQueue<R = unknown>(): R;
    }
  }
}

declare const MSCloudShareUploadController: cocoa.MSCloudShareUploadController.CLASS;
