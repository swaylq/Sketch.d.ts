/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentTitlebarPopoverViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSRemoteViewDelegateProtocol {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _enqueueOperationWithBlock<R = void, P0 = CDUnknownBlockType>(__enqueueOperationWithBlock: P0): R;
    _whenDocumentOperationCompletesPerformBlock<R = void, P0 = CDUnknownBlockType>(__whenDocumentOperationCompletesPerformBlock: P0): R;
    _didFinishOperation<R = void>(): R;
    _willStartOperation<R = void>(): R;
    invalidate<R = void>(): R;
    prepareViewThenContinue<R = void, P0 = CDUnknownBlockType>(_prepareViewThenContinue: P0): R;
    _setupBridge<R = boolean>(): R;
    initWithDocument<R = unknown, P0 = unknown>(_initWithDocument: P0): R;
    invalidationHandler<R = CDUnknownBlockType>(): R;
    setInvalidationHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    operationWaiter<R = CDUnknownBlockType>(): R;
    setOperationWaiter<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    shouldRetainExportedObject<R = boolean>(): R;
  }
  namespace NSDocumentTitlebarPopoverViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSRemoteViewDelegateProtocol {
      alloc<R = NSDocumentTitlebarPopoverViewController>(): R;
      new: <R = NSDocumentTitlebarPopoverViewController>() => R;
      warmup<R = void>(): R;
      _sharedXPCListenerClass<R = unknown>(): R;
      _remoteViewClass<R = unknown>(): R;
    }
  }
}

declare const NSDocumentTitlebarPopoverViewController: cocoa.NSDocumentTitlebarPopoverViewController.CLASS;
