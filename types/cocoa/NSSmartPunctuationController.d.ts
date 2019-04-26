/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSmartPunctuationController<T0 = void, T1 = void, T2 = void> extends NSObject {
    clientDidReplaceRange_changeInLength<R = void, P0 = _NSRange, P1 = number>(_clientDidReplaceRange: P0, _changeInLength: P1): R;
    dealloc<R = void>(): R;
    client<R = NSSmartPunctuationClient>(): R;
    setClient<R = void, P0 = NSSmartPunctuationClient>(_v: P0): R;
    smartDashesEnabled<R = boolean>(): R;
    setSmartDashesEnabled<R = void, P0 = boolean>(_v: P0): R;
    smartQuotesEnabled<R = boolean>(): R;
    setSmartQuotesEnabled<R = void, P0 = boolean>(_v: P0): R;
    smartQuoteOptions<R = NSSmartQuoteOptions>(): R;
    setSmartQuoteOptions<R = void, P0 = NSSmartQuoteOptions>(_v: P0): R;
  }
  namespace NSSmartPunctuationController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSSmartPunctuationController>(): R;
      new: <R = NSSmartPunctuationController>() => R;
    }
  }
}

declare const NSSmartPunctuationController: cocoa.NSSmartPunctuationController.CLASS;
