/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLicenseSheetAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, MSWindowBadgeActionProtocol {
    validate<R = boolean>(): R;
    label<R = unknown>(): R;
    hasDynamicTitle<R = boolean>(): R;
    runLicenseDialog<R = void, P0 = unknown>(_runLicenseDialog: P0): R;
    numberOfBadges<R = number>(): R;
    badgeTint<R = NSColor>(): R;
    badgeTitle<R = NSAttributedString>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSLicenseSheetAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, MSWindowBadgeActionProtocol {
      alloc<R = MSLicenseSheetAction>(): R;
      new: <R = MSLicenseSheetAction>() => R;
    }
  }
}

declare const MSLicenseSheetAction: cocoa.MSLicenseSheetAction.CLASS;
