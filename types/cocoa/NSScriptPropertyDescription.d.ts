/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptPropertyDescription<T0 = void, T1 = void, T2 = void> extends NSObject {
    addAccessGroups<R = void, P0 = unknown>(_addAccessGroups: P0): R;
    addWriteAccessGroup<R = void, P0 = unknown>(_addWriteAccessGroup: P0): R;
    writeAccessGroups<R = unknown>(): R;
    addReadAccessGroup<R = void, P0 = unknown>(_addReadAccessGroup: P0): R;
    readAccessGroups<R = unknown>(): R;
    appleEventCode<R = number>(): R;
    isHidden<R = boolean>(): R;
    access<R = number>(): R;
    typeDescription<R = unknown>(): R;
    key<R = unknown>(): R;
    matchesPresentableName<R = boolean, P0 = unknown>(_matchesPresentableName: P0): R;
    matchesAppleEventCode<R = boolean, P0 = number>(_matchesAppleEventCode: P0): R;
    fullTypeName<R = unknown>(): R;
    setTypeDescription_forReconcilingToSuiteRegistry<R = void, P0 = unknown, P1 = unknown>(_setTypeDescription: P0, _forReconcilingToSuiteRegistry: P1): R;
    reconcileToSuiteRegistry_suiteName_className<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_reconcileToSuiteRegistry: P0, _suiteName: P1, _className: P2): R;
    dealloc<R = void>(): R;
    initWithKey_type_access_isHidden_accessGroupDescriptions<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = boolean, P4 = unknown>(_initWithKey: P0, _type: P1, _access: P2, _isHidden: P3, _accessGroupDescriptions: P4): R;
    appendElementClassDeclarationToAETEData<R = void, P0 = unknown>(_appendElementClassDeclarationToAETEData: P0): R;
    presentableRelationshipClassName<R = unknown>(): R;
    description<R = unknown>(): R;
  }
  namespace NSScriptPropertyDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScriptPropertyDescription>(): R;
      new: <R = NSScriptPropertyDescription>() => R;
      propertyDescriptionFromKey_implDeclaration_presoDeclaration_suiteName_className<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(_propertyDescriptionFromKey: P0, _implDeclaration: P1, _presoDeclaration: P2, _suiteName: P3, _className: P4): R;
    }
  }
}

declare const NSScriptPropertyDescription: cocoa.NSScriptPropertyDescription.CLASS;
