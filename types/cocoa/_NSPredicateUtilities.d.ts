/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPredicateUtilities<T0 = void, T1 = void, T2 = void> extends NSObject {
    distanceFromLocation<R = number, P0 = unknown>(_distanceFromLocation: P0): R;
  }
  namespace _NSPredicateUtilities {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSPredicateUtilities>(): R;
      new: <R = _NSPredicateUtilities>() => R;
      _constantValueClassesForSecureCoding<R = unknown>(): R;
      _operatorClassesForSecureCoding<R = unknown>(): R;
      _extendedExpressionClassesForSecureCoding<R = unknown>(): R;
      _expressionClassesForSecureCoding<R = unknown>(): R;
      _compoundPredicateClassesForSecureCoding<R = unknown>(): R;
      _predicateClassesForSecureCoding<R = unknown>(): R;
      _parserableCollectionDescription<R = unknown, P0 = unknown>(__parserableCollectionDescription: P0): R;
      _parserableDateDescription<R = unknown, P0 = unknown>(__parserableDateDescription: P0): R;
      _parserableStringDescription<R = unknown, P0 = unknown>(__parserableStringDescription: P0): R;
      _isReservedWordInParser<R = boolean, P0 = unknown>(__isReservedWordInParser: P0): R;
      inverseOrderKey<R = unknown, P0 = unknown>(_inverseOrderKey: P0): R;
      distinct<R = unknown, P0 = unknown>(_distinct: P0): R;
      indexed_by<R = unknown, P0 = unknown, P1 = unknown>(_indexed: P0, _by: P1): R;
      noindex<R = unknown, P0 = unknown>(_noindex: P0): R;
      onesComplement<R = unknown, P0 = unknown>(_onesComplement: P0): R;
      rightshift_by<R = unknown, P0 = unknown, P1 = unknown>(_rightshift: P0, _by: P1): R;
      leftshift_by<R = unknown, P0 = unknown, P1 = unknown>(_leftshift: P0, _by: P1): R;
      bitwiseXor_with<R = unknown, P0 = unknown, P1 = unknown>(_bitwiseXor: P0, _with: P1): R;
      bitwiseOr_with<R = unknown, P0 = unknown, P1 = unknown>(_bitwiseOr: P0, _with: P1): R;
      bitwiseAnd_with<R = unknown, P0 = unknown, P1 = unknown>(_bitwiseAnd: P0, _with: P1): R;
      distanceToLocation_fromLocation<R = unknown, P0 = unknown, P1 = unknown>(_distanceToLocation: P0, _fromLocation: P1): R;
      now<R = unknown>(): R;
      objectFrom_withIndex<R = unknown, P0 = unknown, P1 = unknown>(_objectFrom: P0, _withIndex: P1): R;
      randomn<R = unknown, P0 = unknown>(_randomn: P0): R;
      random<R = unknown>(): R;
      castObject_toType<R = unknown, P0 = unknown, P1 = unknown>(_castObject: P0, _toType: P1): R;
      _convertStringToNumber<R = unknown, P0 = unknown>(__convertStringToNumber: P0): R;
      length<R = unknown, P0 = unknown>(_length: P0): R;
      lowercase<R = unknown, P0 = unknown>(_lowercase: P0): R;
      uppercase<R = unknown, P0 = unknown>(_uppercase: P0): R;
      tokenize_using<R = unknown, P0 = unknown, P1 = unknown>(_tokenize: P0, _using: P1): R;
      _collapseAndTokenize_flags_locale<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(__collapseAndTokenize: P0, _flags: P1, _locale: P2): R;
      _processAndTokenize_flags_locale<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(__processAndTokenize: P0, _flags: P1, _locale: P2): R;
      _doTokenization_locale<R = unknown, P0 = unknown, P1 = unknown>(__doTokenization: P0, _locale: P1): R;
      trunc<R = unknown, P0 = unknown>(_trunc: P0): R;
      abs<R = unknown, P0 = unknown>(_abs: P0): R;
      ceiling<R = unknown, P0 = unknown>(_ceiling: P0): R;
      floor<R = unknown, P0 = unknown>(_floor: P0): R;
      exp<R = unknown, P0 = unknown>(_exp: P0): R;
      raise_toPower<R = unknown, P0 = unknown, P1 = unknown>(_raise: P0, _toPower: P1): R;
      ln<R = unknown, P0 = unknown>(_ln: P0): R;
      log<R = unknown, P0 = unknown>(_log: P0): R;
      sqrt<R = unknown, P0 = unknown>(_sqrt: P0): R;
      modulus_by<R = unknown, P0 = unknown, P1 = unknown>(_modulus: P0, _by: P1): R;
      divide_by<R = unknown, P0 = unknown, P1 = unknown>(_divide: P0, _by: P1): R;
      multiply_by<R = unknown, P0 = unknown, P1 = unknown>(_multiply: P0, _by: P1): R;
      from_subtract<R = unknown, P0 = unknown, P1 = unknown>(_from: P0, _subtract: P1): R;
      add_to<R = unknown, P0 = unknown, P1 = unknown>(_add: P0, _to: P1): R;
      stddev<R = unknown, P0 = unknown>(_stddev: P0): R;
      mode<R = unknown, P0 = unknown>(_mode: P0): R;
      median<R = unknown, P0 = unknown>(_median: P0): R;
      average<R = unknown, P0 = unknown>(_average: P0): R;
      max<R = unknown, P0 = unknown>(_max: P0): R;
      min<R = unknown, P0 = unknown>(_min: P0): R;
      count<R = unknown, P0 = unknown>(_count: P0): R;
      sum<R = unknown, P0 = unknown>(_sum: P0): R;
      _getCommonTypeFor<R = number, P0 = unknown>(__getCommonTypeFor: P0): R;
      _getITypeFor<R = number, P0 = string>(__getITypeFor: P0): R;
    }
  }
}
