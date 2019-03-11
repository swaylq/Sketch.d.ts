/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMachPortDelegateProtocol<T = any> extends cocoa.NSPortDelegateProtocol {
    handleMachMessage<R = void, P0 = void>(_handleMachMessage: P0): R;
  }
  namespace classes {
    export interface NSMachPortDelegateProtocol<T = any> extends cocoa.classes.NSPortDelegateProtocol {  }
  }
}

declare const NSMachPortDelegateProtocol: cocoa.classes.NSMachPortDelegateProtocol;
