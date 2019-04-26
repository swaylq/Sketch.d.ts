/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDynamicColorModifierProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, NSCopyingProtocol, NSCodingProtocol {
    colorByApplyingToColor<R = NSColor, P0 = NSColor>(_colorByApplyingToColor: P0): R;
  }
  namespace NSDynamicColorModifierProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, NSCopyingProtocol, NSCodingProtocol {}
  }
}
