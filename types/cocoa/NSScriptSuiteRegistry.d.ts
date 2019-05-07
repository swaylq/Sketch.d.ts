/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptSuiteRegistry<T0 = void, T1 = void, T2 = void> extends NSObject {
    aeteResource<R = unknown, P0 = unknown>(_aeteResource: P0): R;
    commandDescriptionWithAppleEventClass_andAppleEventCode<R = unknown, P0 = number, P1 = number>(_commandDescriptionWithAppleEventClass: P0, _andAppleEventCode: P1): R;
    classDescriptionWithAppleEventCode<R = unknown, P0 = number>(_classDescriptionWithAppleEventCode: P0): R;
    suiteForAppleEventCode<R = unknown, P0 = number>(_suiteForAppleEventCode: P0): R;
    commandDescriptionsInSuite<R = unknown, P0 = unknown>(_commandDescriptionsInSuite: P0): R;
    classDescriptionsInSuite<R = unknown, P0 = unknown>(_classDescriptionsInSuite: P0): R;
    bundleForSuite<R = unknown, P0 = unknown>(_bundleForSuite: P0): R;
    appleEventCodeForSuite<R = number, P0 = unknown>(_appleEventCodeForSuite: P0): R;
    registerCommandDescription<R = void, P0 = unknown>(_registerCommandDescription: P0): R;
    registerClassDescription<R = void, P0 = unknown>(_registerClassDescription: P0): R;
    _newRegisteredSuiteDescriptionForName<R = unknown, P0 = unknown>(__newRegisteredSuiteDescriptionForName: P0): R;
    loadSuiteWithDictionary_fromBundle<R = void, P0 = unknown, P1 = unknown>(_loadSuiteWithDictionary: P0, _fromBundle: P1): R;
    loadSuitesFromBundle<R = void, P0 = unknown>(_loadSuitesFromBundle: P0): R;
    dealloc<R = void>(): R;
    _loadSuitesForSecurityOverride<R = void>(): R;
    _loadSuitesForJustLoadedBundle<R = void, P0 = unknown>(__loadSuitesForJustLoadedBundle: P0): R;
    _loadSuitesForAlreadyLoadedBundles<R = void>(): R;
    _loadIntrinsicScriptingDefinitions<R = void>(): R;
    _loadSuitesFromSDEFData_bundle<R = void, P0 = unknown, P1 = unknown>(__loadSuitesFromSDEFData: P0, _bundle: P1): R;
    _loadSuiteDescription<R = void, P0 = unknown>(__loadSuiteDescription: P0): R;
    _registerOrCollectSuiteDescription<R = void, P0 = unknown>(__registerOrCollectSuiteDescription: P0): R;
    _registerSuiteDescriptions<R = void, P0 = unknown>(__registerSuiteDescriptions: P0): R;
    _aeteDataForAllSuites<R = unknown>(): R;
    _appendTypeNamesSuiteDeclarationToAETEData<R = number, P0 = unknown>(__appendTypeNamesSuiteDeclarationToAETEData: P0): R;
    _appendTypeDefinitionsSuiteDeclarationToAETEData<R = number, P0 = unknown>(__appendTypeDefinitionsSuiteDeclarationToAETEData: P0): R;
    description<R = unknown>(): R;
    _suiteDescriptions<R = unknown>(): R;
    _initWithSDEFData_otherAppBundle<R = unknown, P0 = unknown, P1 = unknown>(__initWithSDEFData: P0, _otherAppBundle: P1): R;
    _typeDescriptionForAppleEventCode<R = unknown, P0 = number>(__typeDescriptionForAppleEventCode: P0): R;
    _listTypeDescriptions<R = unknown>(): R;
    _complexTypeDescriptions<R = unknown>(): R;
    _suiteDescriptionsByName<R = unknown>(): R;
    _subclassDescriptionsForDescription<R = unknown, P0 = unknown>(__subclassDescriptionsForDescription: P0): R;
    _objectSpecifierTypeDescription<R = unknown>(): R;
    _objectTypeDescriptionForClassAppleEventCode_isValid<R = unknown, P0 = number, P1 = string>(__objectTypeDescriptionForClassAppleEventCode: P0, _isValid: P1): R;
    _typeDescriptionForName_suiteName_isValid<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(__typeDescriptionForName: P0, _suiteName: P1, _isValid: P2): R;
    _typeDescriptionForName<R = unknown, P0 = unknown>(__typeDescriptionForName: P0): R;
    _classDescriptionForName_suiteName_isValid<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(__classDescriptionForName: P0, _suiteName: P1, _isValid: P2): R;
    _classDescriptionForName<R = unknown, P0 = unknown>(__classDescriptionForName: P0): R;
    _isLoadingSDEFFiles<R = boolean>(): R;
    suiteNames<R = NSArray>(): R;
  }
  namespace NSScriptSuiteRegistry {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScriptSuiteRegistry>(): R;
      new: <R = NSScriptSuiteRegistry>() => R;
      _isScriptingEnabled<R = boolean>(): R;
      setSharedScriptSuiteRegistry<R = void, P0 = unknown>(_setSharedScriptSuiteRegistry: P0): R;
      sharedScriptSuiteRegistry<R = unknown>(): R;
      _loadScriptSuites<R = void>(): R;
    }
  }
}

declare const NSScriptSuiteRegistry: cocoa.NSScriptSuiteRegistry.CLASS;
