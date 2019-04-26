/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextLayerItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem, NSMenuDelegateProtocol, MSColorInspectorDelegateProtocol, NSComboBoxDataSourceProtocol, MSStylePartPreviewButtonDelegateProtocol {
    applyTextColor<R = void, P0 = unknown>(_applyTextColor: P0): R;
    occurencesOfAttributeWithName<R = unknown, P0 = unknown>(_occurencesOfAttributeWithName: P0): R;
    firstOccurrenceOfAttributeWithName<R = unknown, P0 = unknown>(_firstOccurrenceOfAttributeWithName: P0): R;
    updateKerningForFontChangeTo_string_range_effectiveRange_oldPointSize<R = void, P0 = unknown, P1 = unknown, P2 = _NSRange, P3 = _NSRange, P4 = number>(_updateKerningForFontChangeTo: P0, _string: P1, _range: P2, _effectiveRange: P3, _oldPointSize: P4): R;
    changeFontPropertiesInBlock<R = void, P0 = CDUnknownBlockType>(_changeFontPropertiesInBlock: P0): R;
    changeFontPropertiesOfTextObjectsInBlock<R = void, P0 = CDUnknownBlockType>(_changeFontPropertiesOfTextObjectsInBlock: P0): R;
    applyFontPropertyChanges<R = void, P0 = unknown>(_applyFontPropertyChanges: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    reloadFontWeightPopUp<R = void>(): R;
    reloadFontFamilyButton<R = void>(): R;
    reloadPointSizesTextField<R = void>(): R;
    hasMultipleColors<R = boolean>(): R;
    firstColor<R = unknown>(): R;
    changeFontFamilyTo<R = void, P0 = unknown>(_changeFontFamilyTo: P0): R;
    changeParagraphStyleInBlock<R = void, P0 = CDUnknownBlockType>(_changeParagraphStyleInBlock: P0): R;
    textEventHandler<R = unknown>(): R;
    textView<R = unknown>(): R;
    verticalAlignmentAction<R = void, P0 = unknown>(_verticalAlignmentAction: P0): R;
    textBehaviourButtonAction<R = void, P0 = unknown>(_textBehaviourButtonAction: P0): R;
    alignmentButtonAction<R = void, P0 = unknown>(_alignmentButtonAction: P0): R;
    contentDrawView<R = unknown>(): R;
    paragraphHeightAction<R = void, P0 = unknown>(_paragraphHeightAction: P0): R;
    lineHeightAction<R = void, P0 = unknown>(_lineHeightAction: P0): R;
    maintainTextLayerBaselinesInBlock<R = void, P0 = CDUnknownBlockType>(_maintainTextLayerBaselinesInBlock: P0): R;
    kerningAction<R = void, P0 = unknown>(_kerningAction: P0): R;
    putFocusOnTextView<R = void>(): R;
    documentColorSpace<R = unknown>(): R;
    canvasColorSpace<R = unknown>(): R;
    changeTextLayerFont<R = void, P0 = unknown>(_changeTextLayerFont: P0): R;
    showColorPickerAction<R = void, P0 = unknown>(_showColorPickerAction: P0): R;
    showParagraphStylingAction<R = void, P0 = unknown>(_showParagraphStylingAction: P0): R;
    fontSizeAction<R = void, P0 = unknown>(_fontSizeAction: P0): R;
    fontWeightAction<R = void, P0 = unknown>(_fontWeightAction: P0): R;
    fontFamilyAction<R = void, P0 = unknown>(_fontFamilyAction: P0): R;
    commitHistory<R = void>(): R;
    closeExistingPopoverOrShowNewOneWithContentClass_sender_viewCreatorBlock<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_closeExistingPopoverOrShowNewOneWithContentClass: P0, _sender: P1, _viewCreatorBlock: P2): R;
    defaultLineHeight<R = number>(): R;
    lineHeight<R = number>(): R;
    reloadLineHeightField<R = void>(): R;
    reloadKerningField<R = void>(): R;
    reloadVerticalAlignmentButton<R = void>(): R;
    reloadData<R = void>(): R;
    storeCurrentFontNamesAndSizes<R = void>(): R;
    fontDescriptorsForSelection<R = unknown>(): R;
    textViewDidChange<R = void, P0 = unknown>(_textViewDidChange: P0): R;
    updateControlFormatterNativeDecimal<R = void, P0 = unknown>(_updateControlFormatterNativeDecimal: P0): R;
    awakeFromNib<R = void>(): R;
    fontPointSizes<R = NSSet>(): R;
    setFontPointSizes<R = void, P0 = NSSet>(_v: P0): R;
    fontFamilyNames<R = NSSet>(): R;
    setFontFamilyNames<R = void, P0 = NSSet>(_v: P0): R;
    fontPostscriptNames<R = NSSet>(): R;
    setFontPostscriptNames<R = void, P0 = NSSet>(_v: P0): R;
    popover<R = BCPopover>(): R;
    setPopover<R = void, P0 = BCPopover>(_v: P0): R;
    sizingLabel<R = NSTextField>(): R;
    setSizingLabel<R = void, P0 = NSTextField>(_v: P0): R;
    verticalAlignmentButton<R = NSSegmentedControl>(): R;
    setVerticalAlignmentButton<R = void, P0 = NSSegmentedControl>(_v: P0): R;
    alignmentButton<R = NSSegmentedControl>(): R;
    setAlignmentButton<R = void, P0 = NSSegmentedControl>(_v: P0): R;
    paragraphHeightField<R = NSTextField>(): R;
    setParagraphHeightField<R = void, P0 = NSTextField>(_v: P0): R;
    lineHeightField<R = MSUpDownTextField>(): R;
    setLineHeightField<R = void, P0 = MSUpDownTextField>(_v: P0): R;
    kerningField<R = NSTextField>(): R;
    setKerningField<R = void, P0 = NSTextField>(_v: P0): R;
    colorPickerButton<R = MSStylePartPreviewButton>(): R;
    setColorPickerButton<R = void, P0 = MSStylePartPreviewButton>(_v: P0): R;
    fontSizeField<R = NSTextField>(): R;
    setFontSizeField<R = void, P0 = NSTextField>(_v: P0): R;
    fontWeightPopUpButton<R = NSPopUpButton>(): R;
    setFontWeightPopUpButton<R = void, P0 = NSPopUpButton>(_v: P0): R;
    fontFamilyButton<R = NSButton>(): R;
    setFontFamilyButton<R = void, P0 = NSButton>(_v: P0): R;
    basicView<R = NSView>(): R;
    setBasicView<R = void, P0 = NSView>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSTextLayerItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem, NSMenuDelegateProtocol, MSColorInspectorDelegateProtocol, NSComboBoxDataSourceProtocol, MSStylePartPreviewButtonDelegateProtocol {
      alloc<R = MSTextLayerItem>(): R;
      new: <R = MSTextLayerItem>() => R;
    }
  }
}

declare const MSTextLayerItem: cocoa.MSTextLayerItem.CLASS;
