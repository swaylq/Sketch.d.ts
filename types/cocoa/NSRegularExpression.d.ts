/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRegularExpression<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
    _captureGroupNumberWithName<R = number, P0 = unknown>(__captureGroupNumberWithName: P0): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    hash<R = number>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithPattern_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithPattern: P0, _options: P1, _error: P2): R;
    rangeOfFirstMatchInString_options_range<R = _NSRange, P0 = unknown, P1 = number, P2 = _NSRange>(_rangeOfFirstMatchInString: P0, _options: P1, _range: P2): R;
    firstMatchInString_options_range<R = unknown, P0 = unknown, P1 = number, P2 = _NSRange>(_firstMatchInString: P0, _options: P1, _range: P2): R;
    numberOfMatchesInString_options_range<R = number, P0 = unknown, P1 = number, P2 = _NSRange>(_numberOfMatchesInString: P0, _options: P1, _range: P2): R;
    matchesInString_options_range<R = unknown, P0 = unknown, P1 = number, P2 = _NSRange>(_matchesInString: P0, _options: P1, _range: P2): R;
    enumerateMatchesInString_options_range_usingBlock<R = void, P0 = unknown, P1 = number, P2 = _NSRange, P3 = CDUnknownBlockType>(_enumerateMatchesInString: P0, _options: P1, _range: P2, _usingBlock: P3): R;
    replacementStringForResult_inString_offset_template<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_replacementStringForResult: P0, _inString: P1, _offset: P2, _template: P3): R;
    replaceMatchesInString_options_range_withTemplate<R = number, P0 = unknown, P1 = number, P2 = _NSRange, P3 = unknown>(_replaceMatchesInString: P0, _options: P1, _range: P2, _withTemplate: P3): R;
    stringByReplacingMatchesInString_options_range_withTemplate<R = unknown, P0 = unknown, P1 = number, P2 = _NSRange, P3 = unknown>(_stringByReplacingMatchesInString: P0, _options: P1, _range: P2, _withTemplate: P3): R;
    numberOfCaptureGroups<R = number>(): R;
    options<R = number>(): R;
    pattern<R = NSString>(): R;
  }
  namespace NSRegularExpression {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSRegularExpression>(): R;
      new: <R = NSRegularExpression>() => R;
      escapedPatternForString<R = unknown, P0 = unknown>(_escapedPatternForString: P0): R;
      regularExpressionWithPattern_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_regularExpressionWithPattern: P0, _options: P1, _error: P2): R;
      initialize<R = void>(): R;
      escapedTemplateForString<R = unknown, P0 = unknown>(_escapedTemplateForString: P0): R;
    }
  }
}

declare const NSRegularExpression: cocoa.NSRegularExpression.CLASS;
