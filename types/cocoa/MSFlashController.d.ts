/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlashController<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    clearFlash<R = void>(): R;
    removeMessage<R = void, P0 = unknown>(_removeMessage: P0): R;
    displayFixedMessage_withHelpHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_displayFixedMessage: P0, _withHelpHandler: P1): R;
    displayWarningMessage_withHelpHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_displayWarningMessage: P0, _withHelpHandler: P1): R;
    displayMessage_userClosable_helpBlock<R = unknown, P0 = unknown, P1 = boolean, P2 = CDUnknownBlockType>(_displayMessage: P0, _userClosable: P1, _helpBlock: P2): R;
    displayFlashMessage<R = unknown, P0 = unknown>(_displayFlashMessage: P0): R;
    flash<R = MSFlashViewController>(): R;
    setFlash<R = void, P0 = MSFlashViewController>(_v: P0): R;
    messages<R = NSMutableArray>(): R;
    setMessages<R = void, P0 = NSMutableArray>(_v: P0): R;
    stackView<R = NSStackView>(): R;
    setStackView<R = void, P0 = NSStackView>(_v: P0): R;
  }
  namespace MSFlashController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSFlashController>(): R;
      new: <R = MSFlashController>() => R;
    }
  }
}

declare const MSFlashController: cocoa.MSFlashController.CLASS;
