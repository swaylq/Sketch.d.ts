/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutManagerDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    layoutManager_shouldUseTemporaryAttributes_forDrawingToScreen_atCharacterIndex_effectiveRange<R = NSDictionary, P0 = NSLayoutManager, P1 = NSDictionary, P2 = boolean, P3 = number, P4 = _NSRange>(_layoutManager: P0, _shouldUseTemporaryAttributes: P1, _forDrawingToScreen: P2, _atCharacterIndex: P3, _effectiveRange: P4): R;
    layoutManager_textContainer_didChangeGeometryFromSize<R = void, P0 = NSLayoutManager, P1 = NSTextContainer, P2 = CGSize>(_layoutManager: P0, _textContainer: P1, _didChangeGeometryFromSize: P2): R;
    layoutManager_didCompleteLayoutForTextContainer_atEnd<R = void, P0 = NSLayoutManager, P1 = NSTextContainer, P2 = boolean>(_layoutManager: P0, _didCompleteLayoutForTextContainer: P1, _atEnd: P2): R;
    layoutManagerDidInvalidateLayout<R = void, P0 = NSLayoutManager>(_layoutManagerDidInvalidateLayout: P0): R;
    layoutManager_shouldSetLineFragmentRect_lineFragmentUsedRect_baselineOffset_inTextContainer_forGlyphRange<R = boolean, P0 = NSLayoutManager, P1 = CGRect, P2 = CGRect, P3 = number, P4 = NSTextContainer, P5 = _NSRange>(_layoutManager: P0, _shouldSetLineFragmentRect: P1, _lineFragmentUsedRect: P2, _baselineOffset: P3, _inTextContainer: P4, _forGlyphRange: P5): R;
    layoutManager_boundingBoxForControlGlyphAtIndex_forTextContainer_proposedLineFragment_glyphPosition_characterIndex<R = CGRect, P0 = NSLayoutManager, P1 = number, P2 = NSTextContainer, P3 = CGRect, P4 = CGPoint, P5 = number>(_layoutManager: P0, _boundingBoxForControlGlyphAtIndex: P1, _forTextContainer: P2, _proposedLineFragment: P3, _glyphPosition: P4, _characterIndex: P5): R;
    layoutManager_shouldBreakLineByHyphenatingBeforeCharacterAtIndex<R = boolean, P0 = NSLayoutManager, P1 = number>(_layoutManager: P0, _shouldBreakLineByHyphenatingBeforeCharacterAtIndex: P1): R;
    layoutManager_shouldBreakLineByWordBeforeCharacterAtIndex<R = boolean, P0 = NSLayoutManager, P1 = number>(_layoutManager: P0, _shouldBreakLineByWordBeforeCharacterAtIndex: P1): R;
    layoutManager_shouldUseAction_forControlCharacterAtIndex<R = number, P0 = NSLayoutManager, P1 = number, P2 = number>(_layoutManager: P0, _shouldUseAction: P1, _forControlCharacterAtIndex: P2): R;
    layoutManager_paragraphSpacingAfterGlyphAtIndex_withProposedLineFragmentRect<R = number, P0 = NSLayoutManager, P1 = number, P2 = CGRect>(_layoutManager: P0, _paragraphSpacingAfterGlyphAtIndex: P1, _withProposedLineFragmentRect: P2): R;
    layoutManager_paragraphSpacingBeforeGlyphAtIndex_withProposedLineFragmentRect<R = number, P0 = NSLayoutManager, P1 = number, P2 = CGRect>(_layoutManager: P0, _paragraphSpacingBeforeGlyphAtIndex: P1, _withProposedLineFragmentRect: P2): R;
    layoutManager_lineSpacingAfterGlyphAtIndex_withProposedLineFragmentRect<R = number, P0 = NSLayoutManager, P1 = number, P2 = CGRect>(_layoutManager: P0, _lineSpacingAfterGlyphAtIndex: P1, _withProposedLineFragmentRect: P2): R;
    layoutManager_shouldGenerateGlyphs_properties_characterIndexes_font_forGlyphRange<R = number, P0 = NSLayoutManager, P1 = number, P2 = number, P3 = number, P4 = NSFont, P5 = _NSRange>(_layoutManager: P0, _shouldGenerateGlyphs: P1, _properties: P2, _characterIndexes: P3, _font: P4, _forGlyphRange: P5): R;
  }
  namespace NSLayoutManagerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
