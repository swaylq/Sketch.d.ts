/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMirrorDataProvider<T0 = void, T1 = void, T2 = void> extends NSObject, SMKMirrorDataSourceProtocol {
    cxx_destruct<R = void>(): R;
    currentArtboard<R = unknown>(): R;
    lookupUpdateTypeWithHandler<R = void, P0 = CDUnknownBlockType>(_lookupUpdateTypeWithHandler: P0): R;
    treeDiff_containsFlowLayerChangesInNewDocument<R = boolean, P0 = unknown, P1 = unknown>(_treeDiff: P0, _containsFlowLayerChangesInNewDocument: P1): R;
    sendVisualUpdateForNewDocument<R = void, P0 = unknown>(_sendVisualUpdateForNewDocument: P0): R;
    invalidateRootLayer_inCanvasRect<R = void, P0 = unknown, P1 = CGRect>(_invalidateRootLayer: P0, _inCanvasRect: P1): R;
    sendUpdate<R = void>(): R;
    updateIfNeeded<R = void>(): R;
    setNeedsUpdateMetadata<R = void>(): R;
    setNeedsUpdate<R = void>(): R;
    createManifestContent<R = unknown, P0 = unknown>(_createManifestContent: P0): R;
    documentDidResignCurrentNotification<R = void, P0 = unknown>(_documentDidResignCurrentNotification: P0): R;
    documentDidBecomeCurrentNotification<R = void, P0 = unknown>(_documentDidBecomeCurrentNotification: P0): R;
    mirrorConnectionsDidChangeNotification<R = void, P0 = unknown>(_mirrorConnectionsDidChangeNotification: P0): R;
    currentArtboardDidChange<R = void>(): R;
    setDocumentData<R = void, P0 = unknown>(_setDocumentData: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    imageData_dataByInsertingBackgroundColor<R = unknown, P0 = unknown, P1 = unknown>(_imageData: P0, _dataByInsertingBackgroundColor: P1): R;
    dealloc<R = void>(): R;
    needsUpdateMetadata<R = boolean>(): R;
    setNeedsUpdateMetadata<R = void, P0 = boolean>(_v: P0): R;
    updateTimer<R = NSTimer>(): R;
    setUpdateTimer<R = void, P0 = NSTimer>(_v: P0): R;
    isAlreadyComparing<R = boolean>(): R;
    setIsAlreadyComparing<R = void, P0 = boolean>(_v: P0): R;
    mirrorQueue<R = OS_dispatch_queue>(): R;
    setMirrorQueue<R = void, P0 = OS_dispatch_queue>(_v: P0): R;
    manifestContent<R = NSDictionary>(): R;
    setManifestContent<R = void, P0 = NSDictionary>(_v: P0): R;
    requiresImmediateUpdate<R = boolean>(): R;
    setRequiresImmediateUpdate<R = void, P0 = boolean>(_v: P0): R;
    documentData<R = MSImmutableDocumentData>(): R;
    document<R = MSDocument>(): R;
    setDocument<R = void, P0 = MSDocument>(_v: P0): R;
    connectionController<R = SMKMirrorController>(): R;
    setConnectionController<R = void, P0 = SMKMirrorController>(_v: P0): R;
    hasConnectedClients<R = boolean>(): R;
    currentArtboardID<R = NSString>(): R;
    setCurrentArtboardID<R = void, P0 = NSString>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSMirrorDataProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, SMKMirrorDataSourceProtocol {
      alloc<R = MSMirrorDataProvider>(): R;
      new: <R = MSMirrorDataProvider>() => R;
    }
  }
}

declare const MSMirrorDataProvider: cocoa.MSMirrorDataProvider.CLASS;
