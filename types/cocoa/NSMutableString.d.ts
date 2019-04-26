/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableString<T0 = void, T1 = void, T2 = void> extends NSString {
    initWithCapacity<R = unknown, P0 = number>(_initWithCapacity: P0): R;
    applyTransform_reverse_range_updatedRange<R = boolean, P0 = unknown, P1 = boolean, P2 = _NSRange, P3 = _NSRange>(_applyTransform: P0, _reverse: P1, _range: P2, _updatedRange: P3): R;
    replaceOccurrencesOfString_withString_options_range<R = number, P0 = unknown, P1 = unknown, P2 = number, P3 = _NSRange>(_replaceOccurrencesOfString: P0, _withString: P1, _options: P2, _range: P3): R;
    setString<R = void, P0 = unknown>(_setString: P0): R;
    appendFormat<R = void, P0 = unknown>(_appendFormat: P0): R;
    replaceCharactersInRange_withCharacters_length<R = void, P0 = _NSRange, P1 = number, P2 = number>(_replaceCharactersInRange: P0, _withCharacters: P1, _length: P2): R;
    replaceCharactersInRange_withCString_length<R = void, P0 = _NSRange, P1 = string, P2 = number>(_replaceCharactersInRange: P0, _withCString: P1, _length: P2): R;
    deleteCharactersInRange<R = void, P0 = _NSRange>(_deleteCharactersInRange: P0): R;
    appendString<R = void, P0 = unknown>(_appendString: P0): R;
    insertString_atIndex<R = void, P0 = unknown, P1 = number>(_insertString: P0, _atIndex: P1): R;
    replaceCharactersInRange_withString<R = void, P0 = _NSRange, P1 = unknown>(_replaceCharactersInRange: P0, _withString: P1): R;
    _cfNormalize<R = void, P0 = number>(__cfNormalize: P0): R;
    _cfTrimWS<R = void>(): R;
    _trimWithCharacterSet<R = void, P0 = unknown>(__trimWithCharacterSet: P0): R;
    _cfTrim<R = void, P0 = __CFString>(__cfTrim: P0): R;
    _cfPad_length_padIndex<R = void, P0 = __CFString, P1 = number, P2 = number>(__cfPad: P0, _length: P1, _padIndex: P2): R;
    _cfCapitalize<R = void, P0 = void>(__cfCapitalize: P0): R;
    _cfUppercase<R = void, P0 = void>(__cfUppercase: P0): R;
    _cfLowercase<R = void, P0 = void>(__cfLowercase: P0): R;
    _cfAppendCString_length<R = void, P0 = string, P1 = number>(__cfAppendCString: P0, _length: P1): R;
    appendCharacters_length<R = void, P0 = number, P1 = number>(_appendCharacters: P0, _length: P1): R;
    __oldnf_replaceLastAppearanceOfString_withString<R = void, P0 = unknown, P1 = unknown>(___oldnf_replaceLastAppearanceOfString: P0, _withString: P1): R;
    __oldnf_replaceFirstAppearanceOfString_withString<R = void, P0 = unknown, P1 = unknown>(___oldnf_replaceFirstAppearanceOfString: P0, _withString: P1): R;
    __oldnf_replaceAllAppearancesOfString_withString<R = void, P0 = unknown, P1 = unknown>(___oldnf_replaceAllAppearancesOfString: P0, _withString: P1): R;
    __oldnf_deleteAllCharactersFromSet<R = void, P0 = unknown>(___oldnf_deleteAllCharactersFromSet: P0): R;
    _replaceOccurrencesOfRegularExpressionPattern_withTemplate_options_range<R = number, P0 = unknown, P1 = unknown, P2 = number, P3 = _NSRange>(__replaceOccurrencesOfRegularExpressionPattern: P0, _withTemplate: P1, _options: P2, _range: P3): R;
  }
  namespace NSMutableString {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSString {
      alloc<R = NSMutableString>(): R;
      new: <R = NSMutableString>() => R;
      stringWithCapacity<R = unknown, P0 = number>(_stringWithCapacity: P0): R;
    }
  }
}

declare const NSMutableString: cocoa.NSMutableString.CLASS;
