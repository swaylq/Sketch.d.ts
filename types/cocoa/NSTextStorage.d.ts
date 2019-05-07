/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextStorage<T0 = void, T1 = void, T2 = void> {
    // + NSTextStorage(NSPrivateScripting): 
    _subtextStorageFromRange<R = unknown, P0 = _NSRange>(__subtextStorageFromRange: P0): R;
    // + NSTextStorage(NSScripting): 
    coerceValue_forKey<R = unknown, P0 = unknown, P1 = unknown>(_coerceValue: P0, _forKey: P1): R;
    removeValueAtIndex_fromPropertyWithKey<R = void, P0 = number, P1 = unknown>(_removeValueAtIndex: P0, _fromPropertyWithKey: P1): R;
    insertValue_atIndex_inPropertyWithKey<R = void, P0 = unknown, P1 = number, P2 = unknown>(_insertValue: P0, _atIndex: P1, _inPropertyWithKey: P2): R;
    replaceValueAtIndex_inPropertyWithKey_withValue<R = void, P0 = number, P1 = unknown, P2 = unknown>(_replaceValueAtIndex: P0, _inPropertyWithKey: P1, _withValue: P2): R;
    insertInAttachments<R = void, P0 = unknown>(_insertInAttachments: P0): R;
    setForegroundColor<R = void, P0 = unknown>(_setForegroundColor: P0): R;
    foregroundColor<R = unknown>(): R;
    setFontSize<R = void, P0 = number>(_setFontSize: P0): R;
    fontSize<R = number>(): R;
    setFontName<R = void, P0 = unknown>(_setFontName: P0): R;
    fontName<R = unknown>(): R;
    setFont<R = void, P0 = unknown>(_setFont: P0): R;
    font<R = unknown>(): R;
    setCharacters<R = void, P0 = unknown>(_setCharacters: P0): R;
    characters<R = unknown>(): R;
    setWords<R = void, P0 = unknown>(_setWords: P0): R;
    setParagraphs<R = void, P0 = unknown>(_setParagraphs: P0): R;
    paragraphs<R = unknown>(): R;
    setAttributeRuns<R = void, P0 = unknown>(_setAttributeRuns: P0): R;
    attributeRuns<R = unknown>(): R;
    scriptingTextDescriptor<R = unknown>(): R;
    words<R = unknown>(): R;
    // + NSTextStorage(NSUndo): 
    _undoRedoAttributedSubstringFromRange<R = unknown, P0 = _NSRange>(__undoRedoAttributedSubstringFromRange: P0): R;
    _undoRedoTextOperation<R = void, P0 = unknown>(__undoRedoTextOperation: P0): R;
    // + NSTextStorage(CollectAttributes): 
    setAttributeValuesByRange_forKey<R = void, P0 = unknown, P1 = unknown>(_setAttributeValuesByRange: P0, _forKey: P1): R;
    attributeValuesByRangeForKey_range<R = unknown, P0 = unknown, P1 = _NSRange>(_attributeValuesByRangeForKey: P0, _range: P1): R;
    attributeValuesByRangeForKey<R = unknown, P0 = unknown>(_attributeValuesByRangeForKey: P0): R;
    // + NSTextStorage(MSCalculateBounds): 
    computeFlexibleLayout<R = CGRect>(): R;
    calculateFlexibleBounds<R = CGRect, P0 = CGRect>(_calculateFlexibleBounds: P0): R;
    computeFixedLayout<R = CGRect>(): R;
    calculateFixedBounds<R = CGRect, P0 = CGRect>(_calculateFixedBounds: P0): R;
    glyphBounds<R = CGRect>(): R;
    boundsForTextBehaviour_original<R = CGRect, P0 = number, P1 = CGRect>(_boundsForTextBehaviour: P0, _original: P1): R;
    // + NSTextStorage(SketchRenderingSupport): 
    applyTextColor_forRange_context<R = void, P0 = unknown, P1 = _NSRange, P2 = unknown>(_applyTextColor: P0, _forRange: P1, _context: P2): R;
    addAttribute_value_range_temporarily<R = void, P0 = unknown, P1 = unknown, P2 = _NSRange, P3 = boolean>(_addAttribute: P0, _value: P1, _range: P2, _temporarily: P3): R;
  }
  namespace NSTextStorage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const NSTextStorage: cocoa.NSTextStorage.CLASS;
