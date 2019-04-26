/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBadgeMenuAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, MSWindowBadgeActionProtocol {
    label<R = unknown>(): R;
    badgedActions<R = unknown>(): R;
    buildMenu<R = unknown>(): R;
    numberOfBadges<R = number>(): R;
    badgeTint<R = NSColor>(): R;
    badgeTitle<R = NSAttributedString>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSBadgeMenuAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, MSWindowBadgeActionProtocol {
      alloc<R = MSBadgeMenuAction>(): R;
      new: <R = MSBadgeMenuAction>() => R;
    }
  }
}

declare const MSBadgeMenuAction: cocoa.MSBadgeMenuAction.CLASS;
