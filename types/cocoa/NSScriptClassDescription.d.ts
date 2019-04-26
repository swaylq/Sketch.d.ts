/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptClassDescription<T0 = void, T1 = void, T2 = void> extends NSClassDescription {
    toManyRelationshipKeys<R = unknown>(): R;
    toOneRelationshipKeys<R = unknown>(): R;
    attributeKeys<R = unknown>(): R;
    _keysForPropertyDescriptionKind<R = unknown, P0 = number>(__keysForPropertyDescriptionKind: P0): R;
    _getKeys_forPropertyDescriptionKind<R = void, P0 = unknown, P1 = number>(__getKeys: P0, _forPropertyDescriptionKind: P1): R;
    hasWritablePropertyForKey<R = boolean, P0 = unknown>(_hasWritablePropertyForKey: P0): R;
    hasReadablePropertyForKey<R = boolean, P0 = unknown>(_hasReadablePropertyForKey: P0): R;
    hasOrderedToManyRelationshipForKey<R = boolean, P0 = unknown>(_hasOrderedToManyRelationshipForKey: P0): R;
    hasPropertyForKey<R = boolean, P0 = unknown>(_hasPropertyForKey: P0): R;
    isLocationRequiredToCreateForKey<R = boolean, P0 = unknown>(_isLocationRequiredToCreateForKey: P0): R;
    _propertyDescriptionsByKey<R = unknown>(): R;
    keyWithAppleEventCode<R = unknown, P0 = number>(_keyWithAppleEventCode: P0): R;
    appleEventCodeForKey<R = number, P0 = unknown>(_appleEventCodeForKey: P0): R;
    classDescriptionForKey<R = unknown, P0 = unknown>(_classDescriptionForKey: P0): R;
    typeForKey<R = unknown, P0 = unknown>(_typeForKey: P0): R;
    selectorForCommand<R = string, P0 = unknown>(_selectorForCommand: P0): R;
    supportsCommand<R = boolean, P0 = unknown>(_supportsCommand: P0): R;
    _methodNameForCommand<R = unknown, P0 = unknown>(__methodNameForCommand: P0): R;
    matchesAppleEventCode<R = boolean, P0 = number>(_matchesAppleEventCode: P0): R;
    initWithSuiteName_className_dictionary<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithSuiteName: P0, _className: P1, _dictionary: P2): R;
    dealloc<R = void>(): R;
    _appendObjectClassDeclarationsToAETEData_includingParts<R = number, P0 = unknown, P1 = number>(__appendObjectClassDeclarationsToAETEData: P0, _includingParts: P1): R;
    _hasHiddenParts<R = boolean>(): R;
    isReadOnlyKey<R = boolean, P0 = unknown>(_isReadOnlyKey: P0): R;
    _aeteElementClassDescriptions<R = unknown>(): R;
    _aetePropertyDescriptions<R = unknown>(): R;
    _firstPresentableName<R = unknown>(): R;
    _presentablePluralName<R = unknown>(): R;
    _presentableNames<R = unknown>(): R;
    _presentableDescription<R = unknown>(): R;
    _isHidden<R = boolean>(): R;
    _addAccessGroups<R = void, P0 = unknown>(__addAccessGroups: P0): R;
    _isToManyRelationshipOrderedForKey<R = boolean, P0 = unknown>(__isToManyRelationshipOrderedForKey: P0): R;
    _primitiveTypeDescription<R = unknown>(): R;
    _contentsTypeDescription<R = unknown>(): R;
    _shouldByDefaultInsertAtBeginningOfRelationshipForKey<R = boolean, P0 = unknown>(__shouldByDefaultInsertAtBeginningOfRelationshipForKey: P0): R;
    _forKey_getType_andSuite<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__forKey: P0, _getType: P1, _andSuite: P2): R;
    _typeDescriptionForKey<R = unknown, P0 = unknown>(__typeDescriptionForKey: P0): R;
    _propertyDescriptionForKey_checkSubclasses<R = unknown, P0 = unknown, P1 = boolean>(__propertyDescriptionForKey: P0, _checkSubclasses: P1): R;
    _propertyDescriptionForKey_checkSubclasses_superclasses<R = unknown, P0 = unknown, P1 = boolean, P2 = boolean>(__propertyDescriptionForKey: P0, _checkSubclasses: P1, _superclasses: P2): R;
    _propertyDescriptionForAppleEventCode_checkSubclasses<R = unknown, P0 = number, P1 = boolean>(__propertyDescriptionForAppleEventCode: P0, _checkSubclasses: P1): R;
    _propertyDescriptionForPresentableName_checkSubclasses_superclasses<R = unknown, P0 = unknown, P1 = boolean, P2 = boolean>(__propertyDescriptionForPresentableName: P0, _checkSubclasses: P1, _superclasses: P2): R;
    _propertyDescriptionForAppleEventCode_checkSubclasses_superclasses<R = unknown, P0 = number, P1 = boolean, P2 = boolean>(__propertyDescriptionForAppleEventCode: P0, _checkSubclasses: P1, _superclasses: P2): R;
    _synonymDescriptions<R = unknown>(): R;
    _isSynonym<R = boolean>(): R;
    _isFromSDEF<R = boolean>(): R;
    _commandMethodSelectorsByName<R = unknown>(): R;
    _reconcileToExtensionDescription_suiteRegistry<R = void, P0 = unknown, P1 = unknown>(__reconcileToExtensionDescription: P0, _suiteRegistry: P1): R;
    _reconcileToSuiteRegistry<R = void, P0 = unknown>(__reconcileToSuiteRegistry: P0): R;
    _initWithClassDescription_synonymDescription<R = unknown, P0 = unknown, P1 = unknown>(__initWithClassDescription: P0, _synonymDescription: P1): R;
    _initWithProperties_defaultSubcontainerAttributeKey_inverseRelationshipKeys<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__initWithProperties: P0, _defaultSubcontainerAttributeKey: P1, _inverseRelationshipKeys: P2): R;
    _initWithProperties_primitiveType<R = unknown, P0 = unknown, P1 = unknown>(__initWithProperties: P0, _primitiveType: P1): R;
    _initWithSuiteName_className_implDeclaration_presoDeclaration<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(__initWithSuiteName: P0, _className: P1, _implDeclaration: P2, _presoDeclaration: P3): R;
    description<R = unknown>(): R;
    _descriptionWithTabCount<R = unknown, P0 = number>(__descriptionWithTabCount: P0): R;
    defaultSubcontainerAttributeKey<R = NSString>(): R;
    appleEventCode<R = number>(): R;
    superclassDescription<R = NSScriptClassDescription>(): R;
    implementationClassName<R = NSString>(): R;
    className<R = NSString>(): R;
    suiteName<R = NSString>(): R;
  }
  namespace NSScriptClassDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSClassDescription {
      alloc<R = NSScriptClassDescription>(): R;
      new: <R = NSScriptClassDescription>() => R;
      _propertyDescriptionsOfClass_fromImplDeclarations_presoDeclarations_suiteName_className<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(__propertyDescriptionsOfClass: P0, _fromImplDeclarations: P1, _presoDeclarations: P2, _suiteName: P3, _className: P4): R;
      _sortedAETEElementClassDescriptions<R = unknown, P0 = unknown>(__sortedAETEElementClassDescriptions: P0): R;
      _sortedAETEPropertyDescriptions<R = unknown, P0 = unknown>(__sortedAETEPropertyDescriptions: P0): R;
    }
  }
}

declare const NSScriptClassDescription: cocoa.NSScriptClassDescription.CLASS;
