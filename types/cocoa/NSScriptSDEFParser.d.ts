/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptSDEFParser<T0 = void, T1 = void, T2 = void> extends NSObject, NSXMLParserDelegateProtocol {
    suiteDescriptions<R = unknown>(): R;
    _createValueTypeDescriptionFromElement<R = unknown, P0 = unknown>(__createValueTypeDescriptionFromElement: P0): R;
    _createTypeDescriptionFromElement<R = unknown, P0 = unknown>(__createTypeDescriptionFromElement: P0): R;
    _createToOneRelationshipDescriptionFromElement<R = unknown, P0 = unknown>(__createToOneRelationshipDescriptionFromElement: P0): R;
    _createToManyRelationshipDescriptionFromElement<R = unknown, P0 = unknown>(__createToManyRelationshipDescriptionFromElement: P0): R;
    _createSuiteDescriptionArrayFromDictionaryElement<R = unknown, P0 = unknown>(__createSuiteDescriptionArrayFromDictionaryElement: P0): R;
    _createSynonymDescriptionFromElement<R = unknown, P0 = unknown>(__createSynonymDescriptionFromElement: P0): R;
    _createSuiteDescriptionFromElement<R = unknown, P0 = unknown>(__createSuiteDescriptionFromElement: P0): R;
    _createResultDescriptionFromElement<R = unknown, P0 = unknown>(__createResultDescriptionFromElement: P0): R;
    _createRespondsToDescriptionFromElement<R = unknown, P0 = unknown>(__createRespondsToDescriptionFromElement: P0): R;
    _createRecordTypeDescriptionFromElement<R = unknown, P0 = unknown>(__createRecordTypeDescriptionFromElement: P0): R;
    _createPropertyDescriptionFromElement<R = unknown, P0 = unknown>(__createPropertyDescriptionFromElement: P0): R;
    _createEnumeratorDescriptionFromElement<R = unknown, P0 = unknown>(__createEnumeratorDescriptionFromElement: P0): R;
    _createEnumerationDescriptionFromElement<R = unknown, P0 = unknown>(__createEnumerationDescriptionFromElement: P0): R;
    _createAccessGroupDescriptionFromElement<R = unknown, P0 = unknown>(__createAccessGroupDescriptionFromElement: P0): R;
    _createCommandDescriptionFromElement<R = unknown, P0 = unknown>(__createCommandDescriptionFromElement: P0): R;
    _createCocoaDescriptionFromElement<R = unknown, P0 = unknown>(__createCocoaDescriptionFromElement: P0): R;
    _createClassExtensionDescriptionFromElement<R = unknown, P0 = unknown>(__createClassExtensionDescriptionFromElement: P0): R;
    _createClassDescriptionFromElement<R = unknown, P0 = unknown>(__createClassDescriptionFromElement: P0): R;
    _createArgumentDescriptionFromElement<R = unknown, P0 = unknown>(__createArgumentDescriptionFromElement: P0): R;
    _currentSuiteName<R = unknown>(): R;
    _typeNameFromElement_isOptional<R = unknown, P0 = unknown, P1 = boolean>(__typeNameFromElement: P0, _isOptional: P1): R;
    _methodSelectorFromElement_withName<R = unknown, P0 = unknown, P1 = unknown>(__methodSelectorFromElement: P0, _withName: P1): R;
    _classNameFromElement_withName<R = unknown, P0 = unknown, P1 = unknown>(__classNameFromElement: P0, _withName: P1): R;
    _argumentKeyFromElement_withName<R = unknown, P0 = unknown, P1 = unknown>(__argumentKeyFromElement: P0, _withName: P1): R;
    _propertyKeyFromElement_withName<R = unknown, P0 = unknown, P1 = unknown>(__propertyKeyFromElement: P0, _withName: P1): R;
    _implementationAttribute_fromElement_withName_capitalizing<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean>(__implementationAttribute: P0, _fromElement: P1, _withName: P2, _capitalizing: P3): R;
    _propertyAccessFromElement<R = number, P0 = unknown>(__propertyAccessFromElement: P0): R;
    _accessValueForAttributeKey_fromElement<R = number, P0 = unknown, P1 = unknown>(__accessValueForAttributeKey: P0, _fromElement: P1): R;
    _booleanValueForAttributeKey_fromElement<R = boolean, P0 = unknown, P1 = unknown>(__booleanValueForAttributeKey: P0, _fromElement: P1): R;
    _booleanValueForCocoaAttributeKey_fromElement<R = boolean, P0 = unknown, P1 = unknown>(__booleanValueForCocoaAttributeKey: P0, _fromElement: P1): R;
    _valueForRequiredCocoaAttributeKey_fromElement<R = unknown, P0 = unknown, P1 = unknown>(__valueForRequiredCocoaAttributeKey: P0, _fromElement: P1): R;
    _valueForOptionalCocoaAttributeKey_fromElement<R = unknown, P0 = unknown, P1 = unknown>(__valueForOptionalCocoaAttributeKey: P0, _fromElement: P1): R;
    setParsesCocoaElements<R = void, P0 = boolean>(_setParsesCocoaElements: P0): R;
    setBundle<R = void, P0 = unknown>(_setBundle: P0): R;
    dealloc<R = void>(): R;
    initWithDataNoCopy<R = unknown, P0 = unknown>(_initWithDataNoCopy: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSScriptSDEFParser {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSXMLParserDelegateProtocol {
      alloc<R = NSScriptSDEFParser>(): R;
      new: <R = NSScriptSDEFParser>() => R;
    }
  }
}

declare const NSScriptSDEFParser: cocoa.NSScriptSDEFParser.CLASS;
