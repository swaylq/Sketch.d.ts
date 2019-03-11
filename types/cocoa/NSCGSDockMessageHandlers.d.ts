/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSDockMessageHandlers<T = any> extends cocoa.NSObject {
    handlersForMessageID<R = unknown, P0 = number>(_handlersForMessageID: P0): R;
    addHandlerForMessage_order_block<R = void, P0 = number, P1 = number, P2 = unknown>(_addHandlerForMessage: P0, _order: P1, _block: P2): R;
  }
  namespace classes {
    export interface NSCGSDockMessageHandlers<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSCGSDockMessageHandlers>(): R;
      new: <R = NSCGSDockMessageHandlers>() => R;
    }
  }
}

declare const NSCGSDockMessageHandlers: cocoa.classes.NSCGSDockMessageHandlers;
