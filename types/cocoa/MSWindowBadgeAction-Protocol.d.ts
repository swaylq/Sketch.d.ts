/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWindowBadgeActionProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    badgeTint<R = NSColor>(): R;
    badgeTitle<R = NSAttributedString>(): R;
    numberOfBadges<R = number>(): R;
  }
  namespace MSWindowBadgeActionProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
