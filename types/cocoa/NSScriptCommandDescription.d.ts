/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptCommandDescription<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    createCommandInstanceWithZone<R = unknown, P0 = _NSZone>(_createCommandInstanceWithZone: P0): R;
    createCommandInstance<R = unknown>(): R;
    isOptionalArgumentWithName<R = boolean, P0 = unknown>(_isOptionalArgumentWithName: P0): R;
    appleEventCodeForArgumentWithName<R = number, P0 = unknown>(_appleEventCodeForArgumentWithName: P0): R;
    typeForArgumentWithName<R = unknown, P0 = unknown>(_typeForArgumentWithName: P0): R;
    _argumentDescriptionsByName<R = unknown>(): R;
    initWithSuiteName_commandName_dictionary<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithSuiteName: P0, _commandName: P1, _dictionary: P2): R;
    dealloc<R = void>(): R;
    _appendEventDeclarationsToAETEData_includingParts<R = number, P0 = unknown, P1 = number>(__appendEventDeclarationsToAETEData: P0, _includingParts: P1): R;
    _hasHiddenParts<R = boolean>(): R;
    _argumentDescriptionForKey<R = unknown, P0 = unknown>(__argumentDescriptionForKey: P0): R;
    _firstPresentableName<R = unknown>(): R;
    _presentableResultDescription<R = unknown>(): R;
    _presentableNames<R = unknown>(): R;
    _presentableDescription<R = unknown>(): R;
    _isHidden<R = boolean>(): R;
    _resultTypeDescription<R = unknown>(): R;
    _argumentDescriptions<R = unknown>(): R;
    _addAccessGroups<R = void, P0 = unknown>(__addAccessGroups: P0): R;
    _setAccessGroups<R = void, P0 = unknown>(__setAccessGroups: P0): R;
    _accessGroups<R = unknown>(): R;
    _matchesAppleEventCode_classCode<R = boolean, P0 = number, P1 = number>(__matchesAppleEventCode: P0, _classCode: P1): R;
    _synonymDescriptions<R = unknown>(): R;
    _isFromSDEF<R = boolean>(): R;
    _reconcileToSuiteRegistry<R = void, P0 = unknown>(__reconcileToSuiteRegistry: P0): R;
    _initWithProperties_commandName_resultTypeAppleEventCode<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(__initWithProperties: P0, _commandName: P1, _resultTypeAppleEventCode: P2): R;
    _initWithProperties<R = unknown, P0 = unknown>(__initWithProperties: P0): R;
    _initWithSuiteName_commandName_implDeclaration_presoDeclaration<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(__initWithSuiteName: P0, _commandName: P1, _implDeclaration: P2, _presoDeclaration: P3): R;
    description<R = unknown>(): R;
    _descriptionWithTabCount<R = unknown, P0 = number>(__descriptionWithTabCount: P0): R;
    argumentNames<R = NSArray>(): R;
    appleEventCodeForReturnType<R = number>(): R;
    returnType<R = NSString>(): R;
    commandClassName<R = NSString>(): R;
    appleEventCode<R = number>(): R;
    appleEventClassCode<R = number>(): R;
    commandName<R = NSString>(): R;
    suiteName<R = NSString>(): R;
  }
  namespace NSScriptCommandDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSScriptCommandDescription>(): R;
      new: <R = NSScriptCommandDescription>() => R;
      _argumentDescriptionsFromUnnamedImplDeclaration_presoDeclaration_namedImplDeclarations_presoDeclarations_suiteName_commandName<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown>(__argumentDescriptionsFromUnnamedImplDeclaration: P0, _presoDeclaration: P1, _namedImplDeclarations: P2, _presoDeclarations: P3, _suiteName: P4, _commandName: P5): R;
    }
  }
}

declare const NSScriptCommandDescription: cocoa.NSScriptCommandDescription.CLASS;
