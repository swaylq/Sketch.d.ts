/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSound<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol, NSPasteboardReadingProtocol, NSPasteboardWritingProtocol {}
  namespace NSSound {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol, NSPasteboardReadingProtocol, NSPasteboardWritingProtocol {
      alloc<R = NSSound>(): R;
      new: <R = NSSound>() => R;
      _alertType<R = number>(): R;
    }
  }
}

declare const NSSound: cocoa.NSSound.CLASS;
