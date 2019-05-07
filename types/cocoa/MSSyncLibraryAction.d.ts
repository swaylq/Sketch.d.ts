/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSyncLibraryAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, MSWindowBadgeActionProtocol {
    label<R = unknown>(): R;
    areForeignObjectsOutOfDate<R = boolean>(): R;
    numberOfBadges<R = number>(): R;
    badgeTint<R = NSColor>(): R;
    badgeTitle<R = NSAttributedString>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSSyncLibraryAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, MSWindowBadgeActionProtocol {
      alloc<R = MSSyncLibraryAction>(): R;
      new: <R = MSSyncLibraryAction>() => R;
    }
  }
}

declare const MSSyncLibraryAction: cocoa.MSSyncLibraryAction.CLASS;
