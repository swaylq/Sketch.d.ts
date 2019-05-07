/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceFontsAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, MSWindowBadgeActionProtocol {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    replaceMissingFonts<R = void, P0 = unknown>(_replaceMissingFonts: P0): R;
    badgeTint<R = NSColor>(): R;
    numberOfBadges<R = number>(): R;
    badgeTitle<R = NSAttributedString>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSReplaceFontsAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, MSWindowBadgeActionProtocol {
      alloc<R = MSReplaceFontsAction>(): R;
      new: <R = MSReplaceFontsAction>() => R;
    }
  }
}

declare const MSReplaceFontsAction: cocoa.MSReplaceFontsAction.CLASS;
