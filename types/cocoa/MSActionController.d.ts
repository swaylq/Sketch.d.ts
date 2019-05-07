/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSActionController<T0 = void, T1 = void, T2 = void> extends NSResponder {
    cxx_destruct<R = void>(): R;
    firstActionToHandleKeyEvent<R = unknown, P0 = unknown>(_firstActionToHandleKeyEvent: P0): R;
    forwardKeyEvent<R = boolean, P0 = unknown>(_forwardKeyEvent: P0): R;
    isSystemSeparatorID<R = boolean, P0 = unknown>(_isSystemSeparatorID: P0): R;
    performActionWithID_sender<R = void, P0 = unknown, P1 = unknown>(_performActionWithID: P0, _sender: P1): R;
    actionForSelector<R = unknown, P0 = string>(_actionForSelector: P0): R;
    actionForID<R = unknown, P0 = unknown>(_actionForID: P0): R;
    allActions<R = unknown>(): R;
    insertAfterResponder<R = void, P0 = unknown>(_insertAfterResponder: P0): R;
    assertValidActionID<R = void, P0 = unknown>(_assertValidActionID: P0): R;
    registerAction<R = void, P0 = unknown>(_registerAction: P0): R;
    performFakeActionWithID_context_block<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_performFakeActionWithID: P0, _context: P1, _block: P2): R;
    unregisterActionObserver<R = void, P0 = unknown>(_unregisterActionObserver: P0): R;
    registerActionObserver<R = void, P0 = unknown>(_registerActionObserver: P0): R;
    didInstantActionWithID_context<R = void, P0 = unknown, P1 = unknown>(_didInstantActionWithID: P0, _context: P1): R;
    didFinishActionWithID_context<R = void, P0 = unknown, P1 = unknown>(_didFinishActionWithID: P0, _context: P1): R;
    willBeginActionWithID_context<R = void, P0 = unknown, P1 = unknown>(_willBeginActionWithID: P0, _context: P1): R;
    observers<R = NSMutableSet>(): R;
    setObservers<R = void, P0 = NSMutableSet>(_v: P0): R;
    actionsByIdentifier<R = NSMutableDictionary>(): R;
    setActionsByIdentifier<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    singleKeyShortcuts<R = NSDictionary>(): R;
    setSingleKeyShortcuts<R = void, P0 = NSDictionary>(_v: P0): R;
  }
  namespace MSActionController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSResponder {
      alloc<R = MSActionController>(): R;
      new: <R = MSActionController>() => R;
    }
  }
}

declare const MSActionController: cocoa.MSActionController.CLASS;
