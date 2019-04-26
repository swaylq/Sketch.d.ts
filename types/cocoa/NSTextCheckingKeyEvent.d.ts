/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextCheckingKeyEvent<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    description<R = unknown>(): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    initWithKeyboardLayoutType_keyboardType_identifier_primaryLanguage_flags_timestamp_characters_charactersIgnoringModifiers<R = unknown, P0 = number, P1 = number, P2 = unknown, P3 = unknown, P4 = number, P5 = number, P6 = unknown, P7 = unknown>(_initWithKeyboardLayoutType: P0, _keyboardType: P1, _identifier: P2, _primaryLanguage: P3, _flags: P4, _timestamp: P5, _characters: P6, _charactersIgnoringModifiers: P7): R;
    charactersIgnoringModifiers<R = NSString>(): R;
    characters<R = NSString>(): R;
    timestamp<R = number>(): R;
    flags<R = number>(): R;
    primaryLanguage<R = NSString>(): R;
    keyboardLayoutIdentifier<R = NSString>(): R;
    keyboardType<R = number>(): R;
    keyboardLayoutType<R = number>(): R;
  }
  namespace NSTextCheckingKeyEvent {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSTextCheckingKeyEvent>(): R;
      new: <R = NSTextCheckingKeyEvent>() => R;
    }
  }
}

declare const NSTextCheckingKeyEvent: cocoa.NSTextCheckingKeyEvent.CLASS;
