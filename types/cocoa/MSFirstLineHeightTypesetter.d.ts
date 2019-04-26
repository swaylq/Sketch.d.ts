/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFirstLineHeightTypesetter<T0 = void, T1 = void, T2 = void> extends NSATSTypesetter {
    cxx_destruct<R = void>(): R;
    willSetLineFragmentRect_forGlyphRange_usedRect_baselineOffset<R = void, P0 = CGRect, P1 = _NSRange, P2 = CGRect, P3 = number>(_willSetLineFragmentRect: P0, _forGlyphRange: P1, _usedRect: P2, _baselineOffset: P3): R;
    delegate<R = MSFirstLineTypesetterDelegate>(): R;
    setDelegate<R = void, P0 = MSFirstLineTypesetterDelegate>(_v: P0): R;
    forcedBaselineOffset<R = number>(): R;
    setForcedBaselineOffset<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSFirstLineHeightTypesetter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSATSTypesetter {}
  }
}

declare const MSFirstLineHeightTypesetter: cocoa.MSFirstLineHeightTypesetter.CLASS;
