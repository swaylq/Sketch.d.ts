/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextCheckingResult<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
    timeIsPast<R = boolean>(): R;
    timeIsApproximate<R = boolean>(): R;
    timeIsSignificant<R = boolean>(): R;
    underlyingResult<R = void>(): R;
    phoneNumber<R = unknown>(): R;
    regularExpression<R = unknown>(): R;
    alternativeStrings<R = unknown>(): R;
    replacementString<R = unknown>(): R;
    URL<R = unknown>(): R;
    components<R = unknown>(): R;
    addressComponents<R = unknown>(): R;
    trailingText<R = unknown>(): R;
    leadingText<R = unknown>(): R;
    referenceDate<R = unknown>(): R;
    duration<R = number>(): R;
    timeZone<R = unknown>(): R;
    date<R = unknown>(): R;
    grammarDetails<R = unknown>(): R;
    orthography<R = unknown>(): R;
    rangeWithName<R = _NSRange, P0 = unknown>(_rangeWithName: P0): R;
    rangeAtIndex<R = _NSRange, P0 = number>(_rangeAtIndex: P0): R;
    numberOfRanges<R = number>(): R;
    _adjustRangesWithOffset<R = boolean, P0 = number>(__adjustRangesWithOffset: P0): R;
    resultByAdjustingRangesWithOffset<R = unknown, P0 = number>(_resultByAdjustingRangesWithOffset: P0): R;
    decodeRangeWithCoder<R = _NSRange, P0 = unknown>(_decodeRangeWithCoder: P0): R;
    encodeRangeWithCoder<R = void, P0 = unknown>(_encodeRangeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    description<R = unknown>(): R;
    range<R = _NSRange>(): R;
    resultType<R = number>(): R;
  }
  namespace NSTextCheckingResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSTextCheckingResult>(): R;
      new: <R = NSTextCheckingResult>() => R;
      initialize<R = void>(): R;
      transitInformationCheckingResultWithRange_components<R = unknown, P0 = _NSRange, P1 = unknown>(_transitInformationCheckingResultWithRange: P0, _components: P1): R;
      phoneNumberCheckingResultWithRange_phoneNumber<R = unknown, P0 = _NSRange, P1 = unknown>(_phoneNumberCheckingResultWithRange: P0, _phoneNumber: P1): R;
      regularExpressionCheckingResultWithRanges_count_regularExpression<R = unknown, P0 = _NSRange, P1 = number, P2 = unknown>(_regularExpressionCheckingResultWithRanges: P0, _count: P1, _regularExpression: P2): R;
      correctionCheckingResultWithRange_replacementString_alternativeStrings<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown>(_correctionCheckingResultWithRange: P0, _replacementString: P1, _alternativeStrings: P2): R;
      correctionCheckingResultWithRange_replacementString<R = unknown, P0 = _NSRange, P1 = unknown>(_correctionCheckingResultWithRange: P0, _replacementString: P1): R;
      replacementCheckingResultWithRange_replacementString<R = unknown, P0 = _NSRange, P1 = unknown>(_replacementCheckingResultWithRange: P0, _replacementString: P1): R;
      dashCheckingResultWithRange_replacementString<R = unknown, P0 = _NSRange, P1 = unknown>(_dashCheckingResultWithRange: P0, _replacementString: P1): R;
      quoteCheckingResultWithRange_replacementString<R = unknown, P0 = _NSRange, P1 = unknown>(_quoteCheckingResultWithRange: P0, _replacementString: P1): R;
      linkCheckingResultWithRange_URL<R = unknown, P0 = _NSRange, P1 = unknown>(_linkCheckingResultWithRange: P0, _URL: P1): R;
      addressCheckingResultWithRange_components<R = unknown, P0 = _NSRange, P1 = unknown>(_addressCheckingResultWithRange: P0, _components: P1): R;
      dateCheckingResultWithRange_date_timeZone_duration<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown, P3 = number>(_dateCheckingResultWithRange: P0, _date: P1, _timeZone: P2, _duration: P3): R;
      dateCheckingResultWithRange_date<R = unknown, P0 = _NSRange, P1 = unknown>(_dateCheckingResultWithRange: P0, _date: P1): R;
      grammarCheckingResultWithRange_details<R = unknown, P0 = _NSRange, P1 = unknown>(_grammarCheckingResultWithRange: P0, _details: P1): R;
      spellCheckingResultWithRange<R = unknown, P0 = _NSRange>(_spellCheckingResultWithRange: P0): R;
      orthographyCheckingResultWithRange_orthography<R = unknown, P0 = _NSRange, P1 = unknown>(_orthographyCheckingResultWithRange: P0, _orthography: P1): R;
    }
  }
}

declare const NSTextCheckingResult: cocoa.NSTextCheckingResult.CLASS;
