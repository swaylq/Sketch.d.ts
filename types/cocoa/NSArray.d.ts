/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSArray<T0 = void, T1 = void, T2 = void> {
    // + NSArray(AppKitAdditions): 
    NS_isIdenticalToArray<R = boolean, P0 = unknown>(_NS_isIdenticalToArray: P0): R;
    // + NSArray(NSArray): 
    writeToURL_error<R = boolean, P0 = unknown, P1 = unknown>(_writeToURL: P0, _error: P1): R;
    writeToURL_atomically<R = boolean, P0 = unknown, P1 = boolean>(_writeToURL: P0, _atomically: P1): R;
    writeToFile_atomically<R = boolean, P0 = unknown, P1 = boolean>(_writeToFile: P0, _atomically: P1): R;
    _stringToWrite<R = unknown>(): R;
    initWithContentsOfURL_error<R = unknown, P0 = unknown, P1 = unknown>(_initWithContentsOfURL: P0, _error: P1): R;
    initWithContentsOfURL<R = unknown, P0 = unknown>(_initWithContentsOfURL: P0): R;
    initWithContentsOfFile<R = unknown, P0 = unknown>(_initWithContentsOfFile: P0): R;
    sortedArrayUsingSelector_hint<R = unknown, P0 = string, P1 = unknown>(_sortedArrayUsingSelector: P0, _hint: P1): R;
    sortedArrayUsingFunction_context_hint<R = unknown, P0 = CDUnknownFunctionPointerType, P1 = void, P2 = unknown>(_sortedArrayUsingFunction: P0, _context: P1, _hint: P2): R;
    sortedArrayHint<R = unknown>(): R;
    classForCoder<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    debugDescription<R = unknown>(): R;
    // + NSArray(NSArrayPathExtensions): 
    stringsByAppendingPathComponent<R = unknown, P0 = unknown>(_stringsByAppendingPathComponent: P0): R;
    pathsMatchingExtensions<R = unknown, P0 = unknown>(_pathsMatchingExtensions: P0): R;
    // + NSArray(NSArrayPortCoding): 
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    // + NSArray(NSDeprecatedKeyValueCoding): 
    takeValue_forKey<R = void, P0 = unknown, P1 = unknown>(_takeValue: P0, _forKey: P1): R;
    // + NSArray(NSKeyValueCoding): 
    valueForKeyPath<R = unknown, P0 = unknown>(_valueForKeyPath: P0): R;
    setValue_forKey<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forKey: P1): R;
    valueForKey<R = unknown, P0 = unknown>(_valueForKey: P0): R;
    _distinctUnionOfSetsForKeyPath<R = unknown, P0 = unknown>(__distinctUnionOfSetsForKeyPath: P0): R;
    _distinctUnionOfObjectsForKeyPath<R = unknown, P0 = unknown>(__distinctUnionOfObjectsForKeyPath: P0): R;
    _distinctUnionOfArraysForKeyPath<R = unknown, P0 = unknown>(__distinctUnionOfArraysForKeyPath: P0): R;
    _unionOfSetsForKeyPath<R = unknown, P0 = unknown>(__unionOfSetsForKeyPath: P0): R;
    _unionOfArraysForKeyPath<R = unknown, P0 = unknown>(__unionOfArraysForKeyPath: P0): R;
    _unionOfObjectsForKeyPath<R = unknown, P0 = unknown>(__unionOfObjectsForKeyPath: P0): R;
    _minForKeyPath<R = unknown, P0 = unknown>(__minForKeyPath: P0): R;
    _maxForKeyPath<R = unknown, P0 = unknown>(__maxForKeyPath: P0): R;
    _countForKeyPath<R = unknown, P0 = unknown>(__countForKeyPath: P0): R;
    _avgForKeyPath<R = unknown, P0 = unknown>(__avgForKeyPath: P0): R;
    _sumForKeyPath<R = unknown, P0 = unknown>(__sumForKeyPath: P0): R;
    // + NSArray(NSKeyValueCodingPrivate): 
    _validateValue_forKeyPath_ofObjectAtIndex_error<R = boolean, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(__validateValue: P0, _forKeyPath: P1, _ofObjectAtIndex: P2, _error: P3): R;
    _setValue_forKeyPath_ofObjectAtIndex<R = void, P0 = unknown, P1 = unknown, P2 = number>(__setValue: P0, _forKeyPath: P1, _ofObjectAtIndex: P2): R;
    _mutableSetValueForKeyPath_ofObjectAtIndex<R = unknown, P0 = unknown, P1 = number>(__mutableSetValueForKeyPath: P0, _ofObjectAtIndex: P1): R;
    _mutableOrderedSetValueForKeyPath_ofObjectAtIndex<R = unknown, P0 = unknown, P1 = number>(__mutableOrderedSetValueForKeyPath: P0, _ofObjectAtIndex: P1): R;
    _mutableArrayValueForKeyPath_ofObjectAtIndex<R = unknown, P0 = unknown, P1 = number>(__mutableArrayValueForKeyPath: P0, _ofObjectAtIndex: P1): R;
    _valueForKeyPath_ofObjectAtIndex<R = unknown, P0 = unknown, P1 = number>(__valueForKeyPath: P0, _ofObjectAtIndex: P1): R;
    // + NSArray(NSKeyValueObserverRegistration): 
    removeObserver_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_removeObserver: P0, _forKeyPath: P1): R;
    removeObserver_forKeyPath_context<R = void, P0 = unknown, P1 = unknown, P2 = void>(_removeObserver: P0, _forKeyPath: P1, _context: P2): R;
    addObserver_forKeyPath_options_context<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = void>(_addObserver: P0, _forKeyPath: P1, _options: P2, _context: P3): R;
    removeObserver_fromObjectsAtIndexes_forKeyPath<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_removeObserver: P0, _fromObjectsAtIndexes: P1, _forKeyPath: P2): R;
    removeObserver_fromObjectsAtIndexes_forKeyPath_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_removeObserver: P0, _fromObjectsAtIndexes: P1, _forKeyPath: P2, _context: P3): R;
    addObserver_toObjectsAtIndexes_forKeyPath_options_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number, P4 = void>(_addObserver: P0, _toObjectsAtIndexes: P1, _forKeyPath: P2, _options: P3, _context: P4): R;
    // + NSArray(NSKeyValueSorting): 
    sortedArrayUsingDescriptors<R = unknown, P0 = unknown>(_sortedArrayUsingDescriptors: P0): R;
    // + NSArray(NSPredicateSupport): 
    filteredArrayUsingPredicate<R = unknown, P0 = unknown>(_filteredArrayUsingPredicate: P0): R;
    // + NSArray(NSScriptAppleEventConversion): 
    _scriptingDescriptorOfListType_orReasonWhyNot<R = unknown, P0 = unknown, P1 = unknown>(__scriptingDescriptorOfListType: P0, _orReasonWhyNot: P1): R;
    _scriptingAlternativeValueRankWithDescriptor<R = number, P0 = unknown>(__scriptingAlternativeValueRankWithDescriptor: P0): R;
    // + NSArray(NSScriptKeyValueCoding): 
    coerceValue_forKey<R = unknown, P0 = unknown, P1 = unknown>(_coerceValue: P0, _forKey: P1): R;
    removeValueAtIndex_fromPropertyWithKey<R = void, P0 = number, P1 = unknown>(_removeValueAtIndex: P0, _fromPropertyWithKey: P1): R;
    insertValue_atIndex_inPropertyWithKey<R = void, P0 = unknown, P1 = number, P2 = unknown>(_insertValue: P0, _atIndex: P1, _inPropertyWithKey: P2): R;
    replaceValueAtIndex_inPropertyWithKey_withValue<R = void, P0 = number, P1 = unknown, P2 = unknown>(_replaceValueAtIndex: P0, _inPropertyWithKey: P1, _withValue: P2): R;
    valueAtIndex_inPropertyWithKey<R = unknown, P0 = number, P1 = unknown>(_valueAtIndex: P0, _inPropertyWithKey: P1): R;
    // + NSArray(NSScriptingInternal): 
    _scriptingSetOfObjectsForSpecifier<R = unknown, P0 = unknown>(__scriptingSetOfObjectsForSpecifier: P0): R;
    _scriptingArrayOfObjectsForSpecifier<R = unknown, P0 = unknown>(__scriptingArrayOfObjectsForSpecifier: P0): R;
    _scriptingObjectForSpecifier<R = unknown, P0 = unknown>(__scriptingObjectForSpecifier: P0): R;
    _scriptingValueForSpecifier<R = unknown, P0 = unknown>(__scriptingValueForSpecifier: P0): R;
    // + NSArray(NSScriptingInternalCommandHandling): 
    _scriptingAddToReceiversArray<R = void, P0 = unknown>(__scriptingAddToReceiversArray: P0): R;
    _scriptingCanHandleCommand<R = boolean, P0 = unknown>(__scriptingCanHandleCommand: P0): R;
    _scriptingMightHandleCommand<R = boolean, P0 = unknown>(__scriptingMightHandleCommand: P0): R;
    // + NSArray(NSScriptingInternalCounting): 
    _scriptingCountNonrecursively<R = number>(): R;
    _scriptingCountOfValueForKey<R = number, P0 = unknown>(__scriptingCountOfValueForKey: P0): R;
    _scriptingCount<R = number>(): R;
    // + NSArray(NSScriptingInternalDeleting): 
    _scriptingRemoveValueForSpecifier<R = void, P0 = unknown>(__scriptingRemoveValueForSpecifier: P0): R;
    // + NSArray(NSScriptingInternalExisting): 
    _scriptingExists<R = boolean>(): R;
    // + NSArray(NSScriptingInternalSetting): 
    _scriptingSetValue_forSpecifier<R = unknown, P0 = unknown, P1 = unknown>(__scriptingSetValue: P0, _forSpecifier: P1): R;
    // + NSArray(NSSelectionArray): 
    rangesContainLocation<R = boolean, P0 = number>(_rangesContainLocation: P0): R;
    indexOfFirstRangeContainingOrFollowing<R = number, P0 = number>(_indexOfFirstRangeContainingOrFollowing: P0): R;
    rangeAtIndex<R = _NSRange, P0 = number>(_rangeAtIndex: P0): R;
    maximumRange<R = _NSRange>(): R;
    lastRange<R = _NSRange>(): R;
    firstRange<R = _NSRange>(): R;
    // + NSArray(NSSelectionArrayAdditions): 
    _getRangeIndex_atIndex<R = boolean, P0 = number, P1 = number>(__getRangeIndex: P0, _atIndex: P1): R;
    // + NSArray(_NSBinderKeyValueCodingAdditions): 
    _invokeSelector_withArguments_onKeyPath_ofObjectAtIndex<R = void, P0 = string, P1 = unknown, P2 = unknown, P3 = number>(__invokeSelector: P0, _withArguments: P1, _onKeyPath: P2, _ofObjectAtIndex: P3): R;
    // + NSArray(MochaAdditions): 
    mo_objectForIndexedSubscript<R = unknown, P0 = NSUInteger>(_mo_objectForIndexedSubscript: P0): R;
    // + NSArray(MSBaseArchiver): 
    initWithUnarchiver<R = unknown, P0 = unknown>(_initWithUnarchiver: P0): R;
    encodeWithArchiver<R = void, P0 = unknown>(_encodeWithArchiver: P0): R;
    // + NSArray(ModelSupport): 
    propertiesAreEqual<R = boolean, P0 = unknown>(_propertiesAreEqual: P0): R;
    enumerateDescendants_withAncestors<R = void, P0 = CDUnknownBlockType, P1 = unknown>(_enumerateDescendants: P0, _withAncestors: P1): R;
    hasDefaultValues<R = boolean>(): R;
    // + NSArray(TreeAsDictionarySupport): 
    treeAsDictionary<R = unknown>(): R;
    // + NSArray(MSBaseArchiver):
    archiveReferenceIdentifier_bc<R = NSString>(): R;
  }
  namespace NSArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSArray(NSArray): 
      newWithContentsOf_immutable<R = unknown, P0 = unknown, P1 = boolean>(_newWithContentsOf: P0, _immutable: P1): R;
      arrayWithContentsOfURL_error<R = unknown, P0 = unknown, P1 = unknown>(_arrayWithContentsOfURL: P0, _error: P1): R;
      arrayWithContentsOfURL<R = unknown, P0 = unknown>(_arrayWithContentsOfURL: P0): R;
      arrayWithContentsOfFile<R = unknown, P0 = unknown>(_arrayWithContentsOfFile: P0): R;
      // + NSArray(NSScriptAppleEventConversion): 
      _scriptingArrayOfType_withDescriptor<R = unknown, P0 = unknown, P1 = unknown>(__scriptingArrayOfType: P0, _withDescriptor: P1): R;
    }
  }
}

declare const NSArray: cocoa.NSArray.CLASS;
