/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintPanelAccessorizingProtocol<T0 = void, T1 = void, T2 = void> {
    localizedSummaryItems<R = NSArray>(): R;
    keyPathsForValuesAffectingPreview<R = NSSet>(): R;
  }
  namespace NSPrintPanelAccessorizingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
