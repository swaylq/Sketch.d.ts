/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportRequest<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    objectIDsForSelfAncestorsAndChildrenOfAncestry<R = unknown, P0 = unknown>(_objectIDsForSelfAncestorsAndChildrenOfAncestry: P0): R;
    configureForLayerAncestry_layerOptions_includedIDs<R = void, P0 = unknown, P1 = number, P2 = unknown>(_configureForLayerAncestry: P0, _layerOptions: P1, _includedIDs: P2): R;
    setNameFromID_exportFormat<R = void, P0 = unknown, P1 = unknown>(_setNameFromID: P0, _exportFormat: P1): R;
    readSettingsFromDefaults<R = void>(): R;
    configureForLayer_layerOptions_includedIDs<R = void, P0 = unknown, P1 = number, P2 = unknown>(_configureForLayer: P0, _layerOptions: P1, _includedIDs: P2): R;
    includeArtboardBackground<R = boolean>(): R;
    setIncludeArtboardBackground<R = void, P0 = boolean>(_v: P0): R;
    interlaced<R = boolean>(): R;
    setInterlaced<R = void, P0 = boolean>(_v: P0): R;
    progressive<R = boolean>(): R;
    setProgressive<R = void, P0 = boolean>(_v: P0): R;
    compression<R = number>(): R;
    setCompression<R = void, P0 = number>(_v: P0): R;
    saveForWeb<R = boolean>(): R;
    setSaveForWeb<R = void, P0 = boolean>(_v: P0): R;
    format<R = NSString>(): R;
    setFormat<R = void, P0 = NSString>(_v: P0): R;
    immutableDocument<R = MSImmutableDocumentData>(): R;
    setImmutableDocument<R = void, P0 = MSImmutableDocumentData>(_v: P0): R;
    rootLayer<R = MSImmutableLayer>(): R;
    setRootLayer<R = void, P0 = MSImmutableLayer>(_v: P0): R;
    exportBackgroundColor<R = MSImmutableColor>(): R;
    setExportBackgroundColor<R = void, P0 = MSImmutableColor>(_v: P0): R;
    shouldTrim<R = boolean>(): R;
    setShouldTrim<R = void, P0 = boolean>(_v: P0): R;
    scale<R = number>(): R;
    setScale<R = void, P0 = number>(_v: P0): R;
    includedLayerIDs<R = NSSet>(): R;
    setIncludedLayerIDs<R = void, P0 = NSSet>(_v: P0): R;
    options<R = number>(): R;
    setOptions<R = void, P0 = number>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    rect<R = CGRect>(): R;
    setRect<R = void, P0 = CGRect>(_v: P0): R;
    pasteboardType<R = NSString>(): R;
  }
  namespace MSExportRequest {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = MSExportRequest>(): R;
      new: <R = MSExportRequest>() => R;
      exportRequestFromLayerAncestry_exportFormat_inRect<R = unknown, P0 = unknown, P1 = unknown, P2 = CGRect>(_exportRequestFromLayerAncestry: P0, _exportFormat: P1, _inRect: P2): R;
      exportRequestsFromLayerAncestry_exportFormats_inRect<R = unknown, P0 = unknown, P1 = unknown, P2 = CGRect>(_exportRequestsFromLayerAncestry: P0, _exportFormats: P1, _inRect: P2): R;
      exportRequestsFromLayerAncestry_exportFormats<R = unknown, P0 = unknown, P1 = unknown>(_exportRequestsFromLayerAncestry: P0, _exportFormats: P1): R;
      exportRequestsFromLayerAncestry_inRect<R = unknown, P0 = unknown, P1 = CGRect>(_exportRequestsFromLayerAncestry: P0, _inRect: P1): R;
      exportRequestsFromLayerAncestry<R = unknown, P0 = unknown>(_exportRequestsFromLayerAncestry: P0): R;
      exportRequestFromExportFormat_layer_inRect_useIDForName<R = unknown, P0 = unknown, P1 = unknown, P2 = CGRect, P3 = boolean>(_exportRequestFromExportFormat: P0, _layer: P1, _inRect: P2, _useIDForName: P3): R;
      exportRequestsFromExportableLayer_exportFormats_inRect_useIDForName<R = unknown, P0 = unknown, P1 = unknown, P2 = CGRect, P3 = boolean>(_exportRequestsFromExportableLayer: P0, _exportFormats: P1, _inRect: P2, _useIDForName: P3): R;
      exportRequestsFromExportableLayer_inRect_useIDForName<R = unknown, P0 = unknown, P1 = CGRect, P2 = boolean>(_exportRequestsFromExportableLayer: P0, _inRect: P1, _useIDForName: P2): R;
      exportRequestsFromExportableLayer_exportFormats_useIDForName<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(_exportRequestsFromExportableLayer: P0, _exportFormats: P1, _useIDForName: P2): R;
      exportRequestsFromExportableLayer_useIDForName<R = unknown, P0 = unknown, P1 = boolean>(_exportRequestsFromExportableLayer: P0, _useIDForName: P1): R;
      exportRequestsFromExportableLayer<R = unknown, P0 = unknown>(_exportRequestsFromExportableLayer: P0): R;
    }
  }
}

declare const MSExportRequest: cocoa.MSExportRequest.CLASS;
