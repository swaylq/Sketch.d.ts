/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardSheetSegueTemplate<T0 = void, T1 = void, T2 = void> extends NSStoryboardSegueTemplate, NSCodingProtocol {}
  namespace NSStoryboardSheetSegueTemplate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSStoryboardSegueTemplate, NSCodingProtocol {
      alloc<R = NSStoryboardSheetSegueTemplate>(): R;
      new: <R = NSStoryboardSheetSegueTemplate>() => R;
    }
  }
}

declare const NSStoryboardSheetSegueTemplate: cocoa.NSStoryboardSheetSegueTemplate.CLASS;
