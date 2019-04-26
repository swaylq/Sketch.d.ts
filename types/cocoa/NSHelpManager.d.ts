/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHelpManager<T0 = void, T1 = void, T2 = void> extends NSObject {
    registerBooksInBundle<R = boolean, P0 = unknown>(_registerBooksInBundle: P0): R;
    findString_inBook<R = void, P0 = unknown, P1 = unknown>(_findString: P0, _inBook: P1): R;
    openHelpAnchor_inBook<R = void, P0 = unknown, P1 = unknown>(_openHelpAnchor: P0, _inBook: P1): R;
    showContextHelpForObject_locationHint<R = boolean, P0 = unknown, P1 = CGPoint>(_showContextHelpForObject: P0, _locationHint: P1): R;
    contextHelpForObject<R = unknown, P0 = unknown>(_contextHelpForObject: P0): R;
    removeContextHelpForObject<R = void, P0 = unknown>(_removeContextHelpForObject: P0): R;
    setContextHelp_forObject<R = void, P0 = unknown, P1 = unknown>(_setContextHelp: P0, _forObject: P1): R;
    _auxiliaryHelpBookBundlesCreatingIfNeeded<R = unknown, P0 = boolean>(__auxiliaryHelpBookBundlesCreatingIfNeeded: P0): R;
    _registeredHelpBookBundles<R = unknown>(): R;
    dealloc<R = void>(): R;
    registerHelpBook<R = boolean>(): R;
    _showHelpForBundle<R = boolean, P0 = unknown>(__showHelpForBundle: P0): R;
    showHelpFile_context<R = void, P0 = unknown, P1 = number>(_showHelpFile: P0, _context: P1): R;
    _cleanupHelpForQuit<R = void>(): R;
    _prepareHelpWindow_locationHint<R = void, P0 = unknown, P1 = CGPoint>(__prepareHelpWindow: P0, _locationHint: P1): R;
    _placeHelpWindowNear<R = void, P0 = CGPoint>(__placeHelpWindowNear: P0): R;
    _screenRectContainingPoint<R = CGRect, P0 = CGPoint>(__screenRectContainingPoint: P0): R;
    _setBundleForHelpSearch<R = void, P0 = unknown>(__setBundleForHelpSearch: P0): R;
    _resolveHelpKeyForObject<R = unknown, P0 = unknown>(__resolveHelpKeyForObject: P0): R;
    _helpKeyForObject<R = unknown, P0 = unknown>(__helpKeyForObject: P0): R;
    _helpBundleForObject<R = unknown, P0 = unknown>(__helpBundleForObject: P0): R;
    _removeHelpKeyForObject<R = void, P0 = unknown>(__removeHelpKeyForObject: P0): R;
    _setHelpKey_forObject<R = void, P0 = unknown, P1 = unknown>(__setHelpKey: P0, _forObject: P1): R;
    _addAuxiliaryHelpBookBundle<R = void, P0 = unknown>(__addAuxiliaryHelpBookBundle: P0): R;
    _helpWindow<R = unknown>(): R;
    _orderOutHelpWindowAfterEventMask<R = boolean, P0 = number>(__orderOutHelpWindowAfterEventMask: P0): R;
    _orderOutHelpWindow<R = boolean>(): R;
    _orderFrontHelpWindow<R = void>(): R;
  }
  namespace NSHelpManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSHelpManager>(): R;
      new: <R = NSHelpManager>() => R;
      isContextHelpModeActive<R = boolean>(): R;
      setContextHelpModeActive<R = void, P0 = boolean>(_setContextHelpModeActive: P0): R;
      sharedHelpManager<R = unknown>(): R;
      _activateHelpModeBasedOnEvent<R = boolean, P0 = unknown>(__activateHelpModeBasedOnEvent: P0): R;
      _keyboardIsOldNeXT<R = boolean>(): R;
      _setCtrlAltForHelpDesired<R = void, P0 = boolean>(__setCtrlAltForHelpDesired: P0): R;
      _isCtrlAltForHelpDesired<R = boolean>(): R;
    }
  }
}

declare const NSHelpManager: cocoa.NSHelpManager.CLASS;
