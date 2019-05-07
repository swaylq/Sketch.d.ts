/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIUnarchiver<T0 = void, T1 = void, T2 = void> extends NSCoder {
    finishDecoding<R = void>(): R;
    dealloc<R = void>(): R;
    _subcoderWithValueForKey<R = unknown, P0 = unknown>(__subcoderWithValueForKey: P0): R;
    _unarchivers<R = NSArray>(): R;
    set_unarchivers<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace NSPersistentUIUnarchiver {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCoder {
      alloc<R = NSPersistentUIUnarchiver>(): R;
      new: <R = NSPersistentUIUnarchiver>() => R;
    }
  }
}

declare const NSPersistentUIUnarchiver: cocoa.NSPersistentUIUnarchiver.CLASS;
