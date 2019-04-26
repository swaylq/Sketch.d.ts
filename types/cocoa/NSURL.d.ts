/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURL<T0 = void, T1 = void, T2 = void> {
    // + NSURL(NSItemProvider): 
    loadDataWithTypeIdentifier_forItemProviderCompletionHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_loadDataWithTypeIdentifier: P0, _forItemProviderCompletionHandler: P1): R;
    _URLArchive<R = unknown>(): R;
    // + NSURL(NSPasteboardSupport): 
    pasteboardPropertyListForType<R = unknown, P0 = unknown>(_pasteboardPropertyListForType: P0): R;
    writingOptionsForType_pasteboard<R = number, P0 = unknown, P1 = unknown>(_writingOptionsForType: P0, _pasteboard: P1): R;
    writableTypesForPasteboard<R = unknown, P0 = unknown>(_writableTypesForPasteboard: P0): R;
    __isAbsolute<R = boolean>(): R;
    initWithPasteboardPropertyList_ofType<R = unknown, P0 = unknown, P1 = unknown>(_initWithPasteboardPropertyList: P0, _ofType: P1): R;
    writeToPasteboard<R = void, P0 = unknown>(_writeToPasteboard: P0): R;
    // + NSURL(NSScriptAppleEventConversion): 
    _scriptingFileDescriptor<R = unknown>(): R;
    _scriptingAlternativeValueRankWithDescriptor<R = number, P0 = unknown>(__scriptingAlternativeValueRankWithDescriptor: P0): R;
    // + NSURL(NSURL): 
    URLHandle_resourceDidFailLoadingWithReason<R = void, P0 = unknown, P1 = unknown>(_URLHandle: P0, _resourceDidFailLoadingWithReason: P1): R;
    URLHandleResourceDidCancelLoading<R = void, P0 = unknown>(_URLHandleResourceDidCancelLoading: P0): R;
    URLHandleResourceDidFinishLoading<R = void, P0 = unknown>(_URLHandleResourceDidFinishLoading: P0): R;
    URLHandleResourceDidBeginLoading<R = void, P0 = unknown>(_URLHandleResourceDidBeginLoading: P0): R;
    URLHandle_resourceDataDidBecomeAvailable<R = void, P0 = unknown, P1 = unknown>(_URLHandle: P0, _resourceDataDidBecomeAvailable: P1): R;
    connection_didFailWithError<R = void, P0 = unknown, P1 = unknown>(_connection: P0, _didFailWithError: P1): R;
    connectionDidFinishLoading<R = void, P0 = unknown>(_connectionDidFinishLoading: P0): R;
    connection_didReceiveData<R = void, P0 = unknown, P1 = unknown>(_connection: P0, _didReceiveData: P1): R;
    URLHandleUsingCache<R = unknown, P0 = boolean>(_URLHandleUsingCache: P0): R;
    setProperty_forKey<R = boolean, P0 = unknown, P1 = unknown>(_setProperty: P0, _forKey: P1): R;
    setResourceData<R = boolean, P0 = unknown>(_setResourceData: P0): R;
    propertyForKey<R = unknown, P0 = unknown>(_propertyForKey: P0): R;
    loadResourceDataNotifyingClient_usingCache<R = void, P0 = unknown, P1 = boolean>(_loadResourceDataNotifyingClient: P0, _usingCache: P1): R;
    resourceDataUsingCache<R = unknown, P0 = boolean>(_resourceDataUsingCache: P0): R;
    hasDirectoryPath<R = boolean>(): R;
    isFileURL<R = boolean>(): R;
    fragment<R = unknown>(): R;
    query<R = unknown>(): R;
    parameterString<R = unknown>(): R;
    path<R = unknown>(): R;
    relativePath<R = unknown>(): R;
    password<R = unknown>(): R;
    user<R = unknown>(): R;
    port<R = unknown>(): R;
    host<R = unknown>(): R;
    standardizedURL<R = unknown>(): R;
    absoluteURL<R = unknown>(): R;
    absoluteString<R = unknown>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    description<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    hash<R = number>(): R;
    isEqual<R = boolean, P0 = unknown>(_isEqual: P0): R;
    initByResolvingAliasFileAtURL_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initByResolvingAliasFileAtURL: P0, _options: P1, _error: P2): R;
    initByResolvingBookmarkData_options_relativeToURL_bookmarkDataIsStale_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = string, P4 = unknown>(_initByResolvingBookmarkData: P0, _options: P1, _relativeToURL: P2, _bookmarkDataIsStale: P3, _error: P4): R;
    fileSystemRepresentation<R = string>(): R;
    getFileSystemRepresentation_maxLength<R = boolean, P0 = string, P1 = number>(_getFileSystemRepresentation: P0, _maxLength: P1): R;
    initFileURLWithFileSystemRepresentation_isDirectory_relativeToURL<R = unknown, P0 = string, P1 = boolean, P2 = unknown>(_initFileURLWithFileSystemRepresentation: P0, _isDirectory: P1, _relativeToURL: P2): R;
    initFileURLWithPath_relativeToURL<R = unknown, P0 = unknown, P1 = unknown>(_initFileURLWithPath: P0, _relativeToURL: P1): R;
    initFileURLWithPath_isDirectory_relativeToURL<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown>(_initFileURLWithPath: P0, _isDirectory: P1, _relativeToURL: P2): R;
    initFileURLWithPath_isDirectory<R = unknown, P0 = unknown, P1 = boolean>(_initFileURLWithPath: P0, _isDirectory: P1): R;
    initFileURLWithPath<R = unknown, P0 = unknown>(_initFileURLWithPath: P0): R;
    dataRepresentation<R = unknown>(): R;
    initAbsoluteURLWithDataRepresentation_relativeToURL<R = unknown, P0 = unknown, P1 = unknown>(_initAbsoluteURLWithDataRepresentation: P0, _relativeToURL: P1): R;
    initWithDataRepresentation_relativeToURL<R = unknown, P0 = unknown, P1 = unknown>(_initWithDataRepresentation: P0, _relativeToURL: P1): R;
    initWithScheme_host_path<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithScheme: P0, _host: P1, _path: P2): R;
    initWithString<R = unknown, P0 = unknown>(_initWithString: P0): R;
    init<R = unknown>(): R;
    resourceSpecifier<R = unknown>(): R;
    _isAbsolute<R = boolean>(): R;
    scheme<R = unknown>(): R;
    baseURL<R = unknown>(): R;
    relativeString<R = unknown>(): R;
    dealloc<R = void>(): R;
    _freeClients<R = void>(): R;
    _clientsCreatingIfNecessary<R = __CFDictionary, P0 = boolean>(__clientsCreatingIfNecessary: P0): R;
    _cfurl<R = __CFURL>(): R;
    initWithString_relativeToURL<R = unknown, P0 = unknown, P1 = unknown>(_initWithString: P0, _relativeToURL: P1): R;
    _cfTypeID<R = number>(): R;
    isMemberOfClass<R = boolean, P0 = unknown>(_isMemberOfClass: P0): R;
    isKindOfClass<R = boolean, P0 = unknown>(_isKindOfClass: P0): R;
    _isDeallocating<R = boolean>(): R;
    _tryRetain<R = boolean>(): R;
    retainCount<R = number>(): R;
    release<R = void>(): R;
    retain<R = unknown>(): R;
    // + NSURL(NSURLExtras): 
    _web_isJavaScriptURL<R = boolean>(): R;
    _web_suggestedFilenameWithMIMEType<R = unknown, P0 = unknown>(__web_suggestedFilenameWithMIMEType: P0): R;
    _web_scriptIfJavaScriptURL<R = unknown>(): R;
    _web_URLComponents<R = unknown>(): R;
    // + NSURL(NSURLExtrasInternal): 
    _hostString<R = unknown>(): R;
    _URLByEscapingSpacesAndControlChars<R = unknown>(): R;
    _web_URLByRemovingUserAndQueryAndFragment_nowarn<R = unknown>(): R;
    _web_URLByRemovingUserAndPath_nowarn<R = unknown>(): R;
    _web_URLByRemovingLastPathComponent_nowarn<R = unknown>(): R;
    // + NSURL(NSURLPathUtilities): 
    URLByAppendingPathExtension<R = unknown, P0 = unknown>(_URLByAppendingPathExtension: P0): R;
    URLByAppendingPathComponent<R = unknown, P0 = unknown>(_URLByAppendingPathComponent: P0): R;
    URLByAppendingPathComponent_isDirectory<R = unknown, P0 = unknown, P1 = boolean>(_URLByAppendingPathComponent: P0, _isDirectory: P1): R;
    // + NSURL(NSURLPromisedItems): 
    promisedItemResourceValuesForKeys_error<R = unknown, P0 = unknown, P1 = unknown>(_promisedItemResourceValuesForKeys: P0, _error: P1): R;
    getPromisedItemResourceValue_forKey_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_getPromisedItemResourceValue: P0, _forKey: P1, _error: P2): R;
    _valueFromFaultDictionary_forKey<R = unknown, P0 = unknown, P1 = unknown>(__valueFromFaultDictionary: P0, _forKey: P1): R;
    checkPromisedItemIsReachableAndReturnError<R = boolean, P0 = unknown>(_checkPromisedItemIsReachableAndReturnError: P0): R;
    _fixedUpSideFaultError<R = unknown, P0 = unknown>(__fixedUpSideFaultError: P0): R;
    _performWithPhysicalURL<R = void, P0 = CDUnknownBlockType>(__performWithPhysicalURL: P0): R;
    _promiseExtensionRelease<R = void, P0 = number>(__promiseExtensionRelease: P0): R;
    _promiseExtensionConsume<R = number>(): R;
    // + NSURL(NSURL_NSSavePanel): 
    _urlForNSOpenSavePanelIsMobileDocumentsURL<R = boolean>(): R;
    // + NSURL(PrivateNSPasteboardSupport): 
    _absoluteStringConvertingFileReferenceURLIfRequired<R = unknown>(): R;
    // + NSURL(_NSDocumentSecurityScopeHelpers): 
    _NSDocument_debugDescription<R = unknown>(): R;
    _NSDocument_createSecurityScope<R = void>(): R;
    _NSDocument_startAccessingKnownSecurityScopedResource<R = number>(): R;
    _NSDocument_setHasKnownSecurityScope<R = void, P0 = boolean>(__NSDocument_setHasKnownSecurityScope: P0): R;
    // + NSURL(MSRemoteLibrary): 
    isEqualToCloudURL<R = boolean, P0 = unknown>(_isEqualToCloudURL: P0): R;
    // + NSURL(SMKExportRequest): 
    exportQueryParameters<R = unknown>(): R;
    // + NSURL(NSItemProvider):
    writableTypeIdentifiersForItemProvider<R = NSArray>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + NSURL(NSURLPathUtilities):
    URLByResolvingSymlinksInPath<R = NSURL>(): R;
    URLByStandardizingPath<R = NSURL>(): R;
    URLByDeletingPathExtension<R = NSURL>(): R;
    URLByDeletingLastPathComponent<R = NSURL>(): R;
    pathExtension<R = NSString>(): R;
    lastPathComponent<R = NSString>(): R;
    pathComponents<R = NSArray>(): R;
    // + NSURL(SMKExportRequest):
    mirrorCacheKey<R = NSString>(): R;
    exportImageType<R = NSString>(): R;
    constrainedExportSize<R = CGSize>(): R;
    exportScale<R = number>(): R;
    exportRect<R = CGRect>(): R;
    exportRootLayerID<R = NSString>(): R;
    isExportRequest<R = boolean>(): R;
  }
  namespace NSURL {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSURL(NSItemProvider): 
      writableTypeIdentifiersForItemProvider<R = unknown>(): R;
      objectWithItemProviderData_typeIdentifier_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_objectWithItemProviderData: P0, _typeIdentifier: P1, _error: P2): R;
      readableTypeIdentifiersForItemProvider<R = unknown>(): R;
      // + NSURL(NSKeyValueObservingCustomization): 
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
      // + NSURL(NSPasteboardSupport): 
      readingOptionsForType_pasteboard<R = number, P0 = unknown, P1 = unknown>(_readingOptionsForType: P0, _pasteboard: P1): R;
      readableTypesForPasteboard<R = unknown, P0 = unknown>(_readableTypesForPasteboard: P0): R;
      URLFromPasteboard<R = unknown, P0 = unknown>(_URLFromPasteboard: P0): R;
      // + NSURL(NSScriptAppleEventConversion): 
      _scriptingFileWithDescriptor<R = unknown, P0 = unknown>(__scriptingFileWithDescriptor: P0): R;
      // + NSURL(NSURL): 
      URLByResolvingAliasFileAtURL_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_URLByResolvingAliasFileAtURL: P0, _options: P1, _error: P2): R;
      URLByResolvingBookmarkData_options_relativeToURL_bookmarkDataIsStale_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = string, P4 = unknown>(_URLByResolvingBookmarkData: P0, _options: P1, _relativeToURL: P2, _bookmarkDataIsStale: P3, _error: P4): R;
      fileURLWithFileSystemRepresentation_isDirectory_relativeToURL<R = unknown, P0 = string, P1 = boolean, P2 = unknown>(_fileURLWithFileSystemRepresentation: P0, _isDirectory: P1, _relativeToURL: P2): R;
      fileURLWithPath_relativeToURL<R = unknown, P0 = unknown, P1 = unknown>(_fileURLWithPath: P0, _relativeToURL: P1): R;
      fileURLWithPath_isDirectory_relativeToURL<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown>(_fileURLWithPath: P0, _isDirectory: P1, _relativeToURL: P2): R;
      fileURLWithPath_isDirectory<R = unknown, P0 = unknown, P1 = boolean>(_fileURLWithPath: P0, _isDirectory: P1): R;
      fileURLWithPath<R = unknown, P0 = unknown>(_fileURLWithPath: P0): R;
      absoluteURLWithDataRepresentation_relativeToURL<R = unknown, P0 = unknown, P1 = unknown>(_absoluteURLWithDataRepresentation: P0, _relativeToURL: P1): R;
      URLWithDataRepresentation_relativeToURL<R = unknown, P0 = unknown, P1 = unknown>(_URLWithDataRepresentation: P0, _relativeToURL: P1): R;
      URLWithString_relativeToURL<R = unknown, P0 = unknown, P1 = unknown>(_URLWithString: P0, _relativeToURL: P1): R;
      URLWithString<R = unknown, P0 = unknown>(_URLWithString: P0): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      // + NSURL(NSURLExtras): 
      _web_URLWithComponents<R = unknown, P0 = unknown>(__web_URLWithComponents: P0): R;
      _web_URLWithString_relativeToURL<R = unknown, P0 = unknown, P1 = unknown>(__web_URLWithString: P0, _relativeToURL: P1): R;
      // + NSURL(NSURLExtrasInternal): 
      _URLWithData_relativeToURL<R = unknown, P0 = unknown, P1 = unknown>(__URLWithData: P0, _relativeToURL: P1): R;
      _URLWithDataAsString_relativeToURL<R = unknown, P0 = unknown, P1 = unknown>(__URLWithDataAsString: P0, _relativeToURL: P1): R;
      // + NSURL(NSURLPathUtilities): 
      fileURLWithPathComponents<R = unknown, P0 = unknown>(_fileURLWithPathComponents: P0): R;
      // + NSURL(PrivateNSPasteboardSupport): 
      _securityScopedURLFromPasteboard<R = unknown, P0 = unknown>(__securityScopedURLFromPasteboard: P0): R;
      _convertedFileReferenceURLDataOrNil<R = unknown, P0 = __CFData>(__convertedFileReferenceURLDataOrNil: P0): R;
      _URLFromPasteboardNSData<R = unknown, P0 = __CFData>(__URLFromPasteboardNSData: P0): R;
      // + NSURL(Licensing): 
      websiteAvailableVersionsURLForLicense<R = unknown, P0 = unknown>(_websiteAvailableVersionsURLForLicense: P0): R;
      websiteRenewalURLForLicenseKey<R = unknown, P0 = unknown>(_websiteRenewalURLForLicenseKey: P0): R;
      websiteRenewalURLForLicense<R = unknown, P0 = unknown>(_websiteRenewalURLForLicense: P0): R;
    }
  }
}

declare const NSURL: cocoa.NSURL.CLASS;
