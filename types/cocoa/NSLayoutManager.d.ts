/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutManager<T0 = void, T1 = void, T2 = void> {
    // + NSLayoutManager(NSTextViewSupport_Legacy): 
    spellCheckerDidChangeDashSubstitution<R = void, P0 = unknown>(_spellCheckerDidChangeDashSubstitution: P0): R;
    spellCheckerDidChangeQuoteSubstitution<R = void, P0 = unknown>(_spellCheckerDidChangeQuoteSubstitution: P0): R;
    spellCheckerDidChangeReplacement<R = void, P0 = unknown>(_spellCheckerDidChangeReplacement: P0): R;
    spellCheckerDidChangeCorrection<R = void, P0 = unknown>(_spellCheckerDidChangeCorrection: P0): R;
    spellCheckerDidChangeLanguage<R = void, P0 = unknown>(_spellCheckerDidChangeLanguage: P0): R;
    spellCheckerDidUnlearnWord<R = void, P0 = unknown>(_spellCheckerDidUnlearnWord: P0): R;
    spellCheckerDidLearnWord<R = void, P0 = unknown>(_spellCheckerDidLearnWord: P0): R;
    showPackedGlyphs_length_glyphRange_atPoint_font_color_printingAdjustment<R = void, P0 = string, P1 = number, P2 = _NSRange, P3 = CGPoint, P4 = unknown, P5 = unknown, P6 = CGSize>(_showPackedGlyphs: P0, _length: P1, _glyphRange: P2, _atPoint: P3, _font: P4, _color: P5, _printingAdjustment: P6): R;
    layoutManagerOwnsFirstResponderInWindow<R = boolean, P0 = unknown>(_layoutManagerOwnsFirstResponderInWindow: P0): R;
    // + NSLayoutManager(RulerSupport): 
    rulerAccessoryViewForTextView_paragraphStyle_ruler_enabled<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean>(_rulerAccessoryViewForTextView: P0, _paragraphStyle: P1, _ruler: P2, _enabled: P3): R;
    _rulerAccViewDecimalTabWell<R = unknown>(): R;
    _rulerAccViewCenterTabWell<R = unknown>(): R;
    _rulerAccViewRightTabWell<R = unknown>(): R;
    _rulerAccViewLeftTabWell<R = unknown>(): R;
    rulerMarkersForTextView_paragraphStyle_ruler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_rulerMarkersForTextView: P0, _paragraphStyle: P1, _ruler: P2): R;
    _rulerAccViewStylesAction<R = void, P0 = unknown>(__rulerAccViewStylesAction: P0): R;
    _rulerAccViewSpacingAction<R = void, P0 = unknown>(__rulerAccViewSpacingAction: P0): R;
    _rulerAccViewListsAction<R = void, P0 = unknown>(__rulerAccViewListsAction: P0): R;
    _rulerAccViewAlignmentAction<R = void, P0 = unknown>(__rulerAccViewAlignmentAction: P0): R;
    _doUserSetListMarkerFormat_options<R = void, P0 = unknown, P1 = number>(__doUserSetListMarkerFormat: P0, _options: P1): R;
    _doUserSetListMarkerFormat_options_startingItemNumber<R = void, P0 = unknown, P1 = number, P2 = number>(__doUserSetListMarkerFormat: P0, _options: P1, _startingItemNumber: P2): R;
    _doUserSetListMarkerFormat_options_startingItemNumber_forceStartingItemNumber<R = void, P0 = unknown, P1 = number, P2 = number, P3 = boolean>(__doUserSetListMarkerFormat: P0, _options: P1, _startingItemNumber: P2, _forceStartingItemNumber: P3): R;
    _markerLevelForRange<R = number, P0 = _NSRange>(__markerLevelForRange: P0): R;
    _doUserSetListMarkerFormat_options_startingItemNumber_inRange_level<R = void, P0 = unknown, P1 = number, P2 = number, P3 = _NSRange, P4 = number>(__doUserSetListMarkerFormat: P0, _options: P1, _startingItemNumber: P2, _inRange: P3, _level: P4): R;
    _doUserRemoveMarkerFormatInRange<R = void, P0 = _NSRange>(__doUserRemoveMarkerFormatInRange: P0): R;
    _doUserSetAttributes<R = void, P0 = unknown>(__doUserSetAttributes: P0): R;
    _doUserSetAttributes_removeAttributes<R = void, P0 = unknown, P1 = unknown>(__doUserSetAttributes: P0, _removeAttributes: P1): R;
    _doUserParagraphStyleLineHeightMultiple_min_max_lineSpacing_paragraphSpacingBefore_after_isFinal<R = void, P0 = number, P1 = number, P2 = number, P3 = number, P4 = number, P5 = number, P6 = boolean>(__doUserParagraphStyleLineHeightMultiple: P0, _min: P1, _max: P2, _lineSpacing: P3, _paragraphSpacingBefore: P4, _after: P5, _isFinal: P6): R;
    _rulerAccViewPullDownAction<R = void, P0 = unknown>(__rulerAccViewPullDownAction: P0): R;
    _rulerAccViewUpdatePullDown<R = void, P0 = unknown>(__rulerAccViewUpdatePullDown: P0): R;
    _rulerAccViewFixedLineHeightAction<R = void, P0 = unknown>(__rulerAccViewFixedLineHeightAction: P0): R;
    _rulerAccViewIncrementLineHeightAction<R = void, P0 = unknown>(__rulerAccViewIncrementLineHeightAction: P0): R;
    controlTextDidEndEditing<R = void, P0 = unknown>(_controlTextDidEndEditing: P0): R;
    _doUserParagraphStyleLineHeight_fixed<R = void, P0 = number, P1 = boolean>(__doUserParagraphStyleLineHeight: P0, _fixed: P1): R;
    _rulerAccViewSetUpLists<R = void>(): R;
    _rulerAccViewUpdateStyles<R = void, P0 = unknown>(__rulerAccViewUpdateStyles: P0): R;
    // + NSLayoutManager(CollectTemporaryAttributes): 
    setTemporaryAttributes_forKey<R = void, P0 = unknown, P1 = unknown>(_setTemporaryAttributes: P0, _forKey: P1): R;
    temporaryAttributesForKey<R = unknown, P0 = unknown>(_temporaryAttributesForKey: P0): R;
  }
  namespace NSLayoutManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSLayoutManager(RulerSupport): 
      _rulerHelperClass<R = unknown>(): R;
    }
  }
}

declare const NSLayoutManager: cocoa.NSLayoutManager.CLASS;
