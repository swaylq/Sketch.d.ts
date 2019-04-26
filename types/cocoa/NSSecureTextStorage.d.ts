/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSecureTextStorage<T0 = void, T1 = void, T2 = void> extends NSTextStorage {
    nextWordFromIndex_forward<R = number, P0 = number, P1 = boolean>(_nextWordFromIndex: P0, _forward: P1): R;
    doubleClickAtIndex<R = _NSRange, P0 = number>(_doubleClickAtIndex: P0): R;
    lineBreakByHyphenatingBeforeIndex_withinRange<R = number, P0 = number, P1 = _NSRange>(_lineBreakByHyphenatingBeforeIndex: P0, _withinRange: P1): R;
    lineBreakBeforeIndex_withinRange<R = number, P0 = number, P1 = _NSRange>(_lineBreakBeforeIndex: P0, _withinRange: P1): R;
    attribute_atIndex_longestEffectiveRange_inRange<R = unknown, P0 = unknown, P1 = number, P2 = _NSRange, P3 = _NSRange>(_attribute: P0, _atIndex: P1, _longestEffectiveRange: P2, _inRange: P3): R;
    attribute_atIndex_effectiveRange<R = unknown, P0 = unknown, P1 = number, P2 = _NSRange>(_attribute: P0, _atIndex: P1, _effectiveRange: P2): R;
    attributesAtIndex_longestEffectiveRange_inRange<R = unknown, P0 = number, P1 = _NSRange, P2 = _NSRange>(_attributesAtIndex: P0, _longestEffectiveRange: P1, _inRange: P2): R;
    addAttribute_value_range<R = void, P0 = unknown, P1 = unknown, P2 = _NSRange>(_addAttribute: P0, _value: P1, _range: P2): R;
    replaceCharactersInRange_withAttributedString<R = void, P0 = _NSRange, P1 = unknown>(_replaceCharactersInRange: P0, _withAttributedString: P1): R;
    setAttributes_range<R = void, P0 = unknown, P1 = _NSRange>(_setAttributes: P0, _range: P1): R;
    replaceCharactersInRange_withString<R = void, P0 = _NSRange, P1 = unknown>(_replaceCharactersInRange: P0, _withString: P1): R;
    attributesAtIndex_effectiveRange<R = unknown, P0 = number, P1 = _NSRange>(_attributesAtIndex: P0, _effectiveRange: P1): R;
    string<R = unknown>(): R;
    font<R = unknown>(): R;
    setFont<R = void, P0 = unknown>(_setFont: P0): R;
    bullferCharacter<R = number>(): R;
    setBulletCharacter<R = void, P0 = number>(_setBulletCharacter: P0): R;
    endSecureMode<R = void>(): R;
    beginSecureMode<R = void>(): R;
    dealloc<R = void>(): R;
    init<R = unknown>(): R;
  }
  namespace NSSecureTextStorage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextStorage {
      initialize<R = void>(): R;
    }
  }
}

declare const NSSecureTextStorage: cocoa.NSSecureTextStorage.CLASS;
