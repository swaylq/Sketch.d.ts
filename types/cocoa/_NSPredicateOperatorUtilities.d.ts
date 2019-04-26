/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPredicateOperatorUtilities<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSPredicateOperatorUtilities {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSPredicateOperatorUtilities>(): R;
      new: <R = _NSPredicateOperatorUtilities>() => R;
      escapeFullwidthRegexChars<R = void, P0 = unknown>(_escapeFullwidthRegexChars: P0): R;
      copyRegexFindSafePattern_toBuffer<R = number, P0 = unknown, P1 = number>(_copyRegexFindSafePattern: P0, _toBuffer: P1): R;
      doRegexForString_pattern_likeProtect_flags_context<R = boolean, P0 = unknown, P1 = unknown, P2 = boolean, P3 = number, P4 = unknown>(_doRegexForString: P0, _pattern: P1, _likeProtect: P2, _flags: P3, _context: P4): R;
      newStringFrom_usingUnicodeTransforms<R = unknown, P0 = unknown, P1 = number>(_newStringFrom: P0, _usingUnicodeTransforms: P1): R;
      retainedLocale<R = __CFLocale>(): R;
    }
  }
}
