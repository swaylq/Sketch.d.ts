/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEmojiCheckingResult<T0 = void, T1 = void, T2 = void> extends NSCorrectionCheckingResult {}
  namespace NSEmojiCheckingResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCorrectionCheckingResult {
      alloc<R = NSEmojiCheckingResult>(): R;
      new: <R = NSEmojiCheckingResult>() => R;
    }
  }
}

declare const NSEmojiCheckingResult: cocoa.NSEmojiCheckingResult.CLASS;
