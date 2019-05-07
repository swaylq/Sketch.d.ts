/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceColorSheetController<T0 = void, T1 = void, T2 = void> extends CHSheetController, NSWindowDelegateProtocol, NSMenuDelegateProtocol, MSColorInspectorDelegateProtocol {
    disableUI<R = void>(): R;
    validateUI<R = void>(): R;
    validateReplaceButton<R = void>(): R;
    pickReplacementColor<R = void, P0 = unknown>(_pickReplacementColor: P0): R;
    dismissReplacementColorPopover<R = boolean>(): R;
    validateReplacementColorButton<R = void>(): R;
    setOriginalColor<R = void, P0 = unknown>(_setOriginalColor: P0): R;
    commitOriginalColor<R = void, P0 = unknown>(_commitOriginalColor: P0): R;
    pickOriginalColor<R = void, P0 = unknown>(_pickOriginalColor: P0): R;
    validateOriginalColorButton<R = void>(): R;
    refreshOriginalColorButtonFromSelection<R = void>(): R;
    updateFrequentColorsMenu<R = void>(): R;
    toggleIgnoreAlpha<R = void, P0 = unknown>(_toggleIgnoreAlpha: P0): R;
    currentDocument<R = unknown>(): R;
    windowDidLoad<R = void>(): R;
    popover<R = BCPopover>(): R;
    setPopover<R = void, P0 = BCPopover>(_v: P0): R;
    frequentColorsMenu<R = NSMenu>(): R;
    setFrequentColorsMenu<R = void, P0 = NSMenu>(_v: P0): R;
    replaceButton<R = NSButton>(): R;
    setReplaceButton<R = void, P0 = NSButton>(_v: P0): R;
    replacementColorPopoverDismissingView<R = MSPopoverDismisserView>(): R;
    setReplacementColorPopoverDismissingView<R = void, P0 = MSPopoverDismisserView>(_v: P0): R;
    keepAlphaOfOriginalColorButton<R = NSButton>(): R;
    setKeepAlphaOfOriginalColorButton<R = void, P0 = NSButton>(_v: P0): R;
    replacementColorButton<R = MSStylePartPreviewButton>(): R;
    setReplacementColorButton<R = void, P0 = MSStylePartPreviewButton>(_v: P0): R;
    originalColorButton<R = MSStylePartPreviewButton>(): R;
    setOriginalColorButton<R = void, P0 = MSStylePartPreviewButton>(_v: P0): R;
    ignoreAlphaWhenMatchingOriginalColorButton<R = NSButton>(): R;
    setIgnoreAlphaWhenMatchingOriginalColorButton<R = void, P0 = NSButton>(_v: P0): R;
    cancelButton<R = NSButton>(): R;
    setCancelButton<R = void, P0 = NSButton>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSReplaceColorSheetController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CHSheetController, NSWindowDelegateProtocol, NSMenuDelegateProtocol, MSColorInspectorDelegateProtocol {
      alloc<R = MSReplaceColorSheetController>(): R;
      new: <R = MSReplaceColorSheetController>() => R;
    }
  }
}

declare const MSReplaceColorSheetController: cocoa.MSReplaceColorSheetController.CLASS;
