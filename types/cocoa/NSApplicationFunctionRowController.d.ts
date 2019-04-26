/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSApplicationFunctionRowController<T0 = void, T1 = void, T2 = void> extends NSObject, NSTouchBarFinderObserverProtocol {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _refreshTouchBarView<R = void, P0 = unknown>(__refreshTouchBarView: P0): R;
    dealloc<R = void>(): R;
    _sync<R = void>(): R;
    _teardown<R = void>(): R;
    _noteBarsChanged<R = void>(): R;
    _setup<R = void>(): R;
    _updateEscapeKeyItemSize<R = void>(): R;
    _updateEscapeKeyItem<R = void>(): R;
    applicationFunctionRow<R = NSFunctionRow>(): R;
    _customizationController<R = NSTouchBarCustomizationController>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSApplicationFunctionRowController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSTouchBarFinderObserverProtocol {
      alloc<R = NSApplicationFunctionRowController>(): R;
      new: <R = NSApplicationFunctionRowController>() => R;
      sharedApplicationFunctionRowController<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSApplicationFunctionRowController: cocoa.NSApplicationFunctionRowController.CLASS;
