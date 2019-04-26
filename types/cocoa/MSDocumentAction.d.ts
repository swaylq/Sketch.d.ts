/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentAction<T0 = void, T1 = void, T2 = void> extends MSAction, NSMenuDelegateProtocol, NSTouchBarDelegateProtocol {
    refreshOverlay<R = void>(): R;
    contentDrawView<R = unknown>(): R;
    currentPage<R = unknown>(): R;
    switchToNormalHandler<R = void>(): R;
    setCurrentHandlerClass<R = unknown, P0 = unknown>(_setCurrentHandlerClass: P0): R;
    toggleHandlerClass<R = unknown, P0 = unknown>(_toggleHandlerClass: P0): R;
    currentHandler<R = unknown>(): R;
    isInNormalHandler<R = boolean>(): R;
    selectedLayers<R = unknown>(): R;
    initWithDocument<R = unknown, P0 = unknown>(_initWithDocument: P0): R;
    menu<R = unknown>(): R;
    repopulateMenu<R = void, P0 = unknown>(_repopulateMenu: P0): R;
    touchBarItemSizing<R = number>(): R;
    touchBarImage<R = unknown>(): R;
    isTouchBarItemSelected<R = boolean>(): R;
    shouldUseImageForTouchBarItem<R = boolean>(): R;
    showTouchBarPopover<R = void, P0 = unknown>(_showTouchBarPopover: P0): R;
    makeTouchBarItem<R = unknown>(): R;
    touchBarItemButtonShouldShowState<R = boolean>(): R;
    makeTouchBarItemButton<R = unknown>(): R;
    refreshTouchBarItem<R = void>(): R;
    touchBarItem<R = unknown>(): R;
    previousEvent<R = NSEvent>(): R;
    setPreviousEvent<R = void, P0 = NSEvent>(_v: P0): R;
    cachedTouchedBarItem<R = NSTouchBarItem>(): R;
    setCachedTouchedBarItem<R = void, P0 = NSTouchBarItem>(_v: P0): R;
    document<R = MSDocument>(): R;
    setDocument<R = void, P0 = MSDocument>(_v: P0): R;
    historyMomentTitle<R = NSString>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSDocumentAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAction, NSMenuDelegateProtocol, NSTouchBarDelegateProtocol {
      alloc<R = MSDocumentAction>(): R;
      new: <R = MSDocumentAction>() => R;
    }
  }
}

declare const MSDocumentAction: cocoa.MSDocumentAction.CLASS;
