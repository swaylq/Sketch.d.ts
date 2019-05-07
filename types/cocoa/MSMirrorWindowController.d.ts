/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMirrorWindowController<T0 = void, T1 = void, T2 = void> extends NSWindowController, MSMirrorWindowControllerContentProtocol, NSWindowDelegateProtocol, WKNavigationDelegateProtocol, WKScriptMessageHandlerProtocol, NSToolbarDelegateProtocol {
    cxx_destruct<R = void>(): R;
    toolbarItemIdentifiers<R = unknown>(): R;
    relayResponderAction_with<R = void, P0 = string, P1 = unknown>(_relayResponderAction: P0, _with: P1): R;
    showContextualMenuWithEvent<R = void, P0 = unknown>(_showContextualMenuWithEvent: P0): R;
    goWithTheFlow<R = void, P0 = unknown>(_goWithTheFlow: P0): R;
    goBack<R = void, P0 = unknown>(_goBack: P0): R;
    toggleFlowHome<R = void, P0 = unknown>(_toggleFlowHome: P0): R;
    openStartpoint<R = void, P0 = unknown>(_openStartpoint: P0): R;
    startpointsMenuShowingArtboardID<R = unknown, P0 = unknown>(_startpointsMenuShowingArtboardID: P0): R;
    startpointsMenu<R = unknown>(): R;
    menuItemForArtboard_shownArtboard<R = unknown, P0 = unknown, P1 = unknown>(_menuItemForArtboard: P0, _shownArtboard: P1): R;
    selectArtboardMenuItem_shownArtboard<R = void, P0 = unknown, P1 = unknown>(_selectArtboardMenuItem: P0, _shownArtboard: P1): R;
    updateBackButtonEnabled<R = void>(): R;
    updateArtboardButtonShowingArtboard<R = void, P0 = unknown>(_updateArtboardButtonShowingArtboard: P0): R;
    updateArtboardButtonShowingArtboardID<R = void, P0 = unknown>(_updateArtboardButtonShowingArtboardID: P0): R;
    currentArtboardDidChangeNotification<R = void, P0 = unknown>(_currentArtboardDidChangeNotification: P0): R;
    documentDidUpdateNotification<R = void, P0 = unknown>(_documentDidUpdateNotification: P0): R;
    documentDidChangeNotification<R = void, P0 = unknown>(_documentDidChangeNotification: P0): R;
    urlRequest<R = unknown>(): R;
    localizeFrontend<R = void>(): R;
    whitelistClientID<R = void>(): R;
    startLoading<R = void>(): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    windowDidLoad<R = void>(): R;
    showWindow<R = void, P0 = unknown>(_showWindow: P0): R;
    loadWindow<R = void>(): R;
    initWithWindowNibName<R = unknown, P0 = unknown>(_initWithWindowNibName: P0): R;
    transitionToArtboardID_animatedBy<R = void, P0 = unknown, P1 = number>(_transitionToArtboardID: P0, _animatedBy: P1): R;
    changeVisibleArtboardID<R = void, P0 = unknown>(_changeVisibleArtboardID: P0): R;
    sortedArtboards<R = unknown, P0 = unknown>(_sortedArtboards: P0): R;
    webView<R = WKWebView>(): R;
    setWebView<R = void, P0 = WKWebView>(_v: P0): R;
    backgroundView<R = MSColorView>(): R;
    setBackgroundView<R = void, P0 = MSColorView>(_v: P0): R;
    backToolbarItem<R = NSToolbarItem>(): R;
    setBackToolbarItem<R = void, P0 = NSToolbarItem>(_v: P0): R;
    backButton<R = NSButton>(): R;
    setBackButton<R = void, P0 = NSButton>(_v: P0): R;
    startpointButton<R = NSButton>(): R;
    setStartpointButton<R = void, P0 = NSButton>(_v: P0): R;
    startpointToolbarItem<R = NSToolbarItem>(): R;
    setStartpointToolbarItem<R = void, P0 = NSToolbarItem>(_v: P0): R;
    artboardButton<R = NSPopUpButton>(): R;
    setArtboardButton<R = void, P0 = NSPopUpButton>(_v: P0): R;
    artboardToolbarItem<R = NSToolbarItem>(): R;
    setArtboardToolbarItem<R = void, P0 = NSToolbarItem>(_v: P0): R;
    currentURL<R = NSURL>(): R;
    fittingWindowFrame<R = CGRect>(): R;
    viewPort<R = CGRect>(): R;
    currentStartpoint<R = MSImmutableArtboardGroup>(): R;
    startpoints<R = NSArray>(): R;
    firstArtboardID<R = NSString>(): R;
    defaultArtboardID<R = NSString>(): R;
    visibleArtboardID<R = NSString>(): R;
    currentArtboardID<R = NSString>(): R;
    currentMutableDocument<R = MSDocumentData>(): R;
    currentDocument<R = MSImmutableDocumentData>(): R;
    dataProvider<R = MSMirrorDataProvider>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSMirrorWindowController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindowController, MSMirrorWindowControllerContentProtocol, NSWindowDelegateProtocol, WKNavigationDelegateProtocol, WKScriptMessageHandlerProtocol, NSToolbarDelegateProtocol {
      alloc<R = MSMirrorWindowController>(): R;
      new: <R = MSMirrorWindowController>() => R;
      close<R = void>(): R;
      show<R = void>(): R;
      sharedController<R = unknown>(): R;
    }
  }
}

declare const MSMirrorWindowController: cocoa.MSMirrorWindowController.CLASS;
