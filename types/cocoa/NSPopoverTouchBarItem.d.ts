/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPopoverTouchBarItem<T = any> extends cocoa.NSTouchBarItem, cocoa.NSGestureRecognizerDelegateProtocol, cocoa.NSTouchBarItemTypePopoverProtocol {
    fingerBias<R = number>(): R;
    setCollapsedRepresentationChevronBehavior<R = void, P0 = number>(_setCollapsedRepresentationChevronBehavior: P0): R;
    collapsedRepresentationChevronBehavior<R = number>(): R;
    makeStandardSwipeGestureRecognizers<R = unknown>(): R;
    makeStandardSliderPanGestureRecognizer<R = unknown>(): R;
    makeStandardActivatePopoverGestureRecognizer<R = unknown>(): R;
    view<R = unknown>(): R;
    setShowsControlStripForOverlay<R = void, P0 = boolean>(_setShowsControlStripForOverlay: P0): R;
    showsControlStripForOverlay<R = boolean>(): R;
    _gestureRecognizer_shouldReceiveTouch<R = boolean, P0 = unknown, P1 = unknown>(__gestureRecognizer: P0, _shouldReceiveTouch: P1): R;
    _popoverSlide<R = void, P0 = unknown>(__popoverSlide: P0): R;
    _swipeRightToLeft<R = void, P0 = unknown>(__swipeRightToLeft: P0): R;
    _swipeLeftToRight<R = void, P0 = unknown>(__swipeLeftToRight: P0): R;
    _handleSwipe<R = void, P0 = boolean>(__handleSwipe: P0): R;
    _primarySliderTouchBarItem<R = unknown>(): R;
    _showPressHoldPopup<R = void, P0 = unknown>(__showPressHoldPopup: P0): R;
    setCollapsedRepresentationShowsChevron<R = void, P0 = boolean>(_setCollapsedRepresentationShowsChevron: P0): R;
    collapsedRepresentationShowsChevron<R = boolean>(): R;
    setSupportsPressAndHold<R = void, P0 = boolean>(_setSupportsPressAndHold: P0): R;
    supportsPressAndHold<R = boolean>(): R;
    isPresented<R = boolean>(): R;
    showsCloseButton<R = boolean>(): R;
    setShowsCloseButton<R = void, P0 = boolean>(_v: P0): R;
    customizationLabel<R = cocoa.NSString>(): R;
    setCustomizationLabel<R = void, P0 = cocoa.NSString>(_v: P0): R;
    pressAndHoldTouchBar<R = cocoa.NSTouchBar>(): R;
    setPressAndHoldTouchBar<R = void, P0 = cocoa.NSTouchBar>(_v: P0): R;
    popoverTouchBar<R = cocoa.NSTouchBar>(): R;
    setPopoverTouchBar<R = void, P0 = cocoa.NSTouchBar>(_v: P0): R;
    collapsedRepresentationLabel<R = cocoa.NSString>(): R;
    setCollapsedRepresentationLabel<R = void, P0 = cocoa.NSString>(_v: P0): R;
    collapsedRepresentationImage<R = cocoa.NSImage>(): R;
    setCollapsedRepresentationImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    collapsedRepresentation<R = cocoa.NSView>(): R;
    setCollapsedRepresentation<R = void, P0 = cocoa.NSView>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSPopoverTouchBarItem<T = any> extends cocoa.classes.NSTouchBarItem, cocoa.classes.NSGestureRecognizerDelegateProtocol, cocoa.classes.NSTouchBarItemTypePopoverProtocol {
      alloc<R = NSPopoverTouchBarItem>(): R;
      new: <R = NSPopoverTouchBarItem>() => R;
      keyPathsForValuesAffectingPresented<R = unknown>(): R;
    }
  }
}

declare const NSPopoverTouchBarItem: cocoa.classes.NSPopoverTouchBarItem;
