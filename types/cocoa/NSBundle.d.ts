/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBundle<T0 = void, T1 = void, T2 = void> extends NSObject {
    preflightAndReturnError<R = boolean, P0 = unknown>(_preflightAndReturnError: P0): R;
    pathsForResourcesOfType_inDirectory_forLanguage<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_pathsForResourcesOfType: P0, _inDirectory: P1, _forLanguage: P2): R;
    pathForResource_ofType_inDirectory_forLanguage<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_pathForResource: P0, _ofType: P1, _inDirectory: P2, _forLanguage: P3): R;
    _pathsForResourcesOfType_inDirectory_forRegion<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__pathsForResourcesOfType: P0, _inDirectory: P1, _forRegion: P2): R;
    _pathForResource_ofType_inDirectory_forRegion<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(__pathForResource: P0, _ofType: P1, _inDirectory: P2, _forRegion: P3): R;
    _regionsArray<R = unknown>(): R;
    description<R = unknown>(): R;
    __static<R = void>(): R;
    objectForInfoDictionaryKey<R = unknown, P0 = unknown>(_objectForInfoDictionaryKey: P0): R;
    classNamed<R = unknown, P0 = unknown>(_classNamed: P0): R;
    invalidateResourceCache<R = void>(): R;
    bundleLanguages<R = unknown>(): R;
    versionNumber<R = number>(): R;
    URLForAuxiliaryExecutable<R = unknown, P0 = unknown>(_URLForAuxiliaryExecutable: P0): R;
    pathForAuxiliaryExecutable<R = unknown, P0 = unknown>(_pathForAuxiliaryExecutable: P0): R;
    initWithPath<R = unknown, P0 = unknown>(_initWithPath: P0): R;
    initWithURL<R = unknown, P0 = unknown>(_initWithURL: P0): R;
    dealloc<R = void>(): R;
    unload<R = boolean>(): R;
    loadAndReturnError<R = boolean, P0 = unknown>(_loadAndReturnError: P0): R;
    load<R = boolean>(): R;
    _searchForLocalizedString_foundKey_foundTable<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(__searchForLocalizedString: P0, _foundKey: P1, _foundTable: P2): R;
    localizedStringForKey_value_table<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_localizedStringForKey: P0, _value: P1, _table: P2): R;
    URLsForResourcesWithExtension_subdirectory<R = unknown, P0 = unknown, P1 = unknown>(_URLsForResourcesWithExtension: P0, _subdirectory: P1): R;
    pathsForResourcesOfType_inDirectory<R = unknown, P0 = unknown, P1 = unknown>(_pathsForResourcesOfType: P0, _inDirectory: P1): R;
    URLsForResourcesWithExtension_subdirectory_localization<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_URLsForResourcesWithExtension: P0, _subdirectory: P1, _localization: P2): R;
    pathsForResourcesOfType_inDirectory_forLocalization<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_pathsForResourcesOfType: P0, _inDirectory: P1, _forLocalization: P2): R;
    URLForResource_withExtension<R = unknown, P0 = unknown, P1 = unknown>(_URLForResource: P0, _withExtension: P1): R;
    pathForResource_ofType<R = unknown, P0 = unknown, P1 = unknown>(_pathForResource: P0, _ofType: P1): R;
    URLForResource_withExtension_subdirectory<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_URLForResource: P0, _withExtension: P1, _subdirectory: P2): R;
    pathForResource_ofType_inDirectory<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_pathForResource: P0, _ofType: P1, _inDirectory: P2): R;
    URLForResource_withExtension_subdirectory_localization<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_URLForResource: P0, _withExtension: P1, _subdirectory: P2, _localization: P3): R;
    pathForResource_ofType_inDirectory_forLocalization<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_pathForResource: P0, _ofType: P1, _inDirectory: P2, _forLocalization: P3): R;
    findBundleResourceURLsCallingMethod_passingTest<R = unknown, P0 = string, P1 = CDUnknownBlockType>(_findBundleResourceURLsCallingMethod: P0, _passingTest: P1): R;
    _cfBundleIfPresent<R = __CFBundle>(): R;
    _cfBundle<R = __CFBundle>(): R;
    preservationPriorityForTag<R = number, P0 = unknown>(_preservationPriorityForTag: P0): R;
    setPreservationPriority_forTag<R = void, P0 = number, P1 = unknown>(_setPreservationPriority: P0, _forTag: P1): R;
    setPreservationPriority_forTags<R = void, P0 = number, P1 = unknown>(_setPreservationPriority: P0, _forTags: P1): R;
    executableArchitectures<R = NSArray>(): R;
    developmentLocalization<R = NSString>(): R;
    preferredLocalizations<R = NSArray>(): R;
    localizations<R = NSArray>(): R;
    localizedInfoDictionary<R = NSDictionary>(): R;
    infoDictionary<R = NSDictionary>(): R;
    principalClass<R = unknown>(): R;
    bundleIdentifier<R = NSString>(): R;
    builtInPlugInsURL<R = NSURL>(): R;
    builtInPlugInsPath<R = NSString>(): R;
    sharedSupportURL<R = NSURL>(): R;
    sharedSupportPath<R = NSString>(): R;
    sharedFrameworksURL<R = NSURL>(): R;
    sharedFrameworksPath<R = NSString>(): R;
    privateFrameworksURL<R = NSURL>(): R;
    privateFrameworksPath<R = NSString>(): R;
    appStoreReceiptURL<R = NSURL>(): R;
    executableURL<R = NSURL>(): R;
    executablePath<R = NSString>(): R;
    resourceURL<R = NSURL>(): R;
    resourcePath<R = NSString>(): R;
    bundleURL<R = NSURL>(): R;
    bundlePath<R = NSString>(): R;
    loaded<R = boolean>(): R;
    // + NSBundle(NSBundleHelpExtension): 
    contextHelpForKey<R = unknown, P0 = unknown>(_contextHelpForKey: P0): R;
    // + NSBundle(NSBundleImageExtension): 
    imageForResource<R = unknown, P0 = unknown>(_imageForResource: P0): R;
    _newImageForResourceWithProspectiveName_imageClass<R = unknown, P0 = unknown, P1 = unknown>(__newImageForResourceWithProspectiveName: P0, _imageClass: P1): R;
    pathForImageResource<R = unknown, P0 = unknown>(_pathForImageResource: P0): R;
    URLForImageResource<R = unknown, P0 = unknown>(_URLForImageResource: P0): R;
    URLsForImageResource<R = unknown, P0 = unknown>(_URLsForImageResource: P0): R;
    // + NSBundle(NSBundleSoundExtensions): 
    pathForSoundResource<R = unknown, P0 = unknown>(_pathForSoundResource: P0): R;
    // + NSBundle(NSNibLoading): 
    loadNibNamed_owner_topLevelObjects<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_loadNibNamed: P0, _owner: P1, _topLevelObjects: P2): R;
    loadNibFile_externalNameTable_withZone<R = boolean, P0 = unknown, P1 = unknown, P2 = _NSZone>(_loadNibFile: P0, _externalNameTable: P1, _withZone: P2): R;
    // + NSBundle(NSNibLoadingInternal): 
    loadNibFile_externalNameTable_options_withZone<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = _NSZone>(_loadNibFile: P0, _externalNameTable: P1, _options: P2, _withZone: P3): R;
  }
  namespace NSBundle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSBundle>(): R;
      new: <R = NSBundle>() => R;
      preferredLocalizationsFromArray_forPreferences<R = unknown, P0 = unknown, P1 = unknown>(_preferredLocalizationsFromArray: P0, _forPreferences: P1): R;
      preferredLocalizationsFromArray<R = unknown, P0 = unknown>(_preferredLocalizationsFromArray: P0): R;
      debugDescription<R = unknown>(): R;
      mainBundle<R = unknown>(): R;
      allFrameworks<R = unknown>(): R;
      allBundles<R = unknown>(): R;
      loadedBundles<R = unknown>(): R;
      bundleForClass<R = unknown, P0 = unknown>(_bundleForClass: P0): R;
      bundleWithIdentifier<R = unknown, P0 = unknown>(_bundleWithIdentifier: P0): R;
      bundleWithURL<R = unknown, P0 = unknown>(_bundleWithURL: P0): R;
      bundleWithPath<R = unknown, P0 = unknown>(_bundleWithPath: P0): R;
      setSystemLanguages<R = void, P0 = unknown>(_setSystemLanguages: P0): R;
      URLsForResourcesWithExtension_subdirectory_inBundleWithURL<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_URLsForResourcesWithExtension: P0, _subdirectory: P1, _inBundleWithURL: P2): R;
      URLForResource_withExtension_subdirectory_inBundleWithURL<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_URLForResource: P0, _withExtension: P1, _subdirectory: P2, _inBundleWithURL: P3): R;
      findBundleResourceURLsCallingMethod_baseURL_passingTest<R = unknown, P0 = string, P1 = unknown, P2 = CDUnknownBlockType>(_findBundleResourceURLsCallingMethod: P0, _baseURL: P1, _passingTest: P2): R;
      findBundleResources_callingMethod_directory_languages_name_types_limit<R = unknown, P0 = unknown, P1 = string, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown, P6 = number>(_findBundleResources: P0, _callingMethod: P1, _directory: P2, _languages: P3, _name: P4, _types: P5, _limit: P6): R;
      // + NSBundle(NSNibLoading): 
      _loadNibFile_nameTable_options_withZone_ownerBundle<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = _NSZone, P4 = unknown>(__loadNibFile: P0, _nameTable: P1, _options: P2, _withZone: P3, _ownerBundle: P4): R;
      loadNibNamed_owner<R = boolean, P0 = unknown, P1 = unknown>(_loadNibNamed: P0, _owner: P1): R;
      load<R = void>(): R;
      // + NSBundle(NSNibLoadingInternal): 
      _loadNibFile_externalNameTable_options_withZone<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = _NSZone>(__loadNibFile: P0, _externalNameTable: P1, _options: P2, _withZone: P3): R;
      currentNibLocalizedStringsBundle<R = unknown>(): R;
      popNibLocalizedStringsBundle<R = void>(): R;
      pushNibLocalizedStringsBundle<R = void, P0 = unknown>(_pushNibLocalizedStringsBundle: P0): R;
      currentNibLoadingBundle<R = unknown>(): R;
      popNibLoadingBundle<R = void>(): R;
      pushNibLoadingBundle<R = void, P0 = unknown>(_pushNibLoadingBundle: P0): R;
      currentStringsTableName<R = unknown>(): R;
      currentNibPath<R = unknown>(): R;
      popNibPath<R = void>(): R;
      pushNibPath<R = void, P0 = unknown>(_pushNibPath: P0): R;
      _nibFileToLoadFromListOfFiles_atNibPath_isKeyed<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(__nibFileToLoadFromListOfFiles: P0, _atNibPath: P1, _isKeyed: P2): R;
    }
  }
}

declare const NSBundle: cocoa.NSBundle.CLASS;
