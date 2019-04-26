/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextInputClientProtocol<T0 = void, T1 = void, T2 = void> {
    characterIndexForPoint<R = number, P0 = CGPoint>(_characterIndexForPoint: P0): R;
    firstRectForCharacterRange_actualRange<R = CGRect, P0 = _NSRange, P1 = _NSRange>(_firstRectForCharacterRange: P0, _actualRange: P1): R;
    validAttributesForMarkedText<R = NSArray>(): R;
    attributedSubstringForProposedRange_actualRange<R = NSAttributedString, P0 = _NSRange, P1 = _NSRange>(_attributedSubstringForProposedRange: P0, _actualRange: P1): R;
    hasMarkedText<R = boolean>(): R;
    markedRange<R = _NSRange>(): R;
    selectedRange<R = _NSRange>(): R;
    unmarkText<R = void>(): R;
    setMarkedText_selectedRange_replacementRange<R = void, P0 = unknown, P1 = _NSRange, P2 = _NSRange>(_setMarkedText: P0, _selectedRange: P1, _replacementRange: P2): R;
    doCommandBySelector<R = void, P0 = string>(_doCommandBySelector: P0): R;
    insertText_replacementRange<R = void, P0 = unknown, P1 = _NSRange>(_insertText: P0, _replacementRange: P1): R;
    drawsVerticallyForCharacterAtIndex<R = boolean, P0 = number>(_drawsVerticallyForCharacterAtIndex: P0): R;
    windowLevel<R = number>(): R;
    baselineDeltaForCharacterAtIndex<R = number, P0 = number>(_baselineDeltaForCharacterAtIndex: P0): R;
    fractionOfDistanceThroughGlyphForPoint<R = number, P0 = CGPoint>(_fractionOfDistanceThroughGlyphForPoint: P0): R;
    attributedString<R = NSAttributedString>(): R;
  }
  namespace NSTextInputClientProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
