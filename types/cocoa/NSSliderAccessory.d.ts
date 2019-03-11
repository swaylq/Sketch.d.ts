/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderAccessory<T = any> extends cocoa.NSObject, cocoa.NSCodingProtocol, cocoa.NSAccessibilityProtocol, cocoa.NSAccessibilityElementProtocol {
    setAccessibilityContentSiblingBelow<R = void, P0 = unknown>(_setAccessibilityContentSiblingBelow: P0): R;
    accessibilityContentSiblingBelow<R = unknown>(): R;
    setAccessibilityContentSiblingAbove<R = void, P0 = unknown>(_setAccessibilityContentSiblingAbove: P0): R;
    accessibilityContentSiblingAbove<R = unknown>(): R;
    setNextContentSibling<R = void, P0 = unknown>(_setNextContentSibling: P0): R;
    accessibilityNextContentSibling<R = unknown>(): R;
    setPreviousContentSibling<R = void, P0 = unknown>(_setPreviousContentSibling: P0): R;
    accessibilityPreviousContentSibling<R = unknown>(): R;
    setAccessibilityFrameInParentSpace<R = void, P0 = cocoa.CGRect>(_setAccessibilityFrameInParentSpace: P0): R;
    accessibilityFrameInParentSpace<R = cocoa.CGRect>(): R;
    setAccessibilityHeaderGroup<R = void, P0 = unknown>(_setAccessibilityHeaderGroup: P0): R;
    accessibilityHeaderGroup<R = unknown>(): R;
    setAccessibilitySections<R = void, P0 = unknown>(_setAccessibilitySections: P0): R;
    accessibilitySections<R = unknown>(): R;
    setAccessibilityMimicNativeView<R = void, P0 = boolean>(_setAccessibilityMimicNativeView: P0): R;
    isAccessibilityMimicNativeView<R = boolean>(): R;
    setAccessibilityFunctionRowTopLevelElements<R = void, P0 = unknown>(_setAccessibilityFunctionRowTopLevelElements: P0): R;
    accessibilityFunctionRowTopLevelElements<R = unknown>(): R;
    setAccessibilityEnhancedUserInterface<R = void, P0 = boolean>(_setAccessibilityEnhancedUserInterface: P0): R;
    isAccessibilityEnhancedUserInterface<R = boolean>(): R;
    _accessibilityLabel<R = unknown>(): R;
    setAccessibilityCustomChoosers<R = void, P0 = unknown>(_setAccessibilityCustomChoosers: P0): R;
    accessibilityCustomChoosers<R = unknown>(): R;
    setAccessibilityAuditIssues<R = void, P0 = unknown>(_setAccessibilityAuditIssues: P0): R;
    accessibilityAuditIssues<R = unknown>(): R;
    accessibilityResultsForSearchPredicate<R = unknown, P0 = unknown>(_accessibilityResultsForSearchPredicate: P0): R;
    dealloc<R = void>(): R;
    initWithImage<R = unknown, P0 = unknown>(_initWithImage: P0): R;
    container<R = cocoa.NSSliderAccessoryContainer>(): R;
    setContainer<R = void, P0 = cocoa.NSSliderAccessoryContainer>(_v: P0): R;
    behavior<R = cocoa.NSSliderAccessoryBehavior>(): R;
    setBehavior<R = void, P0 = cocoa.NSSliderAccessoryBehavior>(_v: P0): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    accessibilityZoomButton<R = unknown>(): R;
    setAccessibilityZoomButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityWindows<R = cocoa.NSArray>(): R;
    setAccessibilityWindows<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityWindow<R = unknown>(): R;
    setAccessibilityWindow<R = void, P0 = unknown>(_v: P0): R;
    accessibilityWarningValue<R = unknown>(): R;
    setAccessibilityWarningValue<R = void, P0 = unknown>(_v: P0): R;
    accessibilityVisibleRows<R = cocoa.NSArray>(): R;
    setAccessibilityVisibleRows<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityVisibleColumns<R = cocoa.NSArray>(): R;
    setAccessibilityVisibleColumns<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityVisibleChildren<R = cocoa.NSArray>(): R;
    setAccessibilityVisibleChildren<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityVisibleCharacterRange<R = cocoa._NSRange>(): R;
    setAccessibilityVisibleCharacterRange<R = void, P0 = cocoa._NSRange>(_v: P0): R;
    accessibilityVisibleCells<R = cocoa.NSArray>(): R;
    setAccessibilityVisibleCells<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityVerticalUnits<R = number>(): R;
    setAccessibilityVerticalUnits<R = void, P0 = number>(_v: P0): R;
    accessibilityVerticalUnitDescription<R = cocoa.NSString>(): R;
    setAccessibilityVerticalUnitDescription<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityVerticalScrollBar<R = unknown>(): R;
    setAccessibilityVerticalScrollBar<R = void, P0 = unknown>(_v: P0): R;
    accessibilityValueDescription<R = cocoa.NSString>(): R;
    setAccessibilityValueDescription<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityValue<R = unknown>(): R;
    setAccessibilityValue<R = void, P0 = unknown>(_v: P0): R;
    accessibilityUnits<R = number>(): R;
    setAccessibilityUnits<R = void, P0 = number>(_v: P0): R;
    accessibilityUnitDescription<R = cocoa.NSString>(): R;
    setAccessibilityUnitDescription<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityURL<R = cocoa.NSURL>(): R;
    setAccessibilityURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    accessibilityTopLevelUIElement<R = unknown>(): R;
    setAccessibilityTopLevelUIElement<R = void, P0 = unknown>(_v: P0): R;
    accessibilityToolbarButton<R = unknown>(): R;
    setAccessibilityToolbarButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityTitleUIElement<R = unknown>(): R;
    setAccessibilityTitleUIElement<R = void, P0 = unknown>(_v: P0): R;
    accessibilityTitle<R = cocoa.NSString>(): R;
    setAccessibilityTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityTabs<R = cocoa.NSArray>(): R;
    setAccessibilityTabs<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilitySubrole<R = cocoa.NSString>(): R;
    setAccessibilitySubrole<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilitySplitters<R = cocoa.NSArray>(): R;
    setAccessibilitySplitters<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilitySortDirection<R = number>(): R;
    setAccessibilitySortDirection<R = void, P0 = number>(_v: P0): R;
    accessibilityFrame<R = cocoa.CGRect>(): R;
    setAccessibilityFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    accessibilityShownMenu<R = unknown>(): R;
    setAccessibilityShownMenu<R = void, P0 = unknown>(_v: P0): R;
    accessibilitySharedTextUIElements<R = cocoa.NSArray>(): R;
    setAccessibilitySharedTextUIElements<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilitySharedFocusElements<R = cocoa.NSArray>(): R;
    setAccessibilitySharedFocusElements<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilitySharedCharacterRange<R = cocoa._NSRange>(): R;
    setAccessibilitySharedCharacterRange<R = void, P0 = cocoa._NSRange>(_v: P0): R;
    accessibilityServesAsTitleForUIElements<R = cocoa.NSArray>(): R;
    setAccessibilityServesAsTitleForUIElements<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilitySelectedTextRanges<R = cocoa.NSArray>(): R;
    setAccessibilitySelectedTextRanges<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilitySelectedTextRange<R = cocoa._NSRange>(): R;
    setAccessibilitySelectedTextRange<R = void, P0 = cocoa._NSRange>(_v: P0): R;
    accessibilitySelectedText<R = cocoa.NSString>(): R;
    setAccessibilitySelectedText<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilitySelectedRows<R = cocoa.NSArray>(): R;
    setAccessibilitySelectedRows<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilitySelectedColumns<R = cocoa.NSArray>(): R;
    setAccessibilitySelectedColumns<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilitySelectedChildren<R = cocoa.NSArray>(): R;
    setAccessibilitySelectedChildren<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilitySelectedCells<R = cocoa.NSArray>(): R;
    setAccessibilitySelectedCells<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilitySelected<R = boolean>(): R;
    setAccessibilitySelected<R = void, P0 = boolean>(_v: P0): R;
    accessibilitySearchMenu<R = unknown>(): R;
    setAccessibilitySearchMenu<R = void, P0 = unknown>(_v: P0): R;
    accessibilitySearchButton<R = unknown>(): R;
    setAccessibilitySearchButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityRows<R = cocoa.NSArray>(): R;
    setAccessibilityRows<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityRowIndexRange<R = cocoa._NSRange>(): R;
    setAccessibilityRowIndexRange<R = void, P0 = cocoa._NSRange>(_v: P0): R;
    accessibilityRowHeaderUIElements<R = cocoa.NSArray>(): R;
    setAccessibilityRowHeaderUIElements<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityRowCount<R = number>(): R;
    setAccessibilityRowCount<R = void, P0 = number>(_v: P0): R;
    accessibilityRoleDescription<R = cocoa.NSString>(): R;
    setAccessibilityRoleDescription<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityRole<R = cocoa.NSString>(): R;
    setAccessibilityRole<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityRequired<R = boolean>(): R;
    setAccessibilityRequired<R = void, P0 = boolean>(_v: P0): R;
    accessibilityProxy<R = unknown>(): R;
    setAccessibilityProxy<R = void, P0 = unknown>(_v: P0): R;
    accessibilityPreviousContents<R = cocoa.NSArray>(): R;
    setAccessibilityPreviousContents<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityPlaceholderValue<R = cocoa.NSString>(): R;
    setAccessibilityPlaceholderValue<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityParent<R = unknown>(): R;
    setAccessibilityParent<R = void, P0 = unknown>(_v: P0): R;
    accessibilityOverflowButton<R = unknown>(): R;
    setAccessibilityOverflowButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityOrientation<R = number>(): R;
    setAccessibilityOrientation<R = void, P0 = number>(_v: P0): R;
    accessibilityOrderedByRow<R = boolean>(): R;
    setAccessibilityOrderedByRow<R = void, P0 = boolean>(_v: P0): R;
    accessibilityNumberOfCharacters<R = number>(): R;
    setAccessibilityNumberOfCharacters<R = void, P0 = number>(_v: P0): R;
    accessibilityNextContents<R = cocoa.NSArray>(): R;
    setAccessibilityNextContents<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityModal<R = boolean>(): R;
    setAccessibilityModal<R = void, P0 = boolean>(_v: P0): R;
    accessibilityMinimized<R = boolean>(): R;
    setAccessibilityMinimized<R = void, P0 = boolean>(_v: P0): R;
    accessibilityMinimizeButton<R = unknown>(): R;
    setAccessibilityMinimizeButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMinValue<R = unknown>(): R;
    setAccessibilityMinValue<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMenuBar<R = unknown>(): R;
    setAccessibilityMenuBar<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMaxValue<R = unknown>(): R;
    setAccessibilityMaxValue<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMarkerValues<R = unknown>(): R;
    setAccessibilityMarkerValues<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMarkerUIElements<R = cocoa.NSArray>(): R;
    setAccessibilityMarkerUIElements<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityMarkerTypeDescription<R = cocoa.NSString>(): R;
    setAccessibilityMarkerTypeDescription<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityRulerMarkerType<R = number>(): R;
    setAccessibilityRulerMarkerType<R = void, P0 = number>(_v: P0): R;
    accessibilityMarkerGroupUIElement<R = unknown>(): R;
    setAccessibilityMarkerGroupUIElement<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMainWindow<R = unknown>(): R;
    setAccessibilityMainWindow<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMain<R = boolean>(): R;
    setAccessibilityMain<R = void, P0 = boolean>(_v: P0): R;
    accessibilityLinkedUIElements<R = cocoa.NSArray>(): R;
    setAccessibilityLinkedUIElements<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityLabelValue<R = number>(): R;
    setAccessibilityLabelValue<R = void, P0 = number>(_v: P0): R;
    accessibilityLabelUIElements<R = cocoa.NSArray>(): R;
    setAccessibilityLabelUIElements<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityInsertionPointLineNumber<R = number>(): R;
    setAccessibilityInsertionPointLineNumber<R = void, P0 = number>(_v: P0): R;
    accessibilityIndex<R = number>(): R;
    setAccessibilityIndex<R = void, P0 = number>(_v: P0): R;
    accessibilityIncrementButton<R = unknown>(): R;
    setAccessibilityIncrementButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityIdentifier<R = cocoa.NSString>(): R;
    setAccessibilityIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityHorizontalUnits<R = number>(): R;
    setAccessibilityHorizontalUnits<R = void, P0 = number>(_v: P0): R;
    accessibilityHorizontalUnitDescription<R = cocoa.NSString>(): R;
    setAccessibilityHorizontalUnitDescription<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityHorizontalScrollBar<R = unknown>(): R;
    setAccessibilityHorizontalScrollBar<R = void, P0 = unknown>(_v: P0): R;
    accessibilityHidden<R = boolean>(): R;
    setAccessibilityHidden<R = void, P0 = boolean>(_v: P0): R;
    accessibilityHelp<R = cocoa.NSString>(): R;
    setAccessibilityHelp<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityHeader<R = unknown>(): R;
    setAccessibilityHeader<R = void, P0 = unknown>(_v: P0): R;
    accessibilityHandles<R = cocoa.NSArray>(): R;
    setAccessibilityHandles<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityGrowArea<R = unknown>(): R;
    setAccessibilityGrowArea<R = void, P0 = unknown>(_v: P0): R;
    accessibilityFullScreenButton<R = unknown>(): R;
    setAccessibilityFullScreenButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityFrontmost<R = boolean>(): R;
    setAccessibilityFrontmost<R = void, P0 = boolean>(_v: P0): R;
    accessibilityFocusedWindow<R = unknown>(): R;
    setAccessibilityFocusedWindow<R = void, P0 = unknown>(_v: P0): R;
    accessibilityApplicationFocusedUIElement<R = unknown>(): R;
    setAccessibilityApplicationFocusedUIElement<R = void, P0 = unknown>(_v: P0): R;
    accessibilityFocused<R = boolean>(): R;
    setAccessibilityFocused<R = void, P0 = boolean>(_v: P0): R;
    accessibilityFilename<R = cocoa.NSString>(): R;
    setAccessibilityFilename<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityExtrasMenuBar<R = unknown>(): R;
    setAccessibilityExtrasMenuBar<R = void, P0 = unknown>(_v: P0): R;
    accessibilityExpanded<R = boolean>(): R;
    setAccessibilityExpanded<R = void, P0 = boolean>(_v: P0): R;
    accessibilityEnabled<R = boolean>(): R;
    setAccessibilityEnabled<R = void, P0 = boolean>(_v: P0): R;
    accessibilityEdited<R = boolean>(): R;
    setAccessibilityEdited<R = void, P0 = boolean>(_v: P0): R;
    accessibilityDocument<R = cocoa.NSString>(): R;
    setAccessibilityDocument<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityDisclosureLevel<R = number>(): R;
    setAccessibilityDisclosureLevel<R = void, P0 = number>(_v: P0): R;
    accessibilityDisclosed<R = boolean>(): R;
    setAccessibilityDisclosed<R = void, P0 = boolean>(_v: P0): R;
    accessibilityDisclosedRows<R = unknown>(): R;
    setAccessibilityDisclosedRows<R = void, P0 = unknown>(_v: P0): R;
    accessibilityDisclosedByRow<R = unknown>(): R;
    setAccessibilityDisclosedByRow<R = void, P0 = unknown>(_v: P0): R;
    accessibilityLabel<R = cocoa.NSString>(): R;
    setAccessibilityLabel<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityDefaultButton<R = unknown>(): R;
    setAccessibilityDefaultButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityDecrementButton<R = unknown>(): R;
    setAccessibilityDecrementButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityCustomRotors<R = cocoa.NSArray>(): R;
    setAccessibilityCustomRotors<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityCustomActions<R = cocoa.NSArray>(): R;
    setAccessibilityCustomActions<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityCriticalValue<R = unknown>(): R;
    setAccessibilityCriticalValue<R = void, P0 = unknown>(_v: P0): R;
    accessibilityContents<R = cocoa.NSArray>(): R;
    setAccessibilityContents<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityProtectedContent<R = boolean>(): R;
    setAccessibilityProtectedContent<R = void, P0 = boolean>(_v: P0): R;
    accessibilityColumns<R = cocoa.NSArray>(): R;
    setAccessibilityColumns<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityColumnTitles<R = cocoa.NSArray>(): R;
    setAccessibilityColumnTitles<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityColumnIndexRange<R = cocoa._NSRange>(): R;
    setAccessibilityColumnIndexRange<R = void, P0 = cocoa._NSRange>(_v: P0): R;
    accessibilityColumnHeaderUIElements<R = cocoa.NSArray>(): R;
    setAccessibilityColumnHeaderUIElements<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityColumnCount<R = number>(): R;
    setAccessibilityColumnCount<R = void, P0 = number>(_v: P0): R;
    accessibilityCloseButton<R = unknown>(): R;
    setAccessibilityCloseButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityClearButton<R = unknown>(): R;
    setAccessibilityClearButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityChildrenInNavigationOrder<R = cocoa.NSArray>(): R;
    setAccessibilityChildrenInNavigationOrder<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityChildren<R = cocoa.NSArray>(): R;
    setAccessibilityChildren<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityCancelButton<R = unknown>(): R;
    setAccessibilityCancelButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityAlternateUIVisible<R = boolean>(): R;
    setAccessibilityAlternateUIVisible<R = void, P0 = boolean>(_v: P0): R;
    accessibilityAllowedValues<R = cocoa.NSArray>(): R;
    setAccessibilityAllowedValues<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityActivationPoint<R = cocoa.CGPoint>(): R;
    setAccessibilityActivationPoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    accessibilityElement<R = boolean>(): R;
    setAccessibilityElement<R = void, P0 = boolean>(_v: P0): R;
    enclosingSlider<R = cocoa.NSSlider>(): R;
    setEnclosingSlider<R = void, P0 = cocoa.NSSlider>(_v: P0): R;
    repeatsOnLongPress<R = boolean>(): R;
    _image<R = cocoa.NSImage>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSSliderAccessory<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCodingProtocol, cocoa.classes.NSAccessibilityProtocol, cocoa.classes.NSAccessibilityElementProtocol {
      alloc<R = NSSliderAccessory>(): R;
      new: <R = NSSliderAccessory>() => R;
      accessoryWithImage<R = unknown, P0 = unknown>(_accessoryWithImage: P0): R;
      keyPathsForValuesAffectingRepeatsOnLongPress<R = unknown>(): R;
    }
  }
}

declare const NSSliderAccessory: cocoa.classes.NSSliderAccessory;
