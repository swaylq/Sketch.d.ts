/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFontOptionsColorWell<T0 = void, T1 = void, T2 = void> extends NSColorWell {}
  namespace NSFontOptionsColorWell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSColorWell {
      alloc<R = NSFontOptionsColorWell>(): R;
      new: <R = NSFontOptionsColorWell>() => R;
    }
  }
}

declare const NSFontOptionsColorWell: cocoa.NSFontOptionsColorWell.CLASS;
