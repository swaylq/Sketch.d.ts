/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPreLibertyHighlightToSelectionColorModifier<T0 = void, T1 = void, T2 = void> extends NSObject, NSDynamicColorModifierProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSPreLibertyHighlightToSelectionColorModifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSDynamicColorModifierProtocol {
      alloc<R = NSPreLibertyHighlightToSelectionColorModifier>(): R;
      new: <R = NSPreLibertyHighlightToSelectionColorModifier>() => R;
      sharedInstance<R = unknown>(): R;
    }
  }
}

declare const NSPreLibertyHighlightToSelectionColorModifier: cocoa.NSPreLibertyHighlightToSelectionColorModifier.CLASS;
