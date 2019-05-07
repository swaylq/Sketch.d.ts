/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersonNameComponentsFormatter<T0 = void, T1 = void, T2 = void> extends NSFormatter, NSObservableProtocol, NSObserverProtocol, NSSecureCodingProtocol, NSCopyingProtocol {
    isEqualToFormatter<R = boolean, P0 = unknown>(_isEqualToFormatter: P0): R;
    personNameComponentsFromString<R = unknown, P0 = unknown>(_personNameComponentsFromString: P0): R;
    _nameOrderWithOverridesForComponents<R = number, P0 = unknown>(__nameOrderWithOverridesForComponents: P0): R;
    __localizedShortNameFormat<R = number>(): R;
    __localizedNameOrderUsingNativeOrdering<R = number, P0 = boolean>(___localizedNameOrderUsingNativeOrdering: P0): R;
    __localizedRestrictionExistsForComponents_ignoreUndeterminedComponents<R = boolean, P0 = unknown, P1 = boolean>(___localizedRestrictionExistsForComponents: P0, _ignoreUndeterminedComponents: P1): R;
    __localizedRestrictionExistsForShortStyle<R = boolean, P0 = number>(___localizedRestrictionExistsForShortStyle: P0): R;
    __localizedRestrictionExistsForStyle<R = boolean, P0 = number>(___localizedRestrictionExistsForStyle: P0): R;
    __computedShortNameFormat<R = number>(): R;
    __computedNameOrderForComponents<R = number, P0 = unknown>(___computedNameOrderForComponents: P0): R;
    annotatedStringFromPersonNameComponents<R = unknown, P0 = unknown>(_annotatedStringFromPersonNameComponents: P0): R;
    stringFromPersonNameComponents<R = unknown, P0 = unknown>(_stringFromPersonNameComponents: P0): R;
    dealloc<R = void>(): R;
    style<R = number>(): R;
    setStyle<R = void, P0 = number>(_v: P0): R;
    phonetic<R = boolean>(): R;
    setPhonetic<R = void, P0 = boolean>(_v: P0): R;
    _locale<R = NSLocale>(): R;
    set_locale<R = void, P0 = NSLocale>(_v: P0): R;
    _ignoresFallbacks<R = boolean>(): R;
    set_ignoresFallbacks<R = void, P0 = boolean>(_v: P0): R;
    _forceGivenNameFirst<R = boolean>(): R;
    set_forceGivenNameFirst<R = void, P0 = boolean>(_v: P0): R;
    _forceFamilyNameFirst<R = boolean>(): R;
    set_forceFamilyNameFirst<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSPersonNameComponentsFormatter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFormatter, NSObservableProtocol, NSObserverProtocol, NSSecureCodingProtocol, NSCopyingProtocol {
      alloc<R = NSPersonNameComponentsFormatter>(): R;
      new: <R = NSPersonNameComponentsFormatter>() => R;
      __stringValueForShortStyle<R = unknown, P0 = number>(___stringValueForShortStyle: P0): R;
      __stringValueForStyle<R = unknown, P0 = number>(___stringValueForStyle: P0): R;
      __initialsCreatorForScript<R = string, P0 = number>(___initialsCreatorForScript: P0): R;
      __shortStyle_isRestrictedForLocale<R = boolean, P0 = number, P1 = unknown>(___shortStyle: P0, _isRestrictedForLocale: P1): R;
      __shortStyle_isRestrictedForScript<R = boolean, P0 = number, P1 = number>(___shortStyle: P0, _isRestrictedForScript: P1): R;
      __style_isRestrictedForScript<R = boolean, P0 = number, P1 = number>(___style: P0, _isRestrictedForScript: P1): R;
      __style_isRestrictedForLocale<R = boolean, P0 = number, P1 = unknown>(___style: P0, _isRestrictedForLocale: P1): R;
      __shortNameFormatForLocale<R = number, P0 = unknown>(___shortNameFormatForLocale: P0): R;
      __abbreviatedNameFormatForPersonNameComponents<R = number, P0 = unknown>(___abbreviatedNameFormatForPersonNameComponents: P0): R;
      __abbreviatedNameFormatForString<R = number, P0 = unknown>(___abbreviatedNameFormatForString: P0): R;
      __nameOrderForLocale_usingNativeOrdering<R = number, P0 = unknown, P1 = boolean>(___nameOrderForLocale: P0, _usingNativeOrdering: P1): R;
      __supportedScriptDefaultsFromScriptName<R = unknown, P0 = unknown>(___supportedScriptDefaultsFromScriptName: P0): R;
      __supportedNameDefaultsFromLocale<R = unknown, P0 = unknown>(___supportedNameDefaultsFromLocale: P0): R;
      __registerDefaults<R = void>(): R;
      arabicInitialsCreator<R = CDUnknownBlockType>(): R;
      tibetanInitialsCreator<R = CDUnknownBlockType>(): R;
      thaiInitialsCreator<R = CDUnknownBlockType>(): R;
      westernInitialsCreator<R = CDUnknownBlockType>(): R;
      __initialsForString<R = unknown, P0 = unknown>(___initialsForString: P0): R;
      _shortNameIsEnabled<R = boolean>(): R;
      _shouldPreferNicknames<R = boolean>(): R;
      _defaultShortNameFormat<R = number>(): R;
      _defaultDisplayNameOrder<R = number>(): R;
      _localizedShortNameForComponents_withStyle_options<R = unknown, P0 = unknown, P1 = number, P2 = number>(__localizedShortNameForComponents: P0, _withStyle: P1, _options: P2): R;
      _fallbackDescriptorForStyle_options<R = unknown, P0 = number, P1 = number>(__fallbackDescriptorForStyle: P0, _options: P1): R;
      _relevantKeyPathsForStyle_options<R = unknown, P0 = number, P1 = number>(__relevantKeyPathsForStyle: P0, _options: P1): R;
      _localizedDelimiterForComponents_options<R = unknown, P0 = unknown, P1 = number>(__localizedDelimiterForComponents: P0, _options: P1): R;
      _nameOrderWithOverridesForComponents_options<R = number, P0 = unknown, P1 = number>(__nameOrderWithOverridesForComponents: P0, _options: P1): R;
      __shortStyleRestrictionExistsForComponents_shortStyle<R = boolean, P0 = unknown, P1 = number>(___shortStyleRestrictionExistsForComponents: P0, _shortStyle: P1): R;
      _currentLocaleIsCJK<R = boolean>(): R;
      _cjkLocaleIdentifiers<R = unknown>(): R;
      _cjkLanguagesSet<R = unknown>(): R;
      _isMixedScript<R = boolean, P0 = unknown>(__isMixedScript: P0): R;
      _isCJKScript<R = boolean, P0 = unknown>(__isCJKScript: P0): R;
      __naiveDelimiterForCombinedNameString<R = unknown, P0 = unknown>(___naiveDelimiterForCombinedNameString: P0): R;
      __scriptIdentifierFromIndex<R = unknown, P0 = number>(___scriptIdentifierFromIndex: P0): R;
      __inferredScriptIndexForComponents<R = number, P0 = unknown>(___inferredScriptIndexForComponents: P0): R;
      __inferredScriptIndexForComponents_ignoreUndeterminedComponents<R = number, P0 = unknown, P1 = boolean>(___inferredScriptIndexForComponents: P0, _ignoreUndeterminedComponents: P1): R;
      __inferredScriptIndexFromString<R = number, P0 = unknown>(___inferredScriptIndexFromString: P0): R;
      __stringByStrippingNonInitialPunctuationFromString<R = unknown, P0 = unknown>(___stringByStrippingNonInitialPunctuationFromString: P0): R;
      __longestComponentFromComponents<R = unknown, P0 = unknown>(___longestComponentFromComponents: P0): R;
      __contents_exclusivelyInCharacterSet<R = boolean, P0 = unknown, P1 = USet>(___contents: P0, _exclusivelyInCharacterSet: P1): R;
      __getCharacterSetWithPattern<R = USet, P0 = unknown>(___getCharacterSetWithPattern: P0): R;
      __characterSetWithPattern<R = unknown, P0 = unknown>(___characterSetWithPattern: P0): R;
      __thaiConsonantSet<R = unknown>(): R;
      isKatakana<R = boolean, P0 = unknown>(_isKatakana: P0): R;
      forEachExistingComponentWithComponents_performBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_forEachExistingComponentWithComponents: P0, _performBlock: P1): R;
      _styleFormatterForStyle_masterFormatter<R = unknown, P0 = number, P1 = unknown>(__styleFormatterForStyle: P0, _masterFormatter: P1): R;
      __givenNameFirstOrdering<R = unknown>(): R;
      __familyNameFirstOrdering<R = unknown>(): R;
      localizedStringFromPersonNameComponents_style_options<R = unknown, P0 = unknown, P1 = number, P2 = number>(_localizedStringFromPersonNameComponents: P0, _style: P1, _options: P2): R;
      _formatterWithStyle_options<R = unknown, P0 = number, P1 = number>(__formatterWithStyle: P0, _options: P1): R;
      __shouldReturnEmptyString<R = boolean>(): R;
      __localizedNameDefaults<R = unknown>(): R;
      __shouldFallbackToGivenNameInitialForAbbreviatedNameFormatFamilyNameOnly<R = boolean>(): R;
      __shouldCacheFallbackToGivenNameInitialForAbbreviatedNameFormatFamilyNameOnly<R = boolean>(): R;
      __preferredLanguages<R = unknown>(): R;
      __currentLocale<R = unknown>(): R;
    }
  }
}

declare const NSPersonNameComponentsFormatter: cocoa.NSPersonNameComponentsFormatter.CLASS;
