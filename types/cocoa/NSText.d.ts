/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSText<T0 = void, T1 = void, T2 = void> extends NSView, NSChangeSpellingProtocol, NSIgnoreMisspelledWordsProtocol {
    scrollRangeToVisible<R = void, P0 = _NSRange>(_scrollRangeToVisible: P0): R;
    toggleRuler<R = void, P0 = unknown>(_toggleRuler: P0): R;
    checkSpelling<R = void, P0 = unknown>(_checkSpelling: P0): R;
    showGuessPanel<R = void, P0 = unknown>(_showGuessPanel: P0): R;
    unscript<R = void, P0 = unknown>(_unscript: P0): R;
    underline<R = void, P0 = unknown>(_underline: P0): R;
    superscript<R = void, P0 = unknown>(_superscript: P0): R;
    subscript<R = void, P0 = unknown>(_subscript: P0): R;
    alignCenter<R = void, P0 = unknown>(_alignCenter: P0): R;
    alignRight<R = void, P0 = unknown>(_alignRight: P0): R;
    alignLeft<R = void, P0 = unknown>(_alignLeft: P0): R;
    changeFont<R = void, P0 = unknown>(_changeFont: P0): R;
    selectAll<R = void, P0 = unknown>(_selectAll: P0): R;
    pasteRuler<R = void, P0 = unknown>(_pasteRuler: P0): R;
    pasteFont<R = void, P0 = unknown>(_pasteFont: P0): R;
    paste<R = void, P0 = unknown>(_paste: P0): R;
    delete<R = void, P0 = unknown>(_delete: P0): R;
    cut<R = void, P0 = unknown>(_cut: P0): R;
    copyRuler<R = void, P0 = unknown>(_copyRuler: P0): R;
    copyFont<R = void, P0 = unknown>(_copyFont: P0): R;
    copy<R = void, P0 = unknown>(_copy: P0): R;
    sizeToFit<R = void>(): R;
    setFont_range<R = void, P0 = unknown, P1 = _NSRange>(_setFont: P0, _range: P1): R;
    setTextColor_range<R = void, P0 = unknown, P1 = _NSRange>(_setTextColor: P0, _range: P1): R;
    readRTFDFromFile<R = boolean, P0 = unknown>(_readRTFDFromFile: P0): R;
    writeRTFDToFile_atomically<R = boolean, P0 = unknown, P1 = boolean>(_writeRTFDToFile: P0, _atomically: P1): R;
    replaceCharactersInRange_withRTFD<R = void, P0 = _NSRange, P1 = unknown>(_replaceCharactersInRange: P0, _withRTFD: P1): R;
    replaceCharactersInRange_withRTF<R = void, P0 = _NSRange, P1 = unknown>(_replaceCharactersInRange: P0, _withRTF: P1): R;
    RTFDFromRange<R = unknown, P0 = _NSRange>(_RTFDFromRange: P0): R;
    RTFFromRange<R = unknown, P0 = _NSRange>(_RTFFromRange: P0): R;
    replaceCharactersInRange_withString<R = void, P0 = _NSRange, P1 = unknown>(_replaceCharactersInRange: P0, _withString: P1): R;
    accessibilityTextLinkAtIndex<R = unknown, P0 = number>(_accessibilityTextLinkAtIndex: P0): R;
    accessibilityTextLinks<R = unknown>(): R;
    accessibilityAttachmentAtIndex<R = unknown, P0 = number>(_accessibilityAttachmentAtIndex: P0): R;
    accessibilityIndexForAttachment<R = number, P0 = unknown>(_accessibilityIndexForAttachment: P0): R;
    accessibilityAttachments<R = unknown>(): R;
    accessibilitySharedViewForIndex<R = unknown, P0 = number>(_accessibilitySharedViewForIndex: P0): R;
    accessibilitySharedTextViews<R = unknown>(): R;
    accessibilityStyleRangeForCharacterIndex<R = _NSRange, P0 = number>(_accessibilityStyleRangeForCharacterIndex: P0): R;
    accessibilityAXAttributedStringForCharacterRange_parent<R = unknown, P0 = _NSRange, P1 = unknown>(_accessibilityAXAttributedStringForCharacterRange: P0, _parent: P1): R;
    accessibilityRTFForCharacterRange<R = unknown, P0 = _NSRange>(_accessibilityRTFForCharacterRange: P0): R;
    accessibilityBoundsForCharacterRange<R = CGRect, P0 = _NSRange>(_accessibilityBoundsForCharacterRange: P0): R;
    accessibilityCharacterRangeForPosition<R = _NSRange, P0 = CGPoint>(_accessibilityCharacterRangeForPosition: P0): R;
    accessibilityCharacterRangeForLineNumber<R = _NSRange, P0 = number>(_accessibilityCharacterRangeForLineNumber: P0): R;
    accessibilityLineNumberForCharacterIndex<R = number, P0 = number>(_accessibilityLineNumberForCharacterIndex: P0): R;
    accessibilitySetVisibleCharacterRange<R = void, P0 = _NSRange>(_accessibilitySetVisibleCharacterRange: P0): R;
    accessibilityIsVisibleCharacterRangeSettable<R = boolean>(): R;
    accessibilityTextView<R = unknown>(): R;
    accessibilitySetSelectedRange<R = void, P0 = _NSRange>(_accessibilitySetSelectedRange: P0): R;
    accessibilityIsSelectedRangeSettable<R = boolean>(): R;
    accessibilitySelectedRange<R = _NSRange>(): R;
    accessibilitySetSelectedText<R = void, P0 = unknown>(_accessibilitySetSelectedText: P0): R;
    accessibilityIsSelectedTextSettable<R = boolean>(): R;
    accessibilityValueAttribute<R = unknown>(): R;
    accessibilityPostNotification<R = void, P0 = unknown>(_accessibilityPostNotification: P0): R;
    accessibilityPostNotification_withNotificationElement<R = void, P0 = unknown, P1 = unknown>(_accessibilityPostNotification: P0, _withNotificationElement: P1): R;
    selectedRange<R = _NSRange>(): R;
    setSelectedRange<R = void, P0 = _NSRange>(_v: P0): R;
    rulerVisible<R = boolean>(): R;
    verticallyResizable<R = boolean>(): R;
    setVerticallyResizable<R = void, P0 = boolean>(_v: P0): R;
    horizontallyResizable<R = boolean>(): R;
    setHorizontallyResizable<R = void, P0 = boolean>(_v: P0): R;
    minSize<R = CGSize>(): R;
    setMinSize<R = void, P0 = CGSize>(_v: P0): R;
    maxSize<R = CGSize>(): R;
    setMaxSize<R = void, P0 = CGSize>(_v: P0): R;
    usesFontPanel<R = boolean>(): R;
    setUsesFontPanel<R = void, P0 = boolean>(_v: P0): R;
    fieldEditor<R = boolean>(): R;
    setFieldEditor<R = void, P0 = boolean>(_v: P0): R;
    baseWritingDirection<R = number>(): R;
    setBaseWritingDirection<R = void, P0 = number>(_v: P0): R;
    alignment<R = number>(): R;
    setAlignment<R = void, P0 = number>(_v: P0): R;
    drawsBackground<R = boolean>(): R;
    setDrawsBackground<R = void, P0 = boolean>(_v: P0): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
    textColor<R = NSColor>(): R;
    setTextColor<R = void, P0 = NSColor>(_v: P0): R;
    font<R = NSFont>(): R;
    setFont<R = void, P0 = NSFont>(_v: P0): R;
    delegate<R = NSTextDelegate>(): R;
    setDelegate<R = void, P0 = NSTextDelegate>(_v: P0): R;
    importsGraphics<R = boolean>(): R;
    setImportsGraphics<R = void, P0 = boolean>(_v: P0): R;
    richText<R = boolean>(): R;
    setRichText<R = void, P0 = boolean>(_v: P0): R;
    selectable<R = boolean>(): R;
    setSelectable<R = void, P0 = boolean>(_v: P0): R;
    editable<R = boolean>(): R;
    setEditable<R = void, P0 = boolean>(_v: P0): R;
    string<R = NSString>(): R;
    setString<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSText {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSChangeSpellingProtocol, NSIgnoreMisspelledWordsProtocol {
      alloc<R = NSText>(): R;
      new: <R = NSText>() => R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSText: cocoa.NSText.CLASS;
