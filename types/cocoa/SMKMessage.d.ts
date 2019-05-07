/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKMessage<T0 = void, T1 = void, T2 = void> extends NSObject, SMKMessageCodingProtocol {
    cxx_destruct<R = void>(): R;
    initWithType<R = unknown, P0 = unknown>(_initWithType: P0): R;
    content<R = SMKMessageCoding>(): R;
    setContent<R = void, P0 = SMKMessageCoding>(_v: P0): R;
    type<R = NSString>(): R;
    setType<R = void, P0 = NSString>(_v: P0): R;
    contentClass<R = unknown>(): R;
    dictionaryRepresentation<R = NSDictionary>(): R;
    messageData<R = NSData>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace SMKMessage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, SMKMessageCodingProtocol {
      alloc<R = SMKMessage>(): R;
      new: <R = SMKMessage>() => R;
      classForType<R = unknown, P0 = unknown>(_classForType: P0): R;
      messageFromData<R = unknown, P0 = unknown>(_messageFromData: P0): R;
    }
  }
}

declare const SMKMessage: cocoa.SMKMessage.CLASS;
