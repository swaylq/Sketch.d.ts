/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditorLocalizer<T0 = void, T1 = void, T2 = void> extends NSObject {
    localizeOptionDictionaries<R = unknown, P0 = unknown>(_localizeOptionDictionaries: P0): R;
    _constructTitleMappingDictionariesFromOptionDictionaries_localizationItemIndex<R = unknown, P0 = unknown, P1 = number>(__constructTitleMappingDictionariesFromOptionDictionaries: P0, _localizationItemIndex: P1): R;
    _localizedItemForDefaultItemAtLayoutIndex_inDefaultItemsAtIndex<R = unknown, P0 = number, P1 = number>(__localizedItemForDefaultItemAtLayoutIndex: P0, _inDefaultItemsAtIndex: P1): R;
    dealloc<R = void>(): R;
    initWithDictionary<R = unknown, P0 = unknown>(_initWithDictionary: P0): R;
    dictionary<R = unknown>(): R;
    _parseKey_value_errorDescription<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(__parseKey: P0, _value: P1, _errorDescription: P2): R;
    _extractOrderedNonStaticItemsFromArray<R = unknown, P0 = unknown>(__extractOrderedNonStaticItemsFromArray: P0): R;
    _parseHalf_intoArray_isValue_ignoringSeparators_errorDescription<R = boolean, P0 = unknown, P1 = unknown, P2 = boolean, P3 = boolean, P4 = unknown>(__parseHalf: P0, _intoArray: P1, _isValue: P2, _ignoringSeparators: P3, _errorDescription: P4): R;
    _tokenizeString_intoArray_ignoringSeparators_errorDescription<R = boolean, P0 = unknown, P1 = unknown, P2 = boolean, P3 = unknown>(__tokenizeString: P0, _intoArray: P1, _ignoringSeparators: P2, _errorDescription: P3): R;
  }
  namespace NSRuleEditorLocalizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSRuleEditorLocalizer>(): R;
      new: <R = NSRuleEditorLocalizer>() => R;
    }
  }
}

declare const NSRuleEditorLocalizer: cocoa.NSRuleEditorLocalizer.CLASS;
