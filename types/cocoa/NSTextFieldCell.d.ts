/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFieldCell<T0 = void, T1 = void, T2 = void> extends NSActionCell {
    viewDidEndLiveResize<R = void>(): R;
    viewWillStartLiveResize<R = void>(): R;
    _stringDrawingContextWithBaselineOffsetsInRect<R = unknown, P0 = CGRect>(__stringDrawingContextWithBaselineOffsetsInRect: P0): R;
    _okayToHitTest<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
    setFont<R = void, P0 = unknown>(_setFont: P0): R;
    _shouldStyleUneditableTextInView<R = boolean, P0 = unknown>(__shouldStyleUneditableTextInView: P0): R;
    interiorBackgroundStyle<R = number>(): R;
    _textColorForMenuItemView<R = unknown>(): R;
    _getTextColor_backgroundColor<R = void, P0 = unknown, P1 = unknown>(__getTextColor: P0, _backgroundColor: P1): R;
    setWantsNotificationForMarkedText<R = void, P0 = boolean>(_setWantsNotificationForMarkedText: P0): R;
    _shouldDrawHighlightRect<R = boolean>(): R;
    _setButtonTitleCell<R = void, P0 = boolean>(__setButtonTitleCell: P0): R;
    _setShouldNotClipToBounds<R = void, P0 = boolean>(__setShouldNotClipToBounds: P0): R;
    _bezelLayer<R = unknown>(): R;
    _updateBezelInLayer_withFrame_inView<R = boolean, P0 = unknown, P1 = CGRect, P2 = unknown>(__updateBezelInLayer: P0, _withFrame: P1, _inView: P2): R;
    setBackgroundStyle<R = void, P0 = number>(_setBackgroundStyle: P0): R;
    _invalidateCachedLineRef<R = void>(): R;
    _isEditingInView<R = boolean, P0 = unknown>(__isEditingInView: P0): R;
    _drawForegroundOfTextLayer<R = void>(): R;
    _textLayerDrawingRectForCellFrame<R = CGRect, P0 = CGRect>(__textLayerDrawingRectForCellFrame: P0): R;
    _maybeCheckTitleClippingForFrame_inView<R = boolean, P0 = CGRect, P1 = unknown>(__maybeCheckTitleClippingForFrame: P0, _inView: P1): R;
    _drawThemeBezelWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(__drawThemeBezelWithFrame: P0, _inView: P1): R;
    _drawBezeledBackgroundWithFrame_inView_includeFocus<R = void, P0 = CGRect, P1 = unknown, P2 = boolean>(__drawBezeledBackgroundWithFrame: P0, _inView: P1, _includeFocus: P2): R;
    _fillsWithBackgroundColor<R = boolean>(): R;
    _drawKeyboardFocusRingWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(__drawKeyboardFocusRingWithFrame: P0, _inView: P1): R;
    _coreUIDrawOptionsWithFrame_inView_includeFocus_maskOnly<R = __CFDictionary, P0 = CGRect, P1 = unknown, P2 = boolean, P3 = boolean>(__coreUIDrawOptionsWithFrame: P0, _inView: P1, _includeFocus: P2, _maskOnly: P3): R;
    _coreUIVariantKeyValue<R = __CFString>(): R;
    _coreUISizeKeyValueForCellFrame<R = __CFString, P0 = CGRect>(__coreUISizeKeyValueForCellFrame: P0): R;
    _coreUIEnabledStateKeyValue<R = __CFString>(): R;
    _shouldAdjustDrawingRectUsingSquareBezelHacks<R = boolean>(): R;
    _adjustedFrameUsingSquareBezelHacks<R = CGRect, P0 = CGRect>(__adjustedFrameUsingSquareBezelHacks: P0): R;
    _coreUIHeightForRoundedBezel<R = number>(): R;
    setAutomaticTextCompletionEnabled<R = void, P0 = boolean>(_setAutomaticTextCompletionEnabled: P0): R;
    isAutomaticTextCompletionEnabled<R = boolean>(): R;
    setAllowsCharacterPickerTouchBarItem<R = void, P0 = boolean>(_setAllowsCharacterPickerTouchBarItem: P0): R;
    allowsCharacterPickerTouchBarItem<R = boolean>(): R;
    _invalidateTextColor<R = void>(): R;
    setBezeled<R = void, P0 = boolean>(_setBezeled: P0): R;
    isOpaque<R = boolean>(): R;
    _setToolbarMode<R = void, P0 = boolean>(__setToolbarMode: P0): R;
    _isToolbarMode<R = boolean>(): R;
    accessibilityIsPlaceholderValueAttributeSettable<R = boolean>(): R;
    accessibilityPlaceholderValueAttribute<R = unknown>(): R;
    accessibilitySizeOfChild<R = unknown, P0 = unknown>(_accessibilitySizeOfChild: P0): R;
    accessibilityPositionOfChild<R = unknown, P0 = unknown>(_accessibilityPositionOfChild: P0): R;
    _accessibilityBoundsOfChild<R = CGRect, P0 = unknown>(__accessibilityBoundsOfChild: P0): R;
    accessibilitySetFocus_forChild<R = void, P0 = unknown, P1 = unknown>(_accessibilitySetFocus: P0, _forChild: P1): R;
    accessibilityIsChildFocusable<R = boolean, P0 = unknown>(_accessibilityIsChildFocusable: P0): R;
    accessibilityHelpStringForChild<R = unknown, P0 = unknown>(_accessibilityHelpStringForChild: P0): R;
    accessibilityIsChildrenAttributeSettable<R = boolean>(): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    accessibilityChildrenInNavigationOrderAttribute<R = unknown>(): R;
    accessibilityAttachmentAtIndex<R = unknown, P0 = number>(_accessibilityAttachmentAtIndex: P0): R;
    accessibilityElementForAttachment<R = unknown, P0 = unknown>(_accessibilityElementForAttachment: P0): R;
    accessibilityParameterizedAttributeNames<R = unknown>(): R;
    allowedInputSourceLocales<R = NSArray>(): R;
    setAllowedInputSourceLocales<R = void, P0 = NSArray>(_v: P0): R;
    placeholderAttributedString<R = NSAttributedString>(): R;
    setPlaceholderAttributedString<R = void, P0 = NSAttributedString>(_v: P0): R;
    placeholderString<R = NSString>(): R;
    setPlaceholderString<R = void, P0 = NSString>(_v: P0): R;
    bezelStyle<R = number>(): R;
    setBezelStyle<R = void, P0 = number>(_v: P0): R;
    textColor<R = NSColor>(): R;
    setTextColor<R = void, P0 = NSColor>(_v: P0): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
    drawsBackground<R = boolean>(): R;
    setDrawsBackground<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSTextFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSActionCell {
      alloc<R = NSTextFieldCell>(): R;
      new: <R = NSTextFieldCell>() => R;
    }
  }
}

declare const NSTextFieldCell: cocoa.NSTextFieldCell.CLASS;
