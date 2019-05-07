/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSIncompatiblePluginsDisabledAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, MSWindowBadgeActionProtocol {
    label<R = unknown>(): R;
    numberOfBadges<R = number>(): R;
    badgeTint<R = NSColor>(): R;
    badgeTitle<R = NSAttributedString>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSIncompatiblePluginsDisabledAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, MSWindowBadgeActionProtocol {
      alloc<R = MSIncompatiblePluginsDisabledAction>(): R;
      new: <R = MSIncompatiblePluginsDisabledAction>() => R;
    }
  }
}

declare const MSIncompatiblePluginsDisabledAction: cocoa.MSIncompatiblePluginsDisabledAction.CLASS;
