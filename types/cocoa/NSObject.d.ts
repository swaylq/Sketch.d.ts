/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObject<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    init<R = this>(): R;
    // + NSObject(DefaultObservationImplementations): 
    _receiveBox<R = void, P0 = unknown>(__receiveBox: P0): R;
    removeObservation<R = void, P0 = unknown>(_removeObservation: P0): R;
    addObserver<R = unknown, P0 = unknown>(_addObserver: P0): R;
    receiveObservedValue<R = void, P0 = unknown>(_receiveObservedValue: P0): R;
    receiveObservedError<R = void, P0 = unknown>(_receiveObservedError: P0): R;
    _isToManyChangeInformation<R = boolean>(): R;
    _destroyObserverList<R = void>(): R;
    _observerStorageOfSize<R = void, P0 = number>(__observerStorageOfSize: P0): R;
    _observerStorage<R = unknown>(): R;
    addObservationTransformer<R = unknown, P0 = CDUnknownBlockType>(_addObservationTransformer: P0): R;
    addObserverBlock<R = unknown, P0 = CDUnknownBlockType>(_addObserverBlock: P0): R;
    addChainedObservers<R = unknown, P0 = unknown>(_addChainedObservers: P0): R;
    finishObserving<R = void>(): R;
    _overrideUseFastBlockObservers<R = boolean>(): R;
    // + NSObject(KVOKeyPathSupport): 
    setObservation_forObservingKeyPath<R = void, P0 = unknown, P1 = unknown>(_setObservation: P0, _forObservingKeyPath: P1): R;
    removeObservation_forObservableKeyPath<R = void, P0 = unknown, P1 = unknown>(_removeObservation: P0, _forObservableKeyPath: P1): R;
    addObserver_forObservableKeyPath<R = unknown, P0 = unknown, P1 = unknown>(_addObserver: P0, _forObservableKeyPath: P1): R;
    // + NSObject(NSAccessibilityInternal): 
    accessibilityPerformShowMenuOfChild<R = boolean, P0 = unknown>(_accessibilityPerformShowMenuOfChild: P0): R;
    _accessibilityArrayAttributeValues_index_maxCount_clientError<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = number>(__accessibilityArrayAttributeValues: P0, _index: P1, _maxCount: P2, _clientError: P3): R;
    _accessibilityArrayAttributeCount_clientError<R = number, P0 = unknown, P1 = number>(__accessibilityArrayAttributeCount: P0, _clientError: P1): R;
    _accessibilityIndexOfChild_clientError<R = number, P0 = unknown, P1 = number>(__accessibilityIndexOfChild: P0, _clientError: P1): R;
    _accessibilityCanSetValueForAttribute_clientError<R = boolean, P0 = unknown, P1 = number>(__accessibilityCanSetValueForAttribute: P0, _clientError: P1): R;
    _accessibilityValueForAttribute_clientError<R = unknown, P0 = unknown, P1 = number>(__accessibilityValueForAttribute: P0, _clientError: P1): R;
    _accessibilityAttributeNamesClientError<R = unknown, P0 = number>(__accessibilityAttributeNamesClientError: P0): R;
    // + NSObject(NSAccessibilityNotifications): 
    accessibilityShouldSendNotification<R = boolean, P0 = unknown>(_accessibilityShouldSendNotification: P0): R;
    accessibilitySupportsNotifications<R = boolean>(): R;
    // + NSObject(NSAccessibilityOverriddenAttributes): 
    accessibilityAllowsOverriddenAttributesWhenIgnored<R = boolean>(): R;
    accessibilitySupportsOverriddenAttributes<R = boolean>(): R;
    accessibilityOverriddenAttributes<R = unknown>(): R;
    // + NSObject(NSAccessibilityOverriddenAttributesArchiving): 
    accessibilityDecodeOverriddenAttributes<R = void, P0 = unknown>(_accessibilityDecodeOverriddenAttributes: P0): R;
    accessibilityEncodeOverriddenAttributes<R = void, P0 = unknown>(_accessibilityEncodeOverriddenAttributes: P0): R;
    // + NSObject(NSAccessibilityOverridingAttributes): 
    _accessibilitySetOverrideValue_forAttribute<R = boolean, P0 = unknown, P1 = unknown>(__accessibilitySetOverrideValue: P0, _forAttribute: P1): R;
    accessibilitySetOverrideValue_forAttribute<R = boolean, P0 = unknown, P1 = unknown>(_accessibilitySetOverrideValue: P0, _forAttribute: P1): R;
    // + NSObject(NSAccessibilitySectionHelper): 
    accessibilityReplaceRange_withText<R = boolean, P0 = _NSRange, P1 = unknown>(_accessibilityReplaceRange: P0, _withText: P1): R;
    accessibilityVisibleArea<R = number>(): R;
    _shouldSearchChildrenForSection<R = boolean>(): R;
    _isAccessibilityCandidateForSection<R = boolean, P0 = unknown>(__isAccessibilityCandidateForSection: P0): R;
    _isAccessibilityContainerSectionCandidate<R = boolean>(): R;
    _isAccessibilityTopLevelNavigatorSectionCandidate<R = boolean>(): R;
    _isAccessibilityContentNavigatorSectionCandidate<R = boolean>(): R;
    _isAccessibilityContentSectionCandidate<R = boolean>(): R;
    // + NSObject(NSAccessibilityTemporaryChildren): 
    accessibilityRemoveTemporaryChild<R = void, P0 = unknown>(_accessibilityRemoveTemporaryChild: P0): R;
    accessibilityAddTemporaryChild<R = void, P0 = unknown>(_accessibilityAddTemporaryChild: P0): R;
    accessibilityTemporaryChildren<R = unknown>(): R;
    // + NSObject(NSAccessibilityUIElementSpecifier): 
    accessibilityShouldUseUniqueId<R = boolean>(): R;
    _accessibilityUIElementSpecifier<R = unknown>(): R;
    _accessibilityUIElementSpecifierRegisterIfNeeded<R = unknown, P0 = boolean>(__accessibilityUIElementSpecifierRegisterIfNeeded: P0): R;
    _accessibilityUIElementSpecifierForChild_registerIfNeeded<R = unknown, P0 = unknown, P1 = boolean>(__accessibilityUIElementSpecifierForChild: P0, _registerIfNeeded: P1): R;
    _accessibilityIsTableViewDescendant<R = boolean>(): R;
    _accessibilitySpecifierComponentForChildUIElement_registerIfNeeded<R = number, P0 = unknown, P1 = boolean>(__accessibilitySpecifierComponentForChildUIElement: P0, _registerIfNeeded: P1): R;
    _accessibilityChildUIElementForSpecifierComponent<R = unknown, P0 = number>(__accessibilityChildUIElementForSpecifierComponent: P0): R;
    // + NSObject(NSAccessibilityUseConvenienceAPI): 
    _accessibilitySetUseConvenienceAPI<R = void, P0 = boolean>(__accessibilitySetUseConvenienceAPI: P0): R;
    _accessibilityUseConvenienceAPI<R = boolean>(): R;
    // + NSObject(NSArchiverCallBack): 
    replacementObjectForArchiver<R = unknown, P0 = unknown>(_replacementObjectForArchiver: P0): R;
    classForArchiver<R = unknown>(): R;
    // + NSObject(NSClassDescriptionPrimitives): 
    inverseForRelationshipKey<R = unknown, P0 = unknown>(_inverseForRelationshipKey: P0): R;
    // + NSObject(NSComparisonMethods): 
    isCaseInsensitiveLike<R = boolean, P0 = unknown>(_isCaseInsensitiveLike: P0): R;
    isLike<R = boolean, P0 = unknown>(_isLike: P0): R;
    doesContain<R = boolean, P0 = unknown>(_doesContain: P0): R;
    isGreaterThan<R = boolean, P0 = unknown>(_isGreaterThan: P0): R;
    isGreaterThanOrEqualTo<R = boolean, P0 = unknown>(_isGreaterThanOrEqualTo: P0): R;
    isLessThan<R = boolean, P0 = unknown>(_isLessThan: P0): R;
    isLessThanOrEqualTo<R = boolean, P0 = unknown>(_isLessThanOrEqualTo: P0): R;
    isNotEqualTo<R = boolean, P0 = unknown>(_isNotEqualTo: P0): R;
    isEqualTo<R = boolean, P0 = unknown>(_isEqualTo: P0): R;
    // + NSObject(NSDOAdditions): 
    _conformsToProtocolNamed<R = boolean, P0 = string>(__conformsToProtocolNamed: P0): R;
    methodDescriptionForSelector<R = objc_method_description, P0 = string>(_methodDescriptionForSelector: P0): R;
    // + NSObject(NSDelayedPerforming): 
    performSelector_withObject_afterDelay_inModes<R = void, P0 = string, P1 = unknown, P2 = number, P3 = unknown>(_performSelector: P0, _withObject: P1, _afterDelay: P2, _inModes: P3): R;
    performSelector_object_afterDelay<R = void, P0 = string, P1 = unknown, P2 = number>(_performSelector: P0, _object: P1, _afterDelay: P2): R;
    performSelector_withObject_afterDelay<R = void, P0 = string, P1 = unknown, P2 = number>(_performSelector: P0, _withObject: P1, _afterDelay: P2): R;
    // + NSObject(NSDeprecatedKeyValueCoding): 
    createKeyValueBindingForKey_typeMask<R = unknown, P0 = unknown, P1 = number>(_createKeyValueBindingForKey: P0, _typeMask: P1): R;
    _createKeyValueBindingForKey_name_bindingType<R = unknown, P0 = unknown, P1 = string, P2 = number>(__createKeyValueBindingForKey: P0, _name: P1, _bindingType: P2): R;
    keyValueBindingForKey_typeMask<R = unknown, P0 = unknown, P1 = number>(_keyValueBindingForKey: P0, _typeMask: P1): R;
    takeStoredValue_forKey<R = void, P0 = unknown, P1 = unknown>(_takeStoredValue: P0, _forKey: P1): R;
    takeValue_forKey<R = void, P0 = unknown, P1 = unknown>(_takeValue: P0, _forKey: P1): R;
    storedValueForKey<R = unknown, P0 = unknown>(_storedValueForKey: P0): R;
    _oldValueForKey<R = unknown, P0 = unknown>(__oldValueForKey: P0): R;
    unableToSetNilForKey<R = void, P0 = unknown>(_unableToSetNilForKey: P0): R;
    handleTakeValue_forUnboundKey<R = void, P0 = unknown, P1 = unknown>(_handleTakeValue: P0, _forUnboundKey: P1): R;
    handleQueryWithUnboundKey<R = unknown, P0 = unknown>(_handleQueryWithUnboundKey: P0): R;
    takeValuesFromDictionary<R = void, P0 = unknown>(_takeValuesFromDictionary: P0): R;
    valuesForKeys<R = unknown, P0 = unknown>(_valuesForKeys: P0): R;
    takeValue_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_takeValue: P0, _forKeyPath: P1): R;
    _oldValueForKeyPath<R = unknown, P0 = unknown>(__oldValueForKeyPath: P0): R;
    // + NSObject(NSDistantObjectAdditions): 
    _localClassNameForClass<R = string>(): R;
    // + NSObject(NSIBObjectDataAXExtras): 
    _isAXConnector<R = boolean>(): R;
    // + NSObject(NSKeyValueBindingCreation): 
    _optionDescriptionsForBinding<R = unknown, P0 = unknown>(__optionDescriptionsForBinding: P0): R;
    optionDescriptionsForBinding<R = unknown, P0 = unknown>(_optionDescriptionsForBinding: P0): R;
    infoForBinding<R = unknown, P0 = unknown>(_infoForBinding: P0): R;
    unbind<R = void, P0 = unknown>(_unbind: P0): R;
    bind_toObject_withKeyPath_options<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_bind: P0, _toObject: P1, _withKeyPath: P2, _options: P3): R;
    valueClassForBinding<R = unknown, P0 = unknown>(_valueClassForBinding: P0): R;
    _binderWithClass_withBinders_createAutoreleasedInstanceIfNotFound<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(__binderWithClass: P0, _withBinders: P1, _createAutoreleasedInstanceIfNotFound: P2): R;
    _binderClassForBinding_withBinders<R = unknown, P0 = unknown, P1 = unknown>(__binderClassForBinding: P0, _withBinders: P1): R;
    _binderForBinding_withBinders_createAutoreleasedInstanceIfNotFound<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(__binderForBinding: P0, _withBinders: P1, _createAutoreleasedInstanceIfNotFound: P2): R;
    // + NSObject(NSKeyValueCoding): 
    setValuesForKeysWithDictionary<R = void, P0 = unknown>(_setValuesForKeysWithDictionary: P0): R;
    dictionaryWithValuesForKeys<R = unknown, P0 = unknown>(_dictionaryWithValuesForKeys: P0): R;
    setNilValueForKey<R = void, P0 = unknown>(_setNilValueForKey: P0): R;
    setValue_forUndefinedKey<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forUndefinedKey: P1): R;
    valueForUndefinedKey<R = unknown, P0 = unknown>(_valueForUndefinedKey: P0): R;
    mutableSetValueForKeyPath<R = unknown, P0 = unknown>(_mutableSetValueForKeyPath: P0): R;
    mutableOrderedSetValueForKeyPath<R = unknown, P0 = unknown>(_mutableOrderedSetValueForKeyPath: P0): R;
    mutableArrayValueForKeyPath<R = unknown, P0 = unknown>(_mutableArrayValueForKeyPath: P0): R;
    validateValue_forKeyPath_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_validateValue: P0, _forKeyPath: P1, _error: P2): R;
    setValue_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forKeyPath: P1): R;
    valueForKeyPath<R = unknown, P0 = unknown>(_valueForKeyPath: P0): R;
    mutableSetValueForKey<R = unknown, P0 = unknown>(_mutableSetValueForKey: P0): R;
    mutableOrderedSetValueForKey<R = unknown, P0 = unknown>(_mutableOrderedSetValueForKey: P0): R;
    mutableArrayValueForKey<R = unknown, P0 = unknown>(_mutableArrayValueForKey: P0): R;
    validateValue_forKey_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_validateValue: P0, _forKey: P1, _error: P2): R;
    setValue_forKey<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forKey: P1): R;
    valueForKey<R = unknown, P0 = unknown>(_valueForKey: P0): R;
    // + NSObject(NSKeyValueObserverNotification): 
    didChangeValueForKey_withSetMutation_usingObjects<R = void, P0 = unknown, P1 = number, P2 = unknown>(_didChangeValueForKey: P0, _withSetMutation: P1, _usingObjects: P2): R;
    willChangeValueForKey_withSetMutation_usingObjects<R = void, P0 = unknown, P1 = number, P2 = unknown>(_willChangeValueForKey: P0, _withSetMutation: P1, _usingObjects: P2): R;
    didChange_valuesAtIndexes_forKey<R = void, P0 = number, P1 = unknown, P2 = unknown>(_didChange: P0, _valuesAtIndexes: P1, _forKey: P2): R;
    willChange_valuesAtIndexes_forKey<R = void, P0 = number, P1 = unknown, P2 = unknown>(_willChange: P0, _valuesAtIndexes: P1, _forKey: P2): R;
    didChangeValueForKey<R = void, P0 = unknown>(_didChangeValueForKey: P0): R;
    willChangeValueForKey<R = void, P0 = unknown>(_willChangeValueForKey: P0): R;
    // + NSObject(NSKeyValueObserverNotifying): 
    _isKVOA<R = boolean>(): R;
    // + NSObject(NSKeyValueObserverRegistration): 
    removeObserver_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_removeObserver: P0, _forKeyPath: P1): R;
    removeObserver_forKeyPath_context<R = void, P0 = unknown, P1 = unknown, P2 = void>(_removeObserver: P0, _forKeyPath: P1, _context: P2): R;
    addObserver_forKeyPath_options_context<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = void>(_addObserver: P0, _forKeyPath: P1, _options: P2, _context: P3): R;
    _removeObserver_forProperty<R = void, P0 = unknown, P1 = unknown>(__removeObserver: P0, _forProperty: P1): R;
    _addObserver_forProperty_options_context<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = void>(__addObserver: P0, _forProperty: P1, _options: P2, _context: P3): R;
    // + NSObject(NSKeyValueObserving): 
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    // + NSObject(NSKeyValueObservingPrivate): 
    _pendingChangeNotificationsArrayForKey_create<R = unknown, P0 = unknown, P1 = boolean>(__pendingChangeNotificationsArrayForKey: P0, _create: P1): R;
    _implicitObservationInfo<R = unknown>(): R;
    _changeValueForKey_usingBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(__changeValueForKey: P0, _usingBlock: P1): R;
    _changeValueForKey_key_key_usingBlock<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(__changeValueForKey: P0, _key: P1, _key1: P2, _usingBlock: P3): R;
    _changeValueForKeys_count_maybeOldValuesDict_maybeNewValuesDict_usingBlock<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown, P4 = CDUnknownBlockType>(__changeValueForKeys: P0, _count: P1, _maybeOldValuesDict: P2, _maybeNewValuesDict: P3, _usingBlock: P4): R;
    _notifyObserversOfChangeFromValuesForKeys_toValuesForKeys<R = void, P0 = unknown, P1 = unknown>(__notifyObserversOfChangeFromValuesForKeys: P0, _toValuesForKeys: P1): R;
    _didChangeValuesForKeys<R = void, P0 = unknown>(__didChangeValuesForKeys: P0): R;
    _willChangeValuesForKeys<R = void, P0 = unknown>(__willChangeValuesForKeys: P0): R;
    _notifyObserversForKeyPath_change<R = void, P0 = unknown, P1 = unknown>(__notifyObserversForKeyPath: P0, _change: P1): R;
    _didEndKeyValueObserving<R = void>(): R;
    _willBeginKeyValueObserving<R = void>(): R;
    // + NSObject(NSKeyedArchiverObjectSubstitution): 
    replacementObjectForKeyedArchiver<R = unknown, P0 = unknown>(_replacementObjectForKeyedArchiver: P0): R;
    // + NSObject(NSNibAwaking): 
    prepareForInterfaceBuilder<R = void>(): R;
    awakeFromNib<R = void>(): R;
    // + NSObject(NSObject): 
    implementsSelector<R = boolean, P0 = string>(_implementsSelector: P0): R;
    replacementObjectForCoder<R = unknown, P0 = unknown>(_replacementObjectForCoder: P0): R;
    _allowsDirectEncoding<R = boolean>(): R;
    classForCoder<R = unknown>(): R;
    awakeAfterUsingCoder<R = unknown, P0 = unknown>(_awakeAfterUsingCoder: P0): R;
    // + NSObject(NSObjectAccessibilityAttributeAccessAdditions): 
    accessibilityAttributedValueForStringAttributeAttributeForParameter<R = unknown, P0 = unknown>(_accessibilityAttributedValueForStringAttributeAttributeForParameter: P0): R;
    accessibilityIndexForChildUIElementAttributeForParameter<R = unknown, P0 = unknown>(_accessibilityIndexForChildUIElementAttributeForParameter: P0): R;
    accessibilityAttributeValue_forParameter<R = unknown, P0 = unknown, P1 = unknown>(_accessibilityAttributeValue: P0, _forParameter: P1): R;
    accessibilityParameterizedAttributeNames<R = unknown>(): R;
    accessibilityArrayAttributeValues_index_maxCount<R = unknown, P0 = unknown, P1 = number, P2 = number>(_accessibilityArrayAttributeValues: P0, _index: P1, _maxCount: P2): R;
    accessibilityArrayAttributeCount<R = number, P0 = unknown>(_accessibilityArrayAttributeCount: P0): R;
    accessibilityIndexOfChild<R = number, P0 = unknown>(_accessibilityIndexOfChild: P0): R;
    // + NSObject(NSObjectPortCoding): 
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    classForPortCoder<R = unknown>(): R;
    // + NSObject(NSRemoteUIElementAccessibility): 
    accessibilityPresenterProcessIdentifier<R = number>(): R;
    accessibilitySetPresenterProcessIdentifier<R = void, P0 = number>(_accessibilitySetPresenterProcessIdentifier: P0): R;
    // + NSObject(NSScriptAppleEventConversion): 
    _scriptingDescriptorOfValueType_orReasonWhyNot<R = unknown, P0 = unknown, P1 = unknown>(__scriptingDescriptorOfValueType: P0, _orReasonWhyNot: P1): R;
    _scriptingDescriptorOfObjectType_orReasonWhyNot<R = unknown, P0 = unknown, P1 = unknown>(__scriptingDescriptorOfObjectType: P0, _orReasonWhyNot: P1): R;
    _scriptingDescriptorOfEnumeratorType_orReasonWhyNot<R = unknown, P0 = unknown, P1 = unknown>(__scriptingDescriptorOfEnumeratorType: P0, _orReasonWhyNot: P1): R;
    _scriptingDescriptorOfComplexType_orReasonWhyNot<R = unknown, P0 = unknown, P1 = unknown>(__scriptingDescriptorOfComplexType: P0, _orReasonWhyNot: P1): R;
    _scriptingDebugDescription<R = unknown>(): R;
    _scriptingAlternativeValueRankWithDescriptor<R = number, P0 = unknown>(__scriptingAlternativeValueRankWithDescriptor: P0): R;
    // + NSObject(NSScriptKeyValueCoding): 
    coerceValue_forKey<R = unknown, P0 = unknown, P1 = unknown>(_coerceValue: P0, _forKey: P1): R;
    insertValue_inPropertyWithKey<R = void, P0 = unknown, P1 = unknown>(_insertValue: P0, _inPropertyWithKey: P1): R;
    removeValueAtIndex_fromPropertyWithKey<R = void, P0 = number, P1 = unknown>(_removeValueAtIndex: P0, _fromPropertyWithKey: P1): R;
    insertValue_atIndex_inPropertyWithKey<R = void, P0 = unknown, P1 = number, P2 = unknown>(_insertValue: P0, _atIndex: P1, _inPropertyWithKey: P2): R;
    replaceValueAtIndex_inPropertyWithKey_withValue<R = void, P0 = number, P1 = unknown, P2 = unknown>(_replaceValueAtIndex: P0, _inPropertyWithKey: P1, _withValue: P2): R;
    valueWithUniqueID_inPropertyWithKey<R = unknown, P0 = unknown, P1 = unknown>(_valueWithUniqueID: P0, _inPropertyWithKey: P1): R;
    valueWithName_inPropertyWithKey<R = unknown, P0 = unknown, P1 = unknown>(_valueWithName: P0, _inPropertyWithKey: P1): R;
    valueAtIndex_inPropertyWithKey<R = unknown, P0 = number, P1 = unknown>(_valueAtIndex: P0, _inPropertyWithKey: P1): R;
    // + NSObject(NSScriptKeyValueCodingInternal): 
    _compatibility_takeValue_forKey<R = void, P0 = unknown, P1 = unknown>(__compatibility_takeValue: P0, _forKey: P1): R;
    // + NSObject(NSScriptKeyValueCodingPrivate): 
    _supportsGetValueWithUniqueIDForKey_perhapsByOverridingClass<R = number, P0 = unknown, P1 = unknown>(__supportsGetValueWithUniqueIDForKey: P0, _perhapsByOverridingClass: P1): R;
    _supportsGetValueWithNameForKey_perhapsByOverridingClass<R = number, P0 = unknown, P1 = unknown>(__supportsGetValueWithNameForKey: P0, _perhapsByOverridingClass: P1): R;
    // + NSObject(NSScriptLegacyPropertyListParsing): 
    _asScriptTerminologyNameString<R = unknown>(): R;
    _asScriptTerminologyNameArray<R = unknown>(): R;
    // + NSObject(NSScriptObjectSpecifierBackstop): 
    objectSpecifier<R = unknown>(): R;
    // + NSObject(NSScripting): 
    newScriptingObjectOfClass_forValueForKey_withContentsValue_properties<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_newScriptingObjectOfClass: P0, _forValueForKey: P1, _withContentsValue: P2, _properties: P3): R;
    copyScriptingValue_forKey_withProperties<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_copyScriptingValue: P0, _forKey: P1, _withProperties: P2): R;
    _scriptingCopyWithProperties_forValueForKey_ofContainer<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__scriptingCopyWithProperties: P0, _forValueForKey: P1, _ofContainer: P2): R;
    coerceValueForScriptingProperties<R = unknown, P0 = unknown>(_coerceValueForScriptingProperties: P0): R;
    scriptingValueForSpecifier<R = unknown, P0 = unknown>(_scriptingValueForSpecifier: P0): R;
    // + NSObject(NSScriptingInternal): 
    _scriptingRemoveAllObjectsFromValueForKey<R = void, P0 = unknown>(__scriptingRemoveAllObjectsFromValueForKey: P0): R;
    _scriptingRemoveObjectsAtIndexes_fromValueForKey<R = void, P0 = unknown, P1 = unknown>(__scriptingRemoveObjectsAtIndexes: P0, _fromValueForKey: P1): R;
    _scriptingInsertObject_inValueForKey<R = unknown, P0 = unknown, P1 = unknown>(__scriptingInsertObject: P0, _inValueForKey: P1): R;
    _scriptingReplaceObjectAtIndex_withObjects_inValueForKey<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(__scriptingReplaceObjectAtIndex: P0, _withObjects: P1, _inValueForKey: P2): R;
    _scriptingInsertObjects_atIndexes_inValueForKey<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__scriptingInsertObjects: P0, _atIndexes: P1, _inValueForKey: P2): R;
    _scriptingAddObjectsFromSet_toValueForKey<R = unknown, P0 = unknown, P1 = unknown>(__scriptingAddObjectsFromSet: P0, _toValueForKey: P1): R;
    _scriptingAddObjectsFromArray_toValueForKey<R = unknown, P0 = unknown, P1 = unknown>(__scriptingAddObjectsFromArray: P0, _toValueForKey: P1): R;
    _scriptingCanInsertBeforeOrReplaceObjectsAtIndexes_inValueForKey<R = boolean, P0 = unknown, P1 = unknown>(__scriptingCanInsertBeforeOrReplaceObjectsAtIndexes: P0, _inValueForKey: P1): R;
    _scriptingCanAddObjectsToValueForKey<R = boolean, P0 = unknown>(__scriptingCanAddObjectsToValueForKey: P0): R;
    _scriptingSetValue_forKey<R = unknown, P0 = unknown, P1 = unknown>(__scriptingSetValue: P0, _forKey: P1): R;
    _scriptingCanSetValue_forSpecifier<R = boolean, P0 = unknown, P1 = unknown>(__scriptingCanSetValue: P0, _forSpecifier: P1): R;
    _scriptingCoerceValue_forKey<R = unknown, P0 = unknown, P1 = unknown>(__scriptingCoerceValue: P0, _forKey: P1): R;
    _scriptingSetOfObjectsForSpecifier<R = unknown, P0 = unknown>(__scriptingSetOfObjectsForSpecifier: P0): R;
    _scriptingArrayOfObjectsForSpecifier<R = unknown, P0 = unknown>(__scriptingArrayOfObjectsForSpecifier: P0): R;
    _scriptingObjectForSpecifier<R = unknown, P0 = unknown>(__scriptingObjectForSpecifier: P0): R;
    _scriptingIndexOfObjectWithUniqueID_inValueForKey<R = number, P0 = unknown, P1 = unknown>(__scriptingIndexOfObjectWithUniqueID: P0, _inValueForKey: P1): R;
    _scriptingIndexOfObjectWithName_inValueForKey<R = number, P0 = unknown, P1 = unknown>(__scriptingIndexOfObjectWithName: P0, _inValueForKey: P1): R;
    _scriptingObjectWithUniqueID_inValueForKey<R = unknown, P0 = unknown, P1 = unknown>(__scriptingObjectWithUniqueID: P0, _inValueForKey: P1): R;
    _scriptingObjectWithName_inValueForKey<R = unknown, P0 = unknown, P1 = unknown>(__scriptingObjectWithName: P0, _inValueForKey: P1): R;
    _scriptingObjectsAtIndexes_inValueForKey<R = unknown, P0 = unknown, P1 = unknown>(__scriptingObjectsAtIndexes: P0, _inValueForKey: P1): R;
    _scriptingObjectAtIndex_inValueForKey<R = unknown, P0 = number, P1 = unknown>(__scriptingObjectAtIndex: P0, _inValueForKey: P1): R;
    _scriptingShouldCheckObjectIndexes<R = boolean>(): R;
    _scriptingObjectCountInValueForKey<R = number, P0 = unknown>(__scriptingObjectCountInValueForKey: P0): R;
    _scriptingValueForKey<R = unknown, P0 = unknown>(__scriptingValueForKey: P0): R;
    _scriptingIndicesOfObjectsForSpecifier_count<R = number, P0 = unknown, P1 = number>(__scriptingIndicesOfObjectsForSpecifier: P0, _count: P1): R;
    _scriptingIndexesOfObjectsForSpecifier<R = unknown, P0 = unknown>(__scriptingIndexesOfObjectsForSpecifier: P0): R;
    _scriptingIndexOfObjectForSpecifier<R = number, P0 = unknown>(__scriptingIndexOfObjectForSpecifier: P0): R;
    _scriptingValueForSpecifier<R = unknown, P0 = unknown>(__scriptingValueForSpecifier: P0): R;
    _scriptingIndicesOfObjectsAfterValidatingSpecifier<R = unknown, P0 = unknown>(__scriptingIndicesOfObjectsAfterValidatingSpecifier: P0): R;
    // + NSObject(NSScriptingInternalCommandHandling): 
    _scriptingAddToReceiversArray<R = void, P0 = unknown>(__scriptingAddToReceiversArray: P0): R;
    _scriptingCanHandleCommand<R = boolean, P0 = unknown>(__scriptingCanHandleCommand: P0): R;
    _scriptingMightHandleCommand<R = boolean, P0 = unknown>(__scriptingMightHandleCommand: P0): R;
    // + NSObject(NSScriptingInternalCounting): 
    _scriptingCountNonrecursively<R = number>(): R;
    _scriptingCountOfValueForKey<R = number, P0 = unknown>(__scriptingCountOfValueForKey: P0): R;
    _scriptingCount<R = number>(): R;
    // + NSObject(NSScriptingInternalDeleting): 
    _scriptingRemoveValueForSpecifier<R = void, P0 = unknown>(__scriptingRemoveValueForSpecifier: P0): R;
    // + NSObject(NSScriptingInternalExisting): 
    _scriptingExists<R = boolean>(): R;
    // + NSObject(NSScriptingInternalSetting): 
    _scriptingSetValue_forSpecifier<R = unknown, P0 = unknown, P1 = unknown>(__scriptingSetValue: P0, _forSpecifier: P1): R;
    // + NSObject(NSThreadPerformAdditions): 
    performSelectorInBackground_withObject<R = void, P0 = string, P1 = unknown>(_performSelectorInBackground: P0, _withObject: P1): R;
    performSelector_onThread_withObject_waitUntilDone<R = void, P0 = string, P1 = unknown, P2 = unknown, P3 = boolean>(_performSelector: P0, _onThread: P1, _withObject: P2, _waitUntilDone: P3): R;
    performSelectorOnMainThread_withObject_waitUntilDone<R = void, P0 = string, P1 = unknown, P2 = boolean>(_performSelectorOnMainThread: P0, _withObject: P1, _waitUntilDone: P2): R;
    performSelectorOnMainThread_withObject_waitUntilDone_modes<R = void, P0 = string, P1 = unknown, P2 = boolean, P3 = unknown>(_performSelectorOnMainThread: P0, _withObject: P1, _waitUntilDone: P2, _modes: P3): R;
    performSelector_onThread_withObject_waitUntilDone_modes<R = void, P0 = string, P1 = unknown, P2 = unknown, P3 = boolean, P4 = unknown>(_performSelector: P0, _onThread: P1, _withObject: P2, _waitUntilDone: P3, _modes: P4): R;
    // + NSObject(NSUnpublishedEOF): 
    validateTakeValue_forKeyPath<R = unknown, P0 = unknown, P1 = unknown>(_validateTakeValue: P0, _forKeyPath: P1): R;
    validateValue_forKey<R = unknown, P0 = unknown, P1 = unknown>(_validateValue: P0, _forKey: P1): R;
    takeStoredValuesFromDictionary<R = void, P0 = unknown>(_takeStoredValuesFromDictionary: P0): R;
    removeObject_fromPropertyWithKey<R = void, P0 = unknown, P1 = unknown>(_removeObject: P0, _fromPropertyWithKey: P1): R;
    removeObject_fromBothSidesOfRelationshipWithKey<R = void, P0 = unknown, P1 = unknown>(_removeObject: P0, _fromBothSidesOfRelationshipWithKey: P1): R;
    ownsDestinationObjectsForRelationshipKey<R = boolean, P0 = unknown>(_ownsDestinationObjectsForRelationshipKey: P0): R;
    isToManyKey<R = boolean, P0 = unknown>(_isToManyKey: P0): R;
    flushKeyBindings<R = void>(): R;
    entityName<R = unknown>(): R;
    clearProperties<R = void>(): R;
    classDescriptionForDestinationKey<R = unknown, P0 = unknown>(_classDescriptionForDestinationKey: P0): R;
    allPropertyKeys<R = unknown>(): R;
    addObject_toPropertyWithKey<R = void, P0 = unknown, P1 = unknown>(_addObject: P0, _toPropertyWithKey: P1): R;
    addObject_toBothSidesOfRelationshipWithKey<R = void, P0 = unknown, P1 = unknown>(_addObject: P0, _toBothSidesOfRelationshipWithKey: P1): R;
    _setObject_forBothSidesOfRelationshipWithKey<R = void, P0 = unknown, P1 = unknown>(__setObject: P0, _forBothSidesOfRelationshipWithKey: P1): R;
    // + NSObject(NSUserInterfaceItemIdentification): 
    setUserInterfaceItemIdentifier<R = void, P0 = unknown>(_setUserInterfaceItemIdentifier: P0): R;
    userInterfaceItemIdentifier<R = unknown>(): R;
    // + NSObject(_NSBinderKeyValueCodingAdditions): 
    _invokeSelector_withArguments_onKeyPath<R = void, P0 = string, P1 = unknown, P2 = unknown>(__invokeSelector: P0, _withArguments: P1, _onKeyPath: P2): R;
    // + NSObject(_NSBindingAdaptorAccess): 
    _releaseBindingAdaptor<R = void>(): R;
    _bindingAdaptor<R = unknown>(): R;
    _setBindingAdaptor<R = void, P0 = unknown>(__setBindingAdaptor: P0): R;
    // + NSObject(_NSBindingCreationSupport): 
    _unbind_existingNibConnectors_connectorsToRemove_connectorsToAdd<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(__unbind: P0, _existingNibConnectors: P1, _connectorsToRemove: P2, _connectorsToAdd: P3): R;
    _bind_toController_withKeyPath_valueTransformerName_options_existingNibConnectors_connectorsToRemove_connectorsToAdd<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown, P6 = unknown, P7 = unknown>(__bind: P0, _toController: P1, _withKeyPath: P2, _valueTransformerName: P3, _options: P4, _existingNibConnectors: P5, _connectorsToRemove: P6, _connectorsToAdd: P7): R;
    _bindingInformationWithExistingNibConnectors_availableControllerChoices<R = unknown, P0 = unknown, P1 = unknown>(__bindingInformationWithExistingNibConnectors: P0, _availableControllerChoices: P1): R;
    _placeSuggestionsInDictionary_acceptableControllers_boundBinders_binder_binding<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(__placeSuggestionsInDictionary: P0, _acceptableControllers: P1, _boundBinders: P2, _binder: P3, _binding: P4): R;
    _suggestedControllerKeyForController_binding<R = unknown, P0 = unknown, P1 = unknown>(__suggestedControllerKeyForController: P0, _binding: P1): R;
    _addPlaceholderOptionValue_isDefault_toArray_withKey_binder_binding<R = void, P0 = unknown, P1 = boolean, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown>(__addPlaceholderOptionValue: P0, _isDefault: P1, _toArray: P2, _withKey: P3, _binder: P4, _binding: P5): R;
    _addOptionValue_toArray_withKey_type<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(__addOptionValue: P0, _toArray: P1, _withKey: P2, _type: P3): R;
    _cleanupBindingsWithExistingNibConnectors_exception<R = void, P0 = unknown, P1 = unknown>(__cleanupBindingsWithExistingNibConnectors: P0, _exception: P1): R;
    // + NSObject(_NSTiledLayer): 
    NS_removeTiledLayerDescendent<R = void, P0 = unknown>(_NS_removeTiledLayerDescendent: P0): R;
    NS_addTiledLayerDescendent<R = void, P0 = unknown>(_NS_addTiledLayerDescendent: P0): R;
    NS_tiledLayerVisibleRect<R = unknown>(): R;
    // + NSObject(MochaScripting): 
    finalizeForMochaScript<R = void>(): R;
    // + NSObject(MochaObjectSubscripting): 
    objectForIndexedSubscript<R = unknown, P0 = NSUInteger>(_objectForIndexedSubscript: P0): R;
    setObject_forIndexedSubscript<R = void, P0 = unknown, P1 = NSUInteger>(_setObject: P0, _forIndexedSubscript: P1): R;
    objectForKeyedSubscript<R = unknown, P0 = NSString>(_objectForKeyedSubscript: P0): R;
    setObject_forKeyedSubscript<R = void, P0 = unknown, P1 = NSString>(_setObject: P0, _forKeyedSubscript: P1): R;
    // + NSObject(COSTargetAdditions): 
    setCOSJSTargetFunction<R = void, P0 = MOJavaScriptObject>(_setCOSJSTargetFunction: P0): R;
    // + NSObject(COScriptErrorControllerMethods): 
    coscript_hadError_onLineNumber_atSourceURL<R = void, P0 = unknown, P1 = NSString, P2 = NSInteger, P3 = unknown>(_coscript: P0, _hadError: P1, _onLineNumber: P2, _atSourceURL: P3): R;
    // + NSObject(BCJSONDecoding): 
    initWithJSONDecoder<R = unknown, P0 = unknown>(_initWithJSONDecoder: P0): R;
    // + NSObject(Chocolat): 
    coderSafeVersion_bc<R = unknown>(): R;
    // + NSObject(ImmutableObjectSupport): 
    newMutableCounterpart<R = unknown>(): R;
    immutableModelObject<R = unknown>(): R;
    // + NSObject(MSCoding): 
    encodeWithArchiver<R = void, P0 = unknown>(_encodeWithArchiver: P0): R;
    initWithUnarchiver_migratingFrom_toVersion<R = unknown, P0 = unknown, P1 = number, P2 = number>(_initWithUnarchiver: P0, _migratingFrom: P1, _toVersion: P2): R;
    initWithUnarchiver<R = unknown, P0 = unknown>(_initWithUnarchiver: P0): R;
    // + NSObject(MSKeyedArchiverHelper): 
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    // + NSObject(MSKeyedUnarchiver): 
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    // + NSObject(MSShareableObjectReferenceExtention): 
    shareableObjectReferenceClass_bc<R = unknown>(): R;
    // + NSObject(ModelCopying): 
    copyWithOptions<R = unknown, P0 = number>(_copyWithOptions: P0): R;
    // + NSObject(ModelDefaultValueSupport): 
    hasDefaultValues<R = boolean>(): R;
    // + NSObject(ModelParentSupport): 
    breakConnectionWith<R = void, P0 = unknown>(_breakConnectionWith: P0): R;
    setParentObject<R = void, P0 = unknown>(_setParentObject: P0): R;
    parentObject<R = unknown>(): R;
    // + NSObject(ModelSupport): 
    propertiesAreEqual<R = boolean, P0 = unknown>(_propertiesAreEqual: P0): R;
    // + NSObject(NSObjectAddObservers): 
    removeObserver_forKeyPaths<R = void, P0 = unknown, P1 = unknown>(_removeObserver: P0, _forKeyPaths: P1): R;
    addObserver_forKeyPaths_options_context<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = void>(_addObserver: P0, _forKeyPaths: P1, _options: P2, _context: P3): R;
    // + NSObject(SVG): 
    safeCastToClass<R = unknown, P0 = unknown>(_safeCastToClass: P0): R;
    // + NSObject(SharedObjectIDMigration): 
    updateSharedStyleIDFromMigration<R = void, P0 = unknown>(_updateSharedStyleIDFromMigration: P0): R;
    // + NSObject(TreeAsDictionarySupport): 
    treeAsDictionary<R = unknown>(): R;
    // + NSObject(TreeTraversal): 
    mapTreeWithLeafTransformBlock<R = unknown, P0 = CDUnknownBlockType>(_mapTreeWithLeafTransformBlock: P0): R;
    // + NSObject(NSClassDescriptionPrimitives):
    toManyRelationshipKeys<R = NSArray>(): R;
    toOneRelationshipKeys<R = NSArray>(): R;
    attributeKeys<R = NSArray>(): R;
    classDescription<R = NSClassDescription>(): R;
    // + NSObject(NSDiscardableContentProxy):
    autoContentAccessingProxy<R = unknown>(): R;
    // + NSObject(NSKeyValueBindingCreation):
    exposedBindings<R = NSArray>(): R;
    // + NSObject(NSKeyValueObservingCustomization):
    observationInfo<R = void>(): R;
    setObservationInfo<R = void, P0 = void>(_v: P0): R;
    // + NSObject(NSKeyedArchiverObjectSubstitution):
    classForKeyedArchiver<R = unknown>(): R;
    // + NSObject(NSScriptClassDescription):
    className<R = NSString>(): R;
    classCode<R = number>(): R;
    // + NSObject(NSScripting):
    scriptingProperties<R = NSDictionary>(): R;
    setScriptingProperties<R = void, P0 = NSDictionary>(_v: P0): R;
    // + NSObject(MSBaseArchiver):
    archiveReferenceIdentifier_bc<R = NSString>(): R;
  }
  namespace NSObject {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
      // + NSObject(NSDOAdditions): 
      instanceMethodDescriptionForSelector<R = objc_method_description, P0 = string>(_instanceMethodDescriptionForSelector: P0): R;
      // + NSObject(NSDelayedPerforming): 
      cancelPreviousPerformRequestsWithTarget<R = void, P0 = unknown>(_cancelPreviousPerformRequestsWithTarget: P0): R;
      cancelPreviousPerformRequestsWithTarget_selector_object<R = void, P0 = unknown, P1 = string, P2 = unknown>(_cancelPreviousPerformRequestsWithTarget: P0, _selector: P1, _object: P2): R;
      // + NSObject(NSDeprecatedKeyValueCoding): 
      useStoredAccessor<R = boolean>(): R;
      // + NSObject(NSDeprecatedKeyValueObservingCustomization): 
      setKeys_triggerChangeNotificationsForDependentKey<R = void, P0 = unknown, P1 = unknown>(_setKeys: P0, _triggerChangeNotificationsForDependentKey: P1): R;
      // + NSObject(NSKeyValueBindingCreation): 
      _exposedBindings<R = unknown>(): R;
      exposeBinding<R = void, P0 = unknown>(_exposeBinding: P0): R;
      _exposeBinding_valueClass<R = void, P0 = unknown, P1 = unknown>(__exposeBinding: P0, _valueClass: P1): R;
      _concealBinding<R = void, P0 = unknown>(__concealBinding: P0): R;
      _guaranteeStorageInDictionary_addBinding<R = unknown, P0 = unknown, P1 = unknown>(__guaranteeStorageInDictionary: P0, _addBinding: P1): R;
      // + NSObject(NSKeyValueCoding): 
      _createMutableArrayValueGetterWithContainerClassID_key<R = unknown, P0 = unknown, P1 = unknown>(__createMutableArrayValueGetterWithContainerClassID: P0, _key: P1): R;
      accessInstanceVariablesDirectly<R = boolean>(): R;
      // + NSObject(NSKeyValueCodingPrivate): 
      _createValuePrimitiveSetterWithContainerClassID_key<R = unknown, P0 = unknown, P1 = unknown>(__createValuePrimitiveSetterWithContainerClassID: P0, _key: P1): R;
      _createValuePrimitiveGetterWithContainerClassID_key<R = unknown, P0 = unknown, P1 = unknown>(__createValuePrimitiveGetterWithContainerClassID: P0, _key: P1): R;
      _createOtherValueSetterWithContainerClassID_key<R = unknown, P0 = unknown, P1 = unknown>(__createOtherValueSetterWithContainerClassID: P0, _key: P1): R;
      _createOtherValueGetterWithContainerClassID_key<R = unknown, P0 = unknown, P1 = unknown>(__createOtherValueGetterWithContainerClassID: P0, _key: P1): R;
      _createMutableSetValueGetterWithContainerClassID_key<R = unknown, P0 = unknown, P1 = unknown>(__createMutableSetValueGetterWithContainerClassID: P0, _key: P1): R;
      _createMutableOrderedSetValueGetterWithContainerClassID_key<R = unknown, P0 = unknown, P1 = unknown>(__createMutableOrderedSetValueGetterWithContainerClassID: P0, _key: P1): R;
      _createValueSetterWithContainerClassID_key<R = unknown, P0 = unknown, P1 = unknown>(__createValueSetterWithContainerClassID: P0, _key: P1): R;
      _createValueGetterWithContainerClassID_key<R = unknown, P0 = unknown, P1 = unknown>(__createValueGetterWithContainerClassID: P0, _key: P1): R;
      // + NSObject(NSKeyValueObservingCustomization): 
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
      keyPathsForValuesAffectingValueForKey<R = unknown, P0 = unknown>(_keyPathsForValuesAffectingValueForKey: P0): R;
      _keysForValuesAffectingValueForKey<R = unknown, P0 = unknown>(__keysForValuesAffectingValueForKey: P0): R;
      // + NSObject(NSKeyValueObservingPrivate): 
      _shouldAddObservationForwardersForKey<R = boolean, P0 = unknown>(__shouldAddObservationForwardersForKey: P0): R;
      // + NSObject(NSKeyedArchiverObjectSubstitution): 
      classFallbacksForKeyedArchiver<R = unknown>(): R;
      // + NSObject(NSKeyedUnarchiverObjectSubstitution): 
      classForKeyedUnarchiver<R = unknown>(): R;
      // + NSObject(NSObject): 
      version<R = number>(): R;
      setVersion<R = void, P0 = number>(_setVersion: P0): R;
      poseAsClass<R = void, P0 = unknown>(_poseAsClass: P0): R;
      instancesImplementSelector<R = boolean, P0 = string>(_instancesImplementSelector: P0): R;
      load<R = void>(): R;
      // + NSObject(NSPlaceholders): 
      defaultPlaceholderForMarker_withBinding<R = unknown, P0 = unknown, P1 = unknown>(_defaultPlaceholderForMarker: P0, _withBinding: P1): R;
      setDefaultPlaceholder_forMarker_withBinding<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_setDefaultPlaceholder: P0, _forMarker: P1, _withBinding: P2): R;
      _stateMarkerForValue<R = unknown, P0 = unknown>(__stateMarkerForValue: P0): R;
      _registerDefaultPlaceholders<R = void>(): R;
      _registerObjectClass_placeholder_binding<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__registerObjectClass: P0, _placeholder: P1, _binding: P2): R;
      // + NSObject(NSScriptAppleEventConversion): 
      _scriptingValueOfValueType_withDescriptor<R = unknown, P0 = unknown, P1 = unknown>(__scriptingValueOfValueType: P0, _withDescriptor: P1): R;
      _scriptingValueOfObjectType_withDescriptor<R = unknown, P0 = unknown, P1 = unknown>(__scriptingValueOfObjectType: P0, _withDescriptor: P1): R;
      _scriptingValueOfComplexType_withDescriptor<R = unknown, P0 = unknown, P1 = unknown>(__scriptingValueOfComplexType: P0, _withDescriptor: P1): R;
      _scriptingValueOfOneOfAlternativeTypes_withDescriptor<R = unknown, P0 = unknown, P1 = unknown>(__scriptingValueOfOneOfAlternativeTypes: P0, _withDescriptor: P1): R;
      _scriptingEnumeratorOfType_withDescriptor<R = unknown, P0 = unknown, P1 = unknown>(__scriptingEnumeratorOfType: P0, _withDescriptor: P1): R;
      // + NSObject(NSScriptKeyValueCodingInternal): 
      _selectorToGetValueWithUniqueIDForKey<R = string, P0 = unknown>(__selectorToGetValueWithUniqueIDForKey: P0): R;
      _selectorToGetValueWithNameForKey<R = string, P0 = unknown>(__selectorToGetValueWithNameForKey: P0): R;
      // + NSObject(NSSetVersionHacks): 
      _kitNewObjectSetVersion<R = void, P0 = number>(__kitNewObjectSetVersion: P0): R;
      // + NSObject(NSUnpublishedEOF): 
      flushClassKeyBindings<R = void>(): R;
      flushAllKeyBindings<R = void>(): R;
      // + NSObject(_NSBindingCreationDelegateRegistration): 
      _bindingCreationDelegate<R = unknown>(): R;
      _setBindingCreationDelegate<R = void, P0 = unknown>(__setBindingCreationDelegate: P0): R;
      // + NSObject(MochaScripting): 
      isSelectorExcludedFromMochaScript<R = boolean, P0 = string>(_isSelectorExcludedFromMochaScript: P0): R;
      selectorForMochaPropertyName<R = string, P0 = NSString>(_selectorForMochaPropertyName: P0): R;
      // + NSObject(MochaAdditions): 
      mo_swizzleAdditions<R = void>(): R;
      mo_mocha<R = MOClassDescription>(): R;
      // + NSObject(ImmutableObjectSupport): 
      immutableClass<R = unknown>(): R;
      mutableClass<R = unknown>(): R;
    }
  }
}

declare const NSObject: cocoa.NSObject.CLASS;
