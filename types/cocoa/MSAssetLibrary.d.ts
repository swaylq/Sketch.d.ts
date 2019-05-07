/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetLibrary<T0 = void, T1 = void, T2 = void> extends NSObject, QLPreviewItemProtocol, BCSortableProtocol, NSCodingProtocol, MSLibraryObjectProtocol {
    cxx_destruct<R = void>(): R;
    resolveLocationOnDisk<R = void>(): R;
    unload<R = void>(): R;
    handleAssetLibraryUpdateWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_handleAssetLibraryUpdateWithCompletionHandler: P0): R;
    loadAsyncWithDispatchGroup_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_loadAsyncWithDispatchGroup: P0, _completionHandler: P1): R;
    loadSynchronously<R = boolean>(): R;
    handleDocumentLoaded<R = void, P0 = unknown>(_handleDocumentLoaded: P0): R;
    loadDocument<R = unknown, P0 = number>(_loadDocument: P0): R;
    initWithName<R = unknown, P0 = unknown>(_initWithName: P0): R;
    initWithDocumentAtURL<R = unknown, P0 = unknown>(_initWithDocumentAtURL: P0): R;
    propertyListDictionaryRepresentation<R = NSDictionary>(): R;
    libraryType<R = number>(): R;
    delegate<R = MSAssetLibraryDelegate>(): R;
    setDelegate<R = void, P0 = MSAssetLibraryDelegate>(_v: P0): R;
    libraryID<R = NSString>(): R;
    setLibraryID<R = void, P0 = NSString>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    document<R = MSDocumentData>(): R;
    setDocument<R = void, P0 = MSDocumentData>(_v: P0): R;
    status<R = number>(): R;
    setStatus<R = void, P0 = number>(_v: P0): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    previewURL<R = NSURL>(): R;
    dateLastModified<R = NSDate>(): R;
    locationOnDisk<R = NSURL>(): R;
    setLocationOnDisk<R = void, P0 = NSURL>(_v: P0): R;
    canLibraryBeRemoved<R = boolean>(): R;
    valid<R = boolean>(): R;
    previewItemTitle<R = NSString>(): R;
    previewItemURL<R = NSURL>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    previewItemDisplayState<R = unknown>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSAssetLibrary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, QLPreviewItemProtocol, BCSortableProtocol, NSCodingProtocol, MSLibraryObjectProtocol {
      alloc<R = MSAssetLibrary>(): R;
      new: <R = MSAssetLibrary>() => R;
      URLForTemplateLibraryNamed<R = unknown, P0 = unknown>(_URLForTemplateLibraryNamed: P0): R;
      keyPathsForValuesAffectingValid<R = unknown>(): R;
      assetLibraryStatusForDocumentErrorCode<R = number, P0 = number>(_assetLibraryStatusForDocumentErrorCode: P0): R;
    }
  }
}

declare const MSAssetLibrary: cocoa.MSAssetLibrary.CLASS;
