/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBridgedTextSubstitutionController<T0 = void, T1 = void, T2 = void> extends NSObject, NSTextViewDelegateProtocol, NSTextStorageDelegateProtocol {
    convertToHalfWidth<R = void, P0 = unknown>(_convertToHalfWidth: P0): R;
    convertToFullWidth<R = void, P0 = unknown>(_convertToFullWidth: P0): R;
    convertToTraditionalChinese<R = void, P0 = unknown>(_convertToTraditionalChinese: P0): R;
    convertToSimplifiedChinese<R = void, P0 = unknown>(_convertToSimplifiedChinese: P0): R;
    capitalizeWord<R = void, P0 = unknown>(_capitalizeWord: P0): R;
    lowercaseWord<R = void, P0 = unknown>(_lowercaseWord: P0): R;
    uppercaseWord<R = void, P0 = unknown>(_uppercaseWord: P0): R;
    checkTextInDocument<R = void, P0 = unknown>(_checkTextInDocument: P0): R;
    checkTextInSelection<R = void, P0 = unknown>(_checkTextInSelection: P0): R;
    replaceTextInSelection<R = void, P0 = unknown>(_replaceTextInSelection: P0): R;
    addLinksInSelection<R = void, P0 = unknown>(_addLinksInSelection: P0): R;
    replaceDashesInSelection<R = void, P0 = unknown>(_replaceDashesInSelection: P0): R;
    replaceQuotesInSelection<R = void, P0 = unknown>(_replaceQuotesInSelection: P0): R;
    orderFrontSubstitutionsPanel<R = void, P0 = unknown>(_orderFrontSubstitutionsPanel: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    prepareContextMenu<R = void, P0 = unknown>(_prepareContextMenu: P0): R;
    _mainSmartInsertDeleteMenuItem<R = unknown>(): R;
    _findSmartInsertDeleteMenuItemInMenu<R = unknown, P0 = unknown>(__findSmartInsertDeleteMenuItemInMenu: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _prepareForTextInputStates<R = void>(): R;
    _resetToDefaults<R = void>(): R;
    toggleAutomaticTextReplacement<R = void, P0 = unknown>(_toggleAutomaticTextReplacement: P0): R;
    toggleAutomaticDashSubstitution<R = void, P0 = unknown>(_toggleAutomaticDashSubstitution: P0): R;
    toggleAutomaticLinkDetection<R = void, P0 = unknown>(_toggleAutomaticLinkDetection: P0): R;
    toggleAutomaticQuoteSubstitution<R = void, P0 = unknown>(_toggleAutomaticQuoteSubstitution: P0): R;
    dealloc<R = void>(): R;
    initWithTextInputContext<R = unknown, P0 = unknown>(_initWithTextInputContext: P0): R;
    contentsValid<R = boolean>(): R;
    setContentsValid<R = void, P0 = boolean>(_v: P0): R;
    automaticTextReplacementEnabled<R = boolean>(): R;
    setAutomaticTextReplacementEnabled<R = void, P0 = boolean>(_v: P0): R;
    automaticDashSubstitutionEnabled<R = boolean>(): R;
    setAutomaticDashSubstitutionEnabled<R = void, P0 = boolean>(_v: P0): R;
    automaticLinkDetectionEnabled<R = boolean>(): R;
    setAutomaticLinkDetectionEnabled<R = void, P0 = boolean>(_v: P0): R;
    automaticQuoteSubstitutionEnabled<R = boolean>(): R;
    setAutomaticQuoteSubstitutionEnabled<R = void, P0 = boolean>(_v: P0): R;
    enabledTextCheckingTypes<R = number>(): R;
    setEnabledTextCheckingTypes<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSBridgedTextSubstitutionController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSTextViewDelegateProtocol, NSTextStorageDelegateProtocol {
      alloc<R = NSBridgedTextSubstitutionController>(): R;
      new: <R = NSBridgedTextSubstitutionController>() => R;
      keyPathsForValuesAffectingEnabledTextCheckingTypes<R = unknown>(): R;
    }
  }
}

declare const NSBridgedTextSubstitutionController: cocoa.NSBridgedTextSubstitutionController.CLASS;
