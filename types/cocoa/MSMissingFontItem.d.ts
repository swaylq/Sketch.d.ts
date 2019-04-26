/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMissingFontItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
    missingFontTitle<R = unknown>(): R;
    hasMoreThanOneMissingFont<R = boolean>(): R;
    missingFontFamilyButton<R = NSButton>(): R;
    setMissingFontFamilyButton<R = void, P0 = NSButton>(_v: P0): R;
    missingFontsLabel<R = NSTextField>(): R;
    setMissingFontsLabel<R = void, P0 = NSTextField>(_v: P0): R;
  }
  namespace MSMissingFontItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSMissingFontItem>(): R;
      new: <R = MSMissingFontItem>() => R;
    }
  }
}

declare const MSMissingFontItem: cocoa.MSMissingFontItem.CLASS;
