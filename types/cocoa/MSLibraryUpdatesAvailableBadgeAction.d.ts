/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLibraryUpdatesAvailableBadgeAction<T0 = void, T1 = void, T2 = void> extends MSAction, MSWindowBadgeActionProtocol {
    librariesWithUpdates<R = unknown>(): R;
    label<R = unknown>(): R;
    badgeTint<R = NSColor>(): R;
    numberOfBadges<R = number>(): R;
    badgeTitle<R = NSAttributedString>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSLibraryUpdatesAvailableBadgeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAction, MSWindowBadgeActionProtocol {
      alloc<R = MSLibraryUpdatesAvailableBadgeAction>(): R;
      new: <R = MSLibraryUpdatesAvailableBadgeAction>() => R;
    }
  }
}

declare const MSLibraryUpdatesAvailableBadgeAction: cocoa.MSLibraryUpdatesAvailableBadgeAction.CLASS;
