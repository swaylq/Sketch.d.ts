/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextLayerEventHandler<T0 = void, T1 = void, T2 = void> extends MSEventHandler, NSLayoutManagerDelegateProtocol, NSTextViewDelegateProtocol, NSTextStorageDelegateProtocol, NSWindowDelegateProtocol, MSTextLayerEditingDelegateProtocol, MSTextLayerTextViewDelegateProtocol, MSFirstLineTypesetterDelegateProtocol {
    selectionTouchBar<R = unknown>(): R;
    shouldExitOnContentViewResize<R = boolean>(): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    doTextModification<R = void, P0 = CDUnknownBlockType>(_doTextModification: P0): R;
    setListType<R = void, P0 = unknown>(_setListType: P0): R;
    applyTextColor<R = unknown, P0 = unknown>(_applyTextColor: P0): R;
    colorMagnifierAction<R = void, P0 = unknown>(_colorMagnifierAction: P0): R;
    removeTextTransform<R = void, P0 = unknown>(_removeTextTransform: P0): R;
    makeLowercase<R = void, P0 = unknown>(_makeLowercase: P0): R;
    makeUppercase<R = void, P0 = unknown>(_makeUppercase: P0): R;
    applyTextTransform<R = void, P0 = unknown>(_applyTextTransform: P0): R;
    removeTextView<R = void>(): R;
    handlesHistoryCoalescing<R = boolean>(): R;
    windowFrameForDrawView<R = CGRect>(): R;
    scheduleUpdateInsertionPointColorTimer<R = void>(): R;
    firstBaselineOffset<R = unknown>(): R;
    textDidChange<R = void, P0 = unknown>(_textDidChange: P0): R;
    dispatchTryPutFirstFocusBack<R = void>(): R;
    tryPutFirstFocusBack<R = void>(): R;
    insertionPointColor<R = unknown>(): R;
    newTextLayerImageFromWindowBackingStore<R = CGImage>(): R;
    beginEditing<R = void>(): R;
    updateTextViewStyling<R = void>(): R;
    frameForTextViewOnCanvasBasedOnBaseFrame<R = CGRect, P0 = CGRect>(_frameForTextViewOnCanvasBasedOnBaseFrame: P0): R;
    frameForTextView<R = CGRect>(): R;
    makeTextWindow<R = void>(): R;
    makeTextView<R = void>(): R;
    addTextView<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    setupTextLayer<R = void>(): R;
    firstBaselineOffsetBeforeEditing<R = NSNumber>(): R;
    setFirstBaselineOffsetBeforeEditing<R = void, P0 = NSNumber>(_v: P0): R;
    updateInsertionPointColorTimer<R = NSTimer>(): R;
    setUpdateInsertionPointColorTimer<R = void, P0 = NSTimer>(_v: P0): R;
    textStorage<R = NSTextStorage>(): R;
    setTextStorage<R = void, P0 = NSTextStorage>(_v: P0): R;
    textLayer<R = MSTextLayer>(): R;
    setTextLayer<R = void, P0 = MSTextLayer>(_v: P0): R;
    textViewWindow<R = MSTextWindow>(): R;
    setTextViewWindow<R = void, P0 = MSTextWindow>(_v: P0): R;
    textView<R = MSTextLayerTextView>(): R;
    setTextView<R = void, P0 = MSTextLayerTextView>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSTextLayerEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSEventHandler, NSLayoutManagerDelegateProtocol, NSTextViewDelegateProtocol, NSTextStorageDelegateProtocol, NSWindowDelegateProtocol, MSTextLayerEditingDelegateProtocol, MSTextLayerTextViewDelegateProtocol, MSFirstLineTypesetterDelegateProtocol {
      alloc<R = MSTextLayerEventHandler>(): R;
      new: <R = MSTextLayerEventHandler>() => R;
    }
  }
}

declare const MSTextLayerEventHandler: cocoa.MSTextLayerEventHandler.CLASS;
