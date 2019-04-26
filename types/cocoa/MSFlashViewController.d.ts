/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlashViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    cxx_destruct<R = void>(): R;
    helpPressed<R = void, P0 = unknown>(_helpPressed: P0): R;
    closeFlash<R = void, P0 = unknown>(_closeFlash: P0): R;
    closeBlock<R = CDUnknownBlockType>(): R;
    setCloseBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    helpBlock<R = CDUnknownBlockType>(): R;
    setHelpBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    closeButton<R = NSButton>(): R;
    setCloseButton<R = void, P0 = NSButton>(_v: P0): R;
    helpButton<R = NSButton>(): R;
    setHelpButton<R = void, P0 = NSButton>(_v: P0): R;
    message<R = NSTextField>(): R;
    setMessage<R = void, P0 = NSTextField>(_v: P0): R;
  }
  namespace MSFlashViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = MSFlashViewController>(): R;
      new: <R = MSFlashViewController>() => R;
      flashViewControllerWithMessage_closeBlock_helpBlock<R = unknown, P0 = unknown, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType>(_flashViewControllerWithMessage: P0, _closeBlock: P1, _helpBlock: P2): R;
    }
  }
}

declare const MSFlashViewController: cocoa.MSFlashViewController.CLASS;
