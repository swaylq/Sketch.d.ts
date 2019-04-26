/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptSuiteDescription<T0 = void, T1 = void, T2 = void> extends NSObject {
    removeCommandDescriptions<R = void, P0 = unknown>(_removeCommandDescriptions: P0): R;
    setCommandDescription<R = void, P0 = unknown>(_setCommandDescription: P0): R;
    removeClassDescriptions<R = void, P0 = unknown>(_removeClassDescriptions: P0): R;
    setClassDescription<R = void, P0 = unknown>(_setClassDescription: P0): R;
    commandDescriptionsByName<R = unknown>(): R;
    classDescriptionsByName<R = unknown>(): R;
    usesUnnamedArguments<R = boolean>(): R;
    firstPresentableName<R = unknown>(): R;
    presentableNames<R = unknown>(): R;
    presentableDescription<R = unknown>(): R;
    isHidden<R = boolean>(): R;
    typeDescriptions<R = unknown>(): R;
    commandDescriptions<R = unknown>(): R;
    classDescriptions<R = unknown>(): R;
    appleEventCode<R = number>(): R;
    name<R = unknown>(): R;
    bundle<R = unknown>(): R;
    reconcileSubdescriptionsToSuiteRegistry<R = void, P0 = unknown>(_reconcileSubdescriptionsToSuiteRegistry: P0): R;
    reconcileSelfToSuiteRegistry<R = void, P0 = unknown>(_reconcileSelfToSuiteRegistry: P0): R;
    dealloc<R = void>(): R;
    initWithProperties_suiteName_usesUnnamedArguments_classSynonymDescriptions<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean, P3 = unknown>(_initWithProperties: P0, _suiteName: P1, _usesUnnamedArguments: P2, _classSynonymDescriptions: P3): R;
    initWithProperties_classExtensionDescriptions<R = unknown, P0 = unknown, P1 = unknown>(_initWithProperties: P0, _classExtensionDescriptions: P1): R;
    appendSuiteDeclarationsToAETEData<R = number, P0 = unknown>(_appendSuiteDeclarationsToAETEData: P0): R;
    description<R = unknown>(): R;
    _descriptionWithTabCount<R = unknown, P0 = number>(__descriptionWithTabCount: P0): R;
  }
  namespace NSScriptSuiteDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScriptSuiteDescription>(): R;
      new: <R = NSScriptSuiteDescription>() => R;
      currentSuiteTerminology<R = unknown>(): R;
      currentSuiteAppleEventCode<R = number>(): R;
      suiteDescriptionFromPropertyListDeclaration_bundle<R = unknown, P0 = unknown, P1 = unknown>(_suiteDescriptionFromPropertyListDeclaration: P0, _bundle: P1): R;
      _typeDescriptionsFromEnumerationImplDeclarations_presoDeclarations_valueTypeDeclarations<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__typeDescriptionsFromEnumerationImplDeclarations: P0, _presoDeclarations: P1, _valueTypeDeclarations: P2): R;
      _commandDescriptionsFromPropertyListDeclarations_suiteName<R = unknown, P0 = unknown, P1 = unknown>(__commandDescriptionsFromPropertyListDeclarations: P0, _suiteName: P1): R;
      _classSynonymDescriptionsFromImplDeclarations_presoDeclarations<R = unknown, P0 = unknown, P1 = unknown>(__classSynonymDescriptionsFromImplDeclarations: P0, _presoDeclarations: P1): R;
      _classDescriptionsFromPropertyListDeclarations_suiteName<R = unknown, P0 = unknown, P1 = unknown>(__classDescriptionsFromPropertyListDeclarations: P0, _suiteName: P1): R;
      sortedClassDescriptions<R = unknown, P0 = unknown>(_sortedClassDescriptions: P0): R;
    }
  }
}

declare const NSScriptSuiteDescription: cocoa.NSScriptSuiteDescription.CLASS;
