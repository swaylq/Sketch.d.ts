/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPasteboard<T0 = void, T1 = void, T2 = void> extends NSObject {
    stringForType<R = unknown, P0 = unknown>(_stringForType: P0): R;
    setString_forType<R = boolean, P0 = unknown, P1 = unknown>(_setString: P0, _forType: P1): R;
    _propertyListForType_securityScoped<R = unknown, P0 = unknown, P1 = boolean>(__propertyListForType: P0, _securityScoped: P1): R;
    propertyListForType<R = unknown, P0 = unknown>(_propertyListForType: P0): R;
    setPropertyList_forType<R = boolean, P0 = unknown, P1 = unknown>(_setPropertyList: P0, _forType: P1): R;
    setDataProvider_forTypes<R = boolean, P0 = unknown, P1 = unknown>(_setDataProvider: P0, _forTypes: P1): R;
    dataForType<R = unknown, P0 = unknown>(_dataForType: P0): R;
    _dataForType_securityScoped<R = unknown, P0 = unknown, P1 = boolean>(__dataForType: P0, _securityScoped: P1): R;
    setData_forType<R = boolean, P0 = unknown, P1 = unknown>(_setData: P0, _forType: P1): R;
    availableTypeFromArray<R = unknown, P0 = unknown>(_availableTypeFromArray: P0): R;
    addTypes_owner<R = number, P0 = unknown, P1 = unknown>(_addTypes: P0, _owner: P1): R;
    declareTypes_owner<R = number, P0 = unknown, P1 = unknown>(_declareTypes: P0, _owner: P1): R;
    canReadObjectForClasses_options<R = boolean, P0 = unknown, P1 = unknown>(_canReadObjectForClasses: P0, _options: P1): R;
    canReadItemWithDataConformingToTypes<R = boolean, P0 = unknown>(_canReadItemWithDataConformingToTypes: P0): R;
    _conformingTypeIdentifiers<R = unknown>(): R;
    indexOfPasteboardItem<R = number, P0 = unknown>(_indexOfPasteboardItem: P0): R;
    readObjectsForClasses_options<R = unknown, P0 = unknown, P1 = unknown>(_readObjectsForClasses: P0, _options: P1): R;
    _contentsOfURL_conformToTypeIdentifiers<R = boolean, P0 = unknown, P1 = unknown>(__contentsOfURL: P0, _conformToTypeIdentifiers: P1): R;
    writeObjects<R = boolean, P0 = unknown>(_writeObjects: P0): R;
    clearContents<R = number>(): R;
    prepareForNewContentsWithOptions<R = number, P0 = number>(_prepareForNewContentsWithOptions: P0): R;
    _dataWithoutConversionForType_securityScoped<R = unknown, P0 = unknown, P1 = boolean>(__dataWithoutConversionForType: P0, _securityScoped: P1): R;
    _dataForType_index_usesPboardTypes_combinesItems_securityScoped<R = unknown, P0 = unknown, P1 = number, P2 = boolean, P3 = boolean, P4 = boolean>(__dataForType: P0, _index: P1, _usesPboardTypes: P2, _combinesItems: P3, _securityScoped: P4): R;
    _canRequestDataForType_index_usesPboardTypes_combinesItems<R = boolean, P0 = unknown, P1 = number, P2 = boolean, P3 = boolean>(__canRequestDataForType: P0, _index: P1, _usesPboardTypes: P2, _combinesItems: P3): R;
    _combinedPasteboardDataForTypeIdentifier<R = unknown, P0 = unknown>(__combinedPasteboardDataForTypeIdentifier: P0): R;
    _attachSecurityScopeToURL_index<R = boolean, P0 = unknown, P1 = number>(__attachSecurityScopeToURL: P0, _index: P1): R;
    _dataWithoutConversionForTypeIdentifier_securityScoped<R = unknown, P0 = unknown, P1 = boolean>(__dataWithoutConversionForTypeIdentifier: P0, _securityScoped: P1): R;
    _dataWithoutConversionForTypeIdentifier_index_securityScoped<R = unknown, P0 = unknown, P1 = number, P2 = boolean>(__dataWithoutConversionForTypeIdentifier: P0, _index: P1, _securityScoped: P2): R;
    _availableTypeFromArray_inExistingTypes<R = unknown, P0 = unknown, P1 = unknown>(__availableTypeFromArray: P0, _inExistingTypes: P1): R;
    _typesAtIndex_combinesItems<R = unknown, P0 = number, P1 = boolean>(__typesAtIndex: P0, _combinesItems: P1): R;
    _cachedTypeNameUnion<R = unknown>(): R;
    _updateTypeCacheIfNeeded<R = void>(): R;
    _setOwner_forTypes_atIndex_selector_usesPboardTypes<R = number, P0 = unknown, P1 = unknown, P2 = number, P3 = string, P4 = boolean>(__setOwner: P0, _forTypes: P1, _atIndex: P2, _selector: P3, _usesPboardTypes: P4): R;
    _setData_forType_index_usesPboardTypes<R = boolean, P0 = unknown, P1 = unknown, P2 = number, P3 = boolean>(__setData: P0, _forType: P1, _index: P2, _usesPboardTypes: P3): R;
    _pasteboardItems<R = unknown>(): R;
    _promiseTypeNameForIdentifier<R = unknown, P0 = __CFString>(__promiseTypeNameForIdentifier: P0): R;
    _currentGeneration<R = number>(): R;
    _cfPasteboard<R = __CFPasteboard>(): R;
    releaseGlobally<R = void>(): R;
    _removeFromGlobalTable<R = void>(): R;
    _clearOutstandingPromises<R = void>(): R;
    dealloc<R = void>(): R;
    _restrictSandboxExtensionAccess<R = void>(): R;
    _addConversionsFromTypeIdentifiers_atIndex_usesPboardTypes<R = void, P0 = unknown, P1 = number, P2 = boolean>(__addConversionsFromTypeIdentifiers: P0, _atIndex: P1, _usesPboardTypes: P2): R;
    _dataWithConversionForTypeIdentifier_atIndex_securityScoped<R = unknown, P0 = unknown, P1 = number, P2 = boolean>(__dataWithConversionForTypeIdentifier: P0, _atIndex: P1, _securityScoped: P2): R;
    _dataWithConversionForType_securityScoped<R = unknown, P0 = unknown, P1 = boolean>(__dataWithConversionForType: P0, _securityScoped: P1): R;
    _conformingTypes<R = unknown>(): R;
    readFileWrapper<R = unknown>(): R;
    readFileContentsType_toFile<R = unknown, P0 = unknown, P1 = unknown>(_readFileContentsType: P0, _toFile: P1): R;
    attemptOverwrite<R = boolean, P0 = unknown>(_attemptOverwrite: P0): R;
    writeFileWrapper<R = boolean, P0 = unknown>(_writeFileWrapper: P0): R;
    writeFileContents<R = boolean, P0 = unknown>(_writeFileContents: P0): R;
    types<R = NSArray>(): R;
    pasteboardItems<R = NSArray>(): R;
    changeCount<R = number>(): R;
    name<R = NSString>(): R;
  }
  namespace NSPasteboard {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPasteboard>(): R;
      new: <R = NSPasteboard>() => R;
      _propertyListForType_fromData<R = unknown, P0 = unknown, P1 = unknown>(__propertyListForType: P0, _fromData: P1): R;
      _isValidPasteboardUTI_logStringMessage<R = boolean, P0 = unknown, P1 = unknown>(__isValidPasteboardUTI: P0, _logStringMessage: P1): R;
      _convertDataToString<R = unknown, P0 = unknown>(__convertDataToString: P0): R;
      _convertStringToData<R = unknown, P0 = unknown>(__convertStringToData: P0): R;
      _convertDataToPropertyList<R = unknown, P0 = unknown>(__convertDataToPropertyList: P0): R;
      _convertPropertyListToData<R = unknown, P0 = unknown>(__convertPropertyListToData: P0): R;
      initialize<R = void>(): R;
      _provideAllPromisedData<R = void, P0 = unknown>(__provideAllPromisedData: P0): R;
      pasteboardWithName<R = unknown, P0 = unknown>(_pasteboardWithName: P0): R;
      pasteboardWithUniqueName<R = unknown>(): R;
      generalPasteboard<R = unknown>(): R;
      _pasteboardWithName<R = unknown, P0 = unknown>(__pasteboardWithName: P0): R;
      alloc<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      _typeIdentifierIskUTTypeFileURL<R = boolean, P0 = unknown>(__typeIdentifierIskUTTypeFileURL: P0): R;
      _resetUsesUTIsOnly<R = void>(): R;
      _usesUTIsOnly<R = boolean>(): R;
      _setConversionFromData_typeIdentifier_inPasteboard_generation_item<R = void, P0 = unknown, P1 = unknown, P2 = __CFPasteboard, P3 = number, P4 = void>(__setConversionFromData: P0, _typeIdentifier: P1, _inPasteboard: P2, _generation: P3, _item: P4): R;
      _typeIdentifiersIncludingConversionsFromTypeIdentifiers_usesPboardTypes<R = unknown, P0 = unknown, P1 = boolean>(__typeIdentifiersIncludingConversionsFromTypeIdentifiers: P0, _usesPboardTypes: P1): R;
      _typeIdentifiersIncludingConversionsFromTypeIdentifiers<R = unknown, P0 = unknown>(__typeIdentifiersIncludingConversionsFromTypeIdentifiers: P0): R;
      _typesIncludingConversionsFromTypes<R = unknown, P0 = unknown>(__typesIncludingConversionsFromTypes: P0): R;
      _typeIdentifierForName_securityScoped<R = __CFString, P0 = unknown, P1 = boolean>(__typeIdentifierForName: P0, _securityScoped: P1): R;
      _typeIdentifierForName<R = __CFString, P0 = unknown>(__typeIdentifierForName: P0): R;
      _oldStyleTypeNameForIdentifier<R = unknown, P0 = __CFString>(__oldStyleTypeNameForIdentifier: P0): R;
      pasteboardByFilteringTypesInPasteboard<R = unknown, P0 = unknown>(_pasteboardByFilteringTypesInPasteboard: P0): R;
      pasteboardByFilteringData_ofType<R = unknown, P0 = unknown, P1 = unknown>(_pasteboardByFilteringData: P0, _ofType: P1): R;
      pasteboardByFilteringFile<R = unknown, P0 = unknown>(_pasteboardByFilteringFile: P0): R;
      typesFilterableTo<R = unknown, P0 = unknown>(_typesFilterableTo: P0): R;
    }
  }
}

declare const NSPasteboard: cocoa.NSPasteboard.CLASS;
