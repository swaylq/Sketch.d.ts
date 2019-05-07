/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConstantBaselineTypesetter<T0 = void, T1 = void, T2 = void> extends NSATSTypesetter {
    cxx_destruct<R = void>(): R;
    setLineFragmentRect_forGlyphRange_usedRect_baselineOffset<R = void, P0 = CGRect, P1 = _NSRange, P2 = CGRect, P3 = number>(_setLineFragmentRect: P0, _forGlyphRange: P1, _usedRect: P2, _baselineOffset: P3): R;
    willSetLineFragmentRect_forGlyphRange_usedRect_baselineOffset<R = void, P0 = CGRect, P1 = _NSRange, P2 = CGRect, P3 = number>(_willSetLineFragmentRect: P0, _forGlyphRange: P1, _usedRect: P2, _baselineOffset: P3): R;
    paragraphSpacingBeforeGlyphAtIndex_withProposedLineFragmentRect<R = number, P0 = number, P1 = CGRect>(_paragraphSpacingBeforeGlyphAtIndex: P0, _withProposedLineFragmentRect: P1): R;
    invalidateLayoutFromGlyphLocation<R = void, P0 = number>(_invalidateLayoutFromGlyphLocation: P0): R;
    maxLineHeightFontFromCurrentParagraph_maxLineHeight_charcterRange<R = unknown, P0 = number, P1 = number, P2 = _NSRange>(_maxLineHeightFontFromCurrentParagraph: P0, _maxLineHeight: P1, _charcterRange: P2): R;
    constantBaselineGlyphRangeForGlyphLocation<R = _NSRange, P0 = number>(_constantBaselineGlyphRangeForGlyphLocation: P0): R;
    usesFontLeading<R = boolean>(): R;
    init<R = unknown>(): R;
    rangeMap<R = BCRangeMap>(): R;
    setRangeMap<R = void, P0 = BCRangeMap>(_v: P0): R;
  }
  namespace MSConstantBaselineTypesetter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSATSTypesetter {}
  }
}

declare const MSConstantBaselineTypesetter: cocoa.MSConstantBaselineTypesetter.CLASS;
