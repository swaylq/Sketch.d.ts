/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFindPatternAttachment<T0 = void, T1 = void, T2 = void> extends NSTextAttachment {
    description<R = unknown>(): R;
  }
  namespace NSFindPatternAttachment {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextAttachment {}
  }
}

declare const NSFindPatternAttachment: cocoa.NSFindPatternAttachment.CLASS;
