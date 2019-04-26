/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CATransactionCompletionItem<T0 = void, T1 = void, T2 = void> {
    // + CATransactionCompletionItem(NSAnimationContextCompletionHandlerSuspension):
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace CATransactionCompletionItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const CATransactionCompletionItem: cocoa.CATransactionCompletionItem.CLASS;
